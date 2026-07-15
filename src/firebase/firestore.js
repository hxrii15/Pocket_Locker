import { get, push, ref, remove, serverTimestamp, set, update } from 'firebase/database';
import { db } from './config.js';
import { decryptPassword, encryptPassword } from '../utils/encryption.js';

const requireDb = () => {
  if (!db) throw new Error('Firebase is not configured. Add your Vite Firebase env values.');
  return db;
};

export async function ensureUserProfile(user) {
  await set(ref(requireDb(), `users/${user.uid}/profile`), {
    displayName: user.displayName || '',
    avatarUrl: user.photoURL || '',
    bio: '',
    createdAt: serverTimestamp(),
  });
}

export async function saveUserProfile(uid, profile) {
  await set(ref(requireDb(), `users/${uid}/profile`), profile);
}

export async function fetchUserProfile(uid) {
  const snapshot = await get(ref(requireDb(), `users/${uid}/profile`));
  return snapshot.exists() ? snapshot.val() : null;
}

export async function fetchAccounts(uid) {
  const snapshot = await get(ref(requireDb(), `users/${uid}/accounts`));
  const accounts = snapshot.val() || {};

  return Object.entries(accounts).map(([id, data]) => ({
    id,
    ...data,
    password: decryptPassword(data.encryptedPassword, uid),
  }));
}

export async function createAccount(uid, account) {
  const payload = toRealtimePayload(account, uid, true);
  const accountRef = push(ref(requireDb(), `users/${uid}/accounts`));
  await set(accountRef, payload);
  return accountRef.key;
}

export async function updateAccount(uid, id, account) {
  await update(ref(requireDb(), `users/${uid}/accounts/${id}`), toRealtimePayload(account, uid));
}

export async function deleteAccount(uid, id) {
  await remove(ref(requireDb(), `users/${uid}/accounts/${id}`));
}

function toRealtimePayload(account, uid, includeCreatedAt = false) {
  const domain = account.serviceName?.toLowerCase().replace(/[^a-z0-9]/g, '') || '';

  return {
    serviceName: account.serviceName || '',
    category: account.category || 'Other',
    username: account.username || '',
    userId: account.userId || '',
    encryptedPassword: encryptPassword(account.password || '', uid),
    mobileNumber: account.mobileNumber || '',
    notes: account.notes || '',
    serviceLogoUrl: account.serviceLogoUrl || (domain ? `https://logo.clearbit.com/${domain}.com` : ''),
    updatedAt: serverTimestamp(),
    ...(includeCreatedAt ? { createdAt: serverTimestamp() } : {}),
  };
}
