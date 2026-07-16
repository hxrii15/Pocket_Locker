import { Link, useLocation } from 'react-router-dom';
import { LogOut, Moon, Search, Sun, UserRound } from 'lucide-react';
import toast from 'react-hot-toast';
import { logout } from '../firebase/auth.js';
import { useAuth } from '../context/AuthContext.jsx';
import Logo from './Logo.jsx';

export default function Navbar({ search, onSearch }) {
  const { theme, toggleTheme, user } = useAuth();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Signed out.');
    } catch (error) {
      toast.error(error.message || 'Unable to sign out.');
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-void/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center">
        <Link to="/vault" className="mr-auto">
          <Logo compact />
        </Link>
        {onSearch && (
          <label className="relative w-full md:max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ecto" />
            <input
              className="ghost-input search-input"
              value={search}
              onChange={(event) => onSearch(event.target.value)}
              placeholder="Search services"
            />
          </label>
        )}
        <nav className="flex items-center gap-2">
          <Link className={`icon-button ${location.pathname === '/dashboard' ? 'is-active' : ''}`} to="/dashboard" title="Profile">
            <UserRound className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Link>
          <button className="icon-button" type="button" onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="icon-button" type="button" onClick={handleLogout} title={`Sign out ${user?.email || ''}`}>
            <LogOut className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </header>
  );
}
