import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import toast from 'react-hot-toast';
import {
  createAccount,
  deleteAccount as deleteFirestoreAccount,
  fetchAccounts,
  updateAccount as updateFirestoreAccount,
} from '../firebase/firestore.js';
import { useAuth } from './AuthContext.jsx';

const VaultContext = createContext(null);

const initialState = {
  accounts: [],
  loading: false,
  error: null,
};

const DATA_TIMEOUT_MS = 10000;

function withTimeout(promise, message) {
  let timeoutId;
  const timeout = new Promise((_, reject) => {
    timeoutId = window.setTimeout(() => reject(new Error(message)), DATA_TIMEOUT_MS);
  });

  return Promise.race([promise, timeout]).finally(() => clearTimeout(timeoutId));
}

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: true, error: null };
    case 'loaded':
      return { ...state, loading: false, accounts: action.payload };
    case 'error':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function VaultProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useAuth();

  const loadAccounts = useCallback(async () => {
    if (!user) {
      dispatch({ type: 'loaded', payload: [] });
      return;
    }
    dispatch({ type: 'loading' });

    try {
      const accounts = await withTimeout(fetchAccounts(user.uid), 'Vault is taking too long to load. Check your connection and try again.');
      dispatch({ type: 'loaded', payload: accounts });
    } catch (error) {
      dispatch({ type: 'error', payload: error.message });
      toast.error(error.message);
    }
  }, [user]);

  const addAccount = useCallback(
    async (account) => {
      if (!user) {
        toast.error('Unable to save account. Please sign in.');
        return;
      }

      await withTimeout(createAccount(user.uid, account), 'Saving is taking too long. Check your database rules and connection, then try again.');
      toast.success('Account saved.');
      await loadAccounts();
    },
    [loadAccounts, user],
  );

  const editAccount = useCallback(
    async (id, account) => {
      if (!user) {
        toast.error('Unable to update account. Please sign in.');
        return;
      }

      await withTimeout(updateFirestoreAccount(user.uid, id, account), 'Updating is taking too long. Check your database rules and connection, then try again.');
      toast.success('Account updated.');
      await loadAccounts();
    },
    [loadAccounts, user],
  );

  const removeAccount = useCallback(
    async (id) => {
      if (!user) {
        toast.error('Unable to delete account. Please sign in.');
        return;
      }

      await withTimeout(deleteFirestoreAccount(user.uid, id), 'Deleting is taking too long. Check your database rules and connection, then try again.');
      toast.success('Account deleted.');
      await loadAccounts();
    },
    [loadAccounts, user],
  );

  const value = useMemo(
    () => ({
      ...state,
      loadAccounts,
      addAccount,
      editAccount,
      removeAccount,
    }),
    [addAccount, editAccount, loadAccounts, removeAccount, state],
  );

  return <VaultContext.Provider value={value}>{children}</VaultContext.Provider>;
}

export function useVault() {
  const context = useContext(VaultContext);
  if (!context) throw new Error('useVault must be used within VaultProvider');
  return context;
}
