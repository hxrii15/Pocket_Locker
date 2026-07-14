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
    if (!user) return;
    dispatch({ type: 'loading' });

    try {
      dispatch({ type: 'loaded', payload: await fetchAccounts(user.uid) });
    } catch (error) {
      dispatch({ type: 'error', payload: error.message });
      toast.error(error.message);
    }
  }, [user]);

  const addAccount = useCallback(
    async (account) => {
      await createAccount(user.uid, account);
      toast.success('Account saved.');
      await loadAccounts();
    },
    [loadAccounts, user],
  );

  const editAccount = useCallback(
    async (id, account) => {
      await updateFirestoreAccount(user.uid, id, account);
      toast.success('Account updated.');
      await loadAccounts();
    },
    [loadAccounts, user],
  );

  const removeAccount = useCallback(
    async (id) => {
      await deleteFirestoreAccount(user.uid, id);
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
