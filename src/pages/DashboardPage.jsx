import { Download, KeyRound, Trash2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useVault } from '../context/VaultContext.jsx';
import { changeUserPassword, deleteCurrentUser, logout, updateUserProfile } from '../firebase/auth.js';
import { fetchUserProfile, saveUserProfile } from '../firebase/firestore.js';
import { exportEncryptedPayload } from '../utils/encryption.js';

const avatars = ['GF', 'VX', 'OM', 'ZN'];

export default function DashboardPage() {
  const { user, theme, toggleTheme } = useAuth();
  const { accounts, loadAccounts } = useVault();
  const [profile, setProfile] = useState({ displayName: user?.displayName || '', bio: '', avatarUrl: user?.photoURL || '' });
  const [newPassword, setNewPassword] = useState('');
  const [deleteText, setDeleteText] = useState('');

  useEffect(() => {
    loadAccounts();
  }, [loadAccounts]);

  useEffect(() => {
    let mounted = true;

    const loadProfile = async () => {
      try {
        const savedProfile = await fetchUserProfile(user.uid);
        if (mounted && savedProfile) setProfile((current) => ({ ...current, ...savedProfile }));
      } catch (error) {
        toast.error(error.message);
      }
    };

    loadProfile();
    return () => {
      mounted = false;
    };
  }, [user.uid]);

  const stats = useMemo(() => {
    return accounts.reduce(
      (acc, account) => {
        acc.total += 1;
        acc.categories[account.category] = (acc.categories[account.category] || 0) + 1;
        return acc;
      },
      { total: 0, categories: {} },
    );
  }, [accounts]);

  const saveProfile = async () => {
    try {
      await updateUserProfile({ displayName: profile.displayName, photoURL: profile.avatarUrl });
      await saveUserProfile(user.uid, profile);
      toast.success('Profile updated.');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const exportVault = () => {
    const encrypted = exportEncryptedPayload(accounts, user.uid);
    const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), payload: encrypted }, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'pocket-locker-vault-backup.json';
    link.click();
    URL.revokeObjectURL(url);
    toast.success('Encrypted backup exported.');
  };

  const handlePasswordChange = async () => {
    if (newPassword.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }
    try {
      await changeUserPassword(newPassword);
      setNewPassword('');
      toast.success('Password changed.');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async () => {
    if (deleteText !== 'DELETE') {
      toast.error('Type DELETE to confirm.');
      return;
    }
    try {
      await deleteCurrentUser();
      toast.success('Account deleted.');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className="app-shell min-h-screen pb-10">
      <Navbar />
      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="ghost-card">
          <div className="flex items-center gap-4">
            <div className="grid h-20 w-20 place-items-center rounded-lg border border-ecto/30 bg-ecto/10 font-orbitron text-2xl text-ecto">
              {profile.avatarUrl || (profile.displayName || user.email || 'GF').slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0">
              <h1 className="truncate font-orbitron text-2xl font-bold text-white">{profile.displayName || 'Pocket Keeper'}</h1>
              <p className="truncate text-zinc-400">{user.email}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            <Field label="Display Name" value={profile.displayName} onChange={(value) => setProfile((current) => ({ ...current, displayName: value }))} />
            <Field label="Email" value={user.email} readOnly />
            <div>
              <label className="field-label">Bio</label>
              <textarea
                className="ghost-input min-h-24 resize-y"
                value={profile.bio}
                onChange={(event) => setProfile((current) => ({ ...current, bio: event.target.value }))}
              />
            </div>
            <div>
              <p className="field-label">Preset Avatars</p>
              <div className="flex gap-2">
                {avatars.map((avatar) => (
                  <button
                    key={avatar}
                    className={`avatar-choice ${profile.avatarUrl === avatar ? 'is-active' : ''}`}
                    type="button"
                    onClick={() => setProfile((current) => ({ ...current, avatarUrl: avatar }))}
                  >
                    {avatar}
                  </button>
                ))}
              </div>
            </div>
            <button className="ghost-button" type="button" onClick={saveProfile}>
              Save Profile
            </button>
          </div>
        </div>

        <div className="grid gap-5">
          <section className="ghost-card">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-orbitron text-xl font-bold text-white">Vault Stats</h2>
              <button className="ghost-button secondary" type="button" onClick={toggleTheme}>
                {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
              </button>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Stat label="Total" value={stats.total} />
              {Object.entries(stats.categories).map(([category, count]) => (
                <Stat key={category} label={category} value={count} />
              ))}
            </div>
          </section>

          <section className="ghost-card space-y-4">
            <h2 className="font-orbitron text-xl font-bold text-white">Security</h2>
            <button className="ghost-button w-full justify-center" type="button" onClick={exportVault}>
              <Download className="h-5 w-5" /> Export Vault
            </button>
            <div className="flex gap-2">
              <input
                className="ghost-input"
                type="password"
                placeholder="New Firebase password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
              <button className="icon-button" type="button" onClick={handlePasswordChange} title="Change password">
                <KeyRound className="h-5 w-5" />
              </button>
            </div>
            <div className="rounded-lg border border-red-400/30 bg-red-500/10 p-4">
              <p className="font-semibold text-red-100">Delete account permanently</p>
              <div className="mt-3 flex gap-2">
                <input
                  className="ghost-input"
                  placeholder="Type DELETE"
                  value={deleteText}
                  onChange={(event) => setDeleteText(event.target.value)}
                />
                <button className="icon-button danger" type="button" onClick={handleDelete} title="Delete account">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <button className="ghost-button secondary w-full" type="button" onClick={logout}>
              Sign Out
            </button>
          </section>
        </div>
      </section>
    </main>
  );
}

function Field({ label, value, onChange, readOnly = false }) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <input className="ghost-input" value={value || ''} onChange={(event) => onChange?.(event.target.value)} readOnly={readOnly} />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/20 p-4">
      <p className="text-sm font-bold uppercase text-zinc-400">{label}</p>
      <p className="font-orbitron text-3xl font-bold text-ecto">{value}</p>
    </div>
  );
}
