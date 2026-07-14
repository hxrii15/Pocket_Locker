import CryptoJS from 'crypto-js';

const secretSalt = import.meta.env.VITE_SECRET_SALT || 'pocket-locker-local-development-salt';

export function buildEncryptionKey(uid) {
  return CryptoJS.SHA256(`${uid}:${secretSalt}`).toString();
}

export function encryptPassword(password, uid) {
  if (!password) return '';
  return CryptoJS.AES.encrypt(password, buildEncryptionKey(uid)).toString();
}

export function decryptPassword(encryptedPassword, uid) {
  if (!encryptedPassword) return '';

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, buildEncryptionKey(uid));
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch {
    return '';
  }
}

export function exportEncryptedPayload(payload, uid) {
  return CryptoJS.AES.encrypt(JSON.stringify(payload), buildEncryptionKey(uid)).toString();
}
