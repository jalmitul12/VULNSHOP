import React, { useState } from 'react';
import { ArrowRight, ShieldAlert, CheckCircle2, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface RegisterPageProps {
  onNavigate: (path: string) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);

  const { register } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !email.trim() || !password.trim()) {
      setError('Please complete all required registration fields.');
      return;
    }

    setLoading(true);
    setError('');

    const res = await register(username, email, password);
    if (res.success) {
      setRegistered(true);
      setTimeout(() => {
        onNavigate('/profile');
      }, 500);
    } else {
      setError(res.error || 'Registration could not be completed.');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-surface border border-surface-border overflow-hidden shadow-2xl">
        {/* Left Editorial Column */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 bg-surface-elevated border-b lg:border-b-0 lg:border-r border-surface-border flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-ambient-glow opacity-30 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-primary/10 border border-lime-primary/20 text-lime-primary text-xs font-mono">
              <span>NEW ONBOARDING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-text-primary leading-[1.08]">
              JOIN THE<br />
              <span className="text-lime-primary">HARDWARE LAB.</span>
            </h1>

            <p className="text-sm text-text-secondary max-w-md leading-relaxed">
              Create an authenticated account to participate in product ordering, write community evaluations, and test vulnerability assessment flows.
            </p>
          </div>

          <div className="relative z-10 mt-12 p-5 rounded-2xl bg-surface border border-surface-border text-xs font-mono text-text-muted">
            <span className="text-lime-primary font-bold block mb-1">LOCAL INSTANCE DIRECTORY</span>
            Accounts are stored in the local server state (`data/users.json`).
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-lime-primary uppercase tracking-wider block">
              CREATE IDENTITY
            </span>
            <h2 className="text-2xl font-bold text-text-primary">Create an account</h2>
          </div>

          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {registered && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Account created successfully. Navigating to dashboard...</span>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-text-secondary block">USERNAME</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="e.g. charlie, developer"
                required
                className="w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-text-secondary block">EMAIL ADDRESS</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="charlie@vulnshop.local"
                required
                className="w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-text-secondary block">PASSWORD</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all shadow-[0_0_24px_rgba(183,255,106,0.3)] hover:scale-[1.01] disabled:opacity-50"
            >
              <UserPlus className="w-4 h-4" />
              <span>{loading ? 'Creating...' : 'Register Account'}</span>
            </button>
          </form>

          <div className="pt-4 border-t border-surface-border text-center text-xs text-text-secondary">
            Already registered?{' '}
            <button
              onClick={() => onNavigate('/login')}
              className="text-lime-primary font-bold hover:underline"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
