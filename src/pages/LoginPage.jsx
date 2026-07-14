import { useState } from 'react';
import toast from 'react-hot-toast';
import { Mail, LockKeyhole } from 'lucide-react';
import Logo from '../components/Logo.jsx';
import { loginWithEmail, registerWithEmail, resetPassword } from '../firebase/auth.js';
import { useAuth } from '../context/AuthContext.jsx';

export default function LoginPage() {
  const { firebaseReady } = useAuth();
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!firebaseReady) {
      setError('Add Firebase values to .env before signing in.');
      return;
    }

    if (mode === 'register' && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      if (mode === 'register') {
        await registerWithEmail(email, password);
        toast.success('Account created.');
      } else {
        await loginWithEmail(email, password);
        toast.success('Welcome back.');
      }
    } catch (authError) {
      setError(authError.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgot = async () => {
    if (!email) {
      setError('Enter your email first.');
      return;
    }

    try {
      await resetPassword(email);
      toast.success('Password reset email sent.');
    } catch (resetError) {
      setError(resetError.message);
    }
  };

  return (
    <main className="app-shell min-h-screen px-4 py-8">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-md place-items-center">
        <div className="ghost-card w-full">
          <Logo />
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <Input icon={<Mail className="h-5 w-5" />} type="email" placeholder="Email" value={email} onChange={setEmail} />
            <Input
              icon={<LockKeyhole className="h-5 w-5" />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
            />
            {mode === 'register' && (
              <Input
                icon={<LockKeyhole className="h-5 w-5" />}
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={setConfirmPassword}
              />
            )}
            {error && <p className="rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm font-semibold text-red-200">{error}</p>}
            <button className="ghost-button w-full" type="submit" disabled={loading}>
              {loading ? 'Please wait...' : mode === 'register' ? 'Create Account' : 'Sign In'}
            </button>
          </form>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm font-semibold">
            <button className="text-ecto hover:text-white" type="button" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
              {mode === 'login' ? 'Create Account' : 'Back to Login'}
            </button>
            <button className="text-zinc-300 hover:text-ecto" type="button" onClick={handleForgot}>
              Forgot Password
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function Input({ icon, value, onChange, ...props }) {
  return (
    <label className="relative block">
      <span className="pointer-events-none absolute left-4 top-1/2 grid h-5 w-5 -translate-y-1/2 place-items-center text-ecto">
        {icon}
      </span>
      <input
        className="ghost-input login-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required
        {...props}
      />
    </label>
  );
}
