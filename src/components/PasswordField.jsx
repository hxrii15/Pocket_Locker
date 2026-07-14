import { Copy, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { copyWithAutoClear } from '../utils/clipboardHelper.js';

export default function PasswordField({ value, label = 'Password', onChange, editable = false }) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <label className="field-label">{label}</label>
      <div className="flex gap-2">
        <input
          className="ghost-input"
          type={visible ? 'text' : 'password'}
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
          readOnly={!editable}
        />
        <button className="icon-button" type="button" onClick={() => setVisible((current) => !current)} title="Reveal password">
          {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
        <button className="icon-button" type="button" onClick={() => copyWithAutoClear(value, label)} title="Copy password">
          <Copy className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
