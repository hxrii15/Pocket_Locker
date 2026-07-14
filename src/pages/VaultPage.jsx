import { Plus } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import AccountCard from '../components/AccountCard.jsx';
import AccountModal from '../components/AccountModal.jsx';
import { useVault } from '../context/VaultContext.jsx';

const categories = ['All', 'Social', 'Dev', 'Finance', 'Email', 'Other'];

export default function VaultPage() {
  const { accounts, loading, loadAccounts, addAccount, editAccount, removeAccount } = useVault();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    loadAccounts();
  }, [loadAccounts]);

  const visibleAccounts = useMemo(
    () =>
      accounts.filter((account) => {
        const matchesCategory = category === 'All' || account.category === category;
        const matchesSearch = account.serviceName.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [accounts, category, search],
  );

  const openEditor = (account = null) => {
    setEditing(account);
    setModalOpen(true);
  };

  const handleSave = async (form) => {
    if (editing) await editAccount(editing.id, form);
    else await addAccount(form);
  };

  return (
    <main className="app-shell min-h-screen pb-24">
      <Navbar search={search} onSearch={setSearch} />
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
          {categories.map((item) => (
            <button
              key={item}
              className={`filter-tab ${category === item ? 'is-active' : ''}`}
              type="button"
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid min-h-80 place-items-center">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-ecto border-t-transparent" />
          </div>
        ) : visibleAccounts.length ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {visibleAccounts.map((account) => (
              <AccountCard key={account.id} account={account} onEdit={openEditor} onDelete={removeAccount} />
            ))}
          </div>
        ) : (
          <div className="ghost-card grid min-h-80 place-items-center text-center">
            <div>
              <h1 className="font-orbitron text-2xl font-bold text-white">No Accounts Found</h1>
              <p className="mt-2 text-zinc-400">Add your first encrypted credential to start the vault.</p>
            </div>
          </div>
        )}
      </section>

      <button className="fab" type="button" onClick={() => openEditor()} title="Add account">
        <Plus className="h-7 w-7" />
      </button>
      <AccountModal open={modalOpen} account={editing} onClose={() => setModalOpen(false)} onSave={handleSave} />
    </main>
  );
}
