import { Copy, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { copyWithAutoClear } from '../utils/clipboardHelper.js';
import PasswordField from './PasswordField.jsx';

const fallbackIcons = {
  Social: 'S',
  Dev: 'D',
  Finance: 'F',
  Email: 'E',
  Other: 'O',
};

export default function AccountCard({ account, onEdit, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  const handleDelete = () => {
    if (window.confirm(`Delete ${account.serviceName}?`)) onDelete(account.id);
  };

  return (
    <article className="ghost-card overflow-hidden">
      <button className="flex w-full items-center gap-4 text-left" type="button" onClick={() => setExpanded((current) => !current)}>
        <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-lg border border-ecto/25 bg-ecto/10 font-orbitron text-lg text-ecto">
          {account.serviceLogoUrl ? (
            <img
              src={account.serviceLogoUrl}
              alt=""
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            fallbackIcons[account.category] || 'G'
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="truncate font-orbitron text-lg font-bold text-white">{account.serviceName}</h2>
          <p className="truncate text-sm text-zinc-400">{account.username || account.userId || 'No username saved'}</p>
        </div>
        <span className="rounded-full border border-ecto/25 bg-ecto/10 px-3 py-1 text-xs font-bold uppercase text-ecto">
          {account.category}
        </span>
      </button>

      {expanded && (
        <div className="mt-5 space-y-4 border-t border-white/10 pt-5">
          <PasswordField value={account.password} />
          <CopyRow label="Username" value={account.username} />
          <CopyRow label="User ID" value={account.userId} />
          <CopyRow label="Mobile" value={account.mobileNumber} />
          {account.notes && (
            <div>
              <p className="field-label">Notes</p>
              <p className="rounded-lg border border-white/10 bg-black/20 p-3 text-zinc-200">{account.notes}</p>
            </div>
          )}
          <div className="flex justify-end gap-2">
            <button className="icon-button" type="button" onClick={() => onEdit(account)} title="Edit">
              <Pencil className="h-5 w-5" />
            </button>
            <button className="icon-button danger" type="button" onClick={handleDelete} title="Delete">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

function CopyRow({ label, value }) {
  return (
    <div>
      <p className="field-label">{label}</p>
      <div className="flex gap-2">
        <input className="ghost-input" value={value || ''} readOnly />
        <button className="icon-button" type="button" onClick={() => copyWithAutoClear(value, label)} title={`Copy ${label}`}>
          <Copy className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
