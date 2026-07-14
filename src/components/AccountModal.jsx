import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import PasswordField from './PasswordField.jsx';
import PasswordGenerator from './PasswordGenerator.jsx';

const emptyAccount = {
  serviceName: '',
  category: 'Other',
  username: '',
  userId: '',
  password: '',
  mobileNumber: '',
  notes: '',
  serviceLogoUrl: '',
};

const categories = ['Social', 'Dev', 'Finance', 'Email', 'Other'];

export default function AccountModal({ account, open, onClose, onSave }) {
  const [form, setForm] = useState(emptyAccount);
  const [showGenerator, setShowGenerator] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) setForm(account ? { ...emptyAccount, ...account } : emptyAccount);
  }, [account, open]);

  if (!open) return null;

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.serviceName.trim() || !form.password) {
      toast.error('Service name and password are required.');
      return;
    }

    setSaving(true);
    try {
      await onSave(form);
      onClose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-end bg-black/70 p-0 backdrop-blur-sm md:place-items-center md:p-4">
      <form className="modal-panel max-h-[94vh] w-full overflow-y-auto md:max-w-2xl" onSubmit={handleSubmit}>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-orbitron text-xl font-bold text-white">{account ? 'Edit Account' : 'Add Account'}</h2>
          <button className="icon-button" type="button" onClick={onClose} title="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Service Name" value={form.serviceName} onChange={(value) => update('serviceName', value)} required />
          <div>
            <label className="field-label">Category</label>
            <select className="ghost-input" value={form.category} onChange={(event) => update('category', event.target.value)}>
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <Field label="Username" value={form.username} onChange={(value) => update('username', value)} />
          <Field label="User ID" value={form.userId} onChange={(value) => update('userId', value)} />
          <Field label="Mobile Number" value={form.mobileNumber} onChange={(value) => update('mobileNumber', value)} />
          <Field label="Logo URL" value={form.serviceLogoUrl} onChange={(value) => update('serviceLogoUrl', value)} />
        </div>

        <div className="mt-4">
          <PasswordField value={form.password} editable onChange={(value) => update('password', value)} />
          <button className="ghost-button mt-3" type="button" onClick={() => setShowGenerator((current) => !current)}>
            Generate Password
          </button>
        </div>

        {showGenerator && (
          <div className="mt-4">
            <PasswordGenerator onUse={(password) => update('password', password)} />
          </div>
        )}

        <div className="mt-4">
          <label className="field-label">Notes</label>
          <textarea
            className="ghost-input min-h-24 resize-y"
            value={form.notes}
            onChange={(event) => update('notes', event.target.value)}
          />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button className="ghost-button secondary" type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="ghost-button" type="submit" disabled={saving}>
            {saving ? 'Saving...' : 'Save Account'}
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, value, onChange, required = false }) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <input className="ghost-input" value={value} onChange={(event) => onChange(event.target.value)} required={required} />
    </div>
  );
}
