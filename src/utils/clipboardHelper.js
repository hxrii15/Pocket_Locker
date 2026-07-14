import toast from 'react-hot-toast';

export async function copyWithAutoClear(value, label = 'Value') {
  if (!value) return;

  await navigator.clipboard.writeText(value);
  toast.success(`${label} copied. Clipboard clears in 30s.`);

  window.setTimeout(async () => {
    try {
      const current = await navigator.clipboard.readText();
      if (current === value) {
        await navigator.clipboard.writeText('');
        toast(`${label} cleared from clipboard.`);
      }
    } catch {
      toast.error('Clipboard auto-clear was blocked by the browser.');
    }
  }, 30000);
}
