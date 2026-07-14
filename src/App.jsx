import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import VaultPage from './pages/VaultPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { useAuth } from './context/AuthContext.jsx';

export default function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <main className="app-shell grid min-h-screen place-items-center">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-ecto border-t-transparent" />
      </main>
    );
  }

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/vault" replace /> : <LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/vault" element={<VaultPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
      <Route path="*" element={<Navigate to={user ? '/vault' : '/'} replace />} />
    </Routes>
  );
}
