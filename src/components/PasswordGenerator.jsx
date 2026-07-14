import { Copy, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { copyWithAutoClear } from '../utils/clipboardHelper.js';
import { generatePassword } from '../utils/passwordGenerator.js';

export default function PasswordGenerator({ onUse }) {
  const [settings, setSettings] = useState({
    length: 20,
    includeUpper: true,
    includeLower: true,
    includeNumbers: true,
    includeSymbols: true,
  });
  const [generated, setGenerated] = useState(() => generatePassword());

  const updateSetting = (key, value) => setSettings((current) => ({ ...current, [key]: value }));
  const generate = () => setGenerated(generatePassword(settings));

  return (
    <section className="rounded-lg border border-ecto/25 bg-black/20 p-4">
      <div className="flex items-center gap-2">
        <input className="ghost-input" value={generated} readOnly />
        <button className="icon-button" type="button" onClick={generate} title="Generate">
          <RefreshCw className="h-5 w-5" />
        </button>
        <button className="icon-button" type="button" onClick={() => copyWithAutoClear(generated, 'Generated password')} title="Copy">
          <Copy className="h-5 w-5" />
        </button>
      </div>
      <label className="field-label mt-4 flex items-center justify-between">
        Length <span>{settings.length}</span>
      </label>
      <input
        className="w-full accent-ecto"
        type="range"
        min="8"
        max="64"
        value={settings.length}
        onChange={(event) => updateSetting('length', Number(event.target.value))}
      />
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm font-semibold text-zinc-200">
        {[
          ['includeUpper', 'Uppercase'],
          ['includeLower', 'Lowercase'],
          ['includeNumbers', 'Numbers'],
          ['includeSymbols', 'Symbols'],
        ].map(([key, label]) => (
          <label key={key} className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2">
            <input
              type="checkbox"
              checked={settings[key]}
              onChange={(event) => updateSetting(key, event.target.checked)}
              className="accent-ecto"
            />
            {label}
          </label>
        ))}
      </div>
      <button className="ghost-button mt-4 w-full" type="button" onClick={() => onUse(generated)}>
        Use Password
      </button>
    </section>
  );
}
