import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { auth, isFirebaseConfigured } from '../firebase/config.js';
import { ensureUserProfile } from '../firebase/firestore.js';
import { logout } from '../firebase/auth.js';

const AuthContext = createContext(null);
const WARNING_MS = 13 * 60 * 1000;
const TIMEOUT_MS = 15 * 60 * 1000;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem('pocket-locker-theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('pocket-locker-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setLoading(false);
      return undefined;
    }

    return onAuthStateChanged(auth, async (nextUser) => {
      setUser(nextUser);
      setLoading(false);

      if (nextUser) {
        try {
          await ensureUserProfile(nextUser);
        } catch (error) {
          toast.error(error.message);
        }
      }
    });
  }, []);

  useEffect(() => {
    if (!user) return undefined;

    let warningTimer;
    let timeoutTimer;

    const resetTimers = () => {
      clearTimeout(warningTimer);
      clearTimeout(timeoutTimer);
      warningTimer = window.setTimeout(() => {
        toast('Session expires in 2 minutes due to inactivity.', { icon: '!' });
      }, WARNING_MS);
      timeoutTimer = window.setTimeout(async () => {
        await logout();
        toast.error('Signed out after 15 minutes of inactivity.');
      }, TIMEOUT_MS);
    };

    const events = ['mousemove', 'keydown', 'click', 'touchstart', 'scroll'];
    events.forEach((event) => window.addEventListener(event, resetTimers, { passive: true }));
    resetTimers();

    return () => {
      clearTimeout(warningTimer);
      clearTimeout(timeoutTimer);
      events.forEach((event) => window.removeEventListener(event, resetTimers));
    };
  }, [user]);

  const value = useMemo(
    () => ({
      user,
      loading,
      theme,
      firebaseReady: isFirebaseConfigured,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [loading, theme, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
