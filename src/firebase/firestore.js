import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from './config.js';
import { decryptPassword, encryptPassword } from '../utils/encryption.js';

const requireDb = () => {
  if (!db) throw new Error('Firebase is not configured. Add your Vite Firebase env values.');
  return db;
};

export async function ensureUserProfile(user) {
  await setDoc(
    doc(requireDb(), 'users', user.uid),
    {
      profile: {
        displayName: user.displayName || '',
        avatarUrl: user.photoURL || '',
        bio: '',
        createdAt: serverTimestamp(),
      },
    },
    { merge: true },
  );
}

export async function saveUserProfile(uid, profile) {
  await setDoc(doc(requireDb(), 'users', uid), { profile }, { merge: true });
}

export async function fetchUserProfile(uid) {
  const snapshot = await getDoc(doc(requireDb(), 'users', uid));
  return snapshot.exists() ? snapshot.data().profile || null : null;
}

export async function fetchAccounts(uid) {
  const snapshot = await getDocs(collection(requireDb(), 'users', uid, 'accounts'));
  return snapshot.docs.map((accountDoc) => {
    const data = accountDoc.data();
    return {
      id: accountDoc.id,
      ...data,
      password: decryptPassword(data.encryptedPassword, uid),
    };
  });
}

export async function createAccount(uid, account) {
  const payload = toFirestorePayload(account, uid, true);
  const ref = await addDoc(collection(requireDb(), 'users', uid, 'accounts'), payload);
  return ref.id;
}

export async function updateAccount(uid, id, account) {
  await updateDoc(doc(requireDb(), 'users', uid, 'accounts', id), toFirestorePayload(account, uid));
}

export async function deleteAccount(uid, id) {
  await deleteDoc(doc(requireDb(), 'users', uid, 'accounts', id));
}

function toFirestorePayload(account, uid, includeCreatedAt = false) {
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
