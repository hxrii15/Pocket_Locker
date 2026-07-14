import {
  createUserWithEmailAndPassword,
  deleteUser,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from './config.js';

const requireAuth = () => {
  if (!auth) throw new Error('Firebase is not configured. Add your Vite Firebase env values.');
  return auth;
};

export const loginWithEmail = (email, password) =>
  signInWithEmailAndPassword(requireAuth(), email, password);

export const registerWithEmail = (email, password) =>
  createUserWithEmailAndPassword(requireAuth(), email, password);

export const resetPassword = (email) => sendPasswordResetEmail(requireAuth(), email);

export const logout = () => signOut(requireAuth());

export const changeUserPassword = (newPassword) => updatePassword(requireAuth().currentUser, newPassword);

export const updateUserProfile = (profile) => updateProfile(requireAuth().currentUser, profile);

export const deleteCurrentUser = () => deleteUser(requireAuth().currentUser);
