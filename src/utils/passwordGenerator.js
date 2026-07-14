const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const lower = 'abcdefghijkmnopqrstuvwxyz';
const numbers = '23456789';
const symbols = '!@#$%^&*_-+=?';

export function generatePassword({
  length = 20,
  includeUpper = true,
  includeLower = true,
  includeNumbers = true,
  includeSymbols = true,
} = {}) {
  const groups = [
    includeUpper && upper,
    includeLower && lower,
    includeNumbers && numbers,
    includeSymbols && symbols,
  ].filter(Boolean);

  if (!groups.length) return '';

  const allCharacters = groups.join('');
  const required = groups.map((group) => pick(group));
  const remaining = Array.from({ length: Math.max(length - required.length, 0) }, () => pick(allCharacters));

  return shuffle([...required, ...remaining]).join('');
}

function pick(chars) {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return chars[array[0] % chars.length];
}

function shuffle(items) {
  return items
    .map((item) => ({ item, sort: crypto.getRandomValues(new Uint32Array(1))[0] }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}
