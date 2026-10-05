import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight, ShieldAlert, CheckCircle2, Lock, Terminal } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LoginPageProps {
  onNavigate: (path: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [useSecureMode, setUseSecureMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');

    const res = await login(username, password, useSecureMode);
    if (res.success) {
      setLoginSuccess(true);
      setTimeout(() => {
        onNavigate('/profile');
      }, 500);
    } else {
      setError(res.error || 'Authentication failed. Please verify credentials.');
    }
    setLoading(false);
  };

  const handleFillDemo = (user: string, pass: string) => {
    setUsername(user);
    setPassword(pass);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-surface border border-surface-border overflow-hidden shadow-2xl">
        {/* Left Side: Cinematic Editorial Hero */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 bg-surface-elevated border-b lg:border-b-0 lg:border-r border-surface-border flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-ambient-glow opacity-30 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-primary/10 border border-lime-primary/20 text-lime-primary text-xs font-mono">
              <span>AUTHENTICATION GATEWAY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-text-primary leading-[1.08]">
              YOUR ACCOUNT.<br />
              <span className="text-lime-primary">YOUR COLLECTION.</span><br />
              YOUR FLOW.
            </h1>

            <p className="text-sm text-text-secondary max-w-md leading-relaxed">
              Sign in to access your hardware configurations, view real-time delivery telemetry, and participate in verified reviews.
            </p>
          </div>

          {/* Demo Accounts Helper Card */}
          <div className="relative z-10 mt-12 p-5 rounded-2xl bg-surface border border-surface-border space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-text-muted">SEED CREDENTIALS</span>
              <span className="text-lime-primary">LOCAL LAB</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <button
                type="button"
                onClick={() => handleFillDemo('student', 'student123')}
                className="p-2 rounded-lg bg-surface-elevated border border-surface-border hover:border-lime-primary/40 text-left transition-colors"
              >
                <div className="text-text-primary font-bold">student</div>
                <div className="text-[10px] text-text-muted">student123</div>
              </button>
              <button
                type="button"
                onClick={() => handleFillDemo('admin', 'admin123')}
                className="p-2 rounded-lg bg-surface-elevated border border-surface-border hover:border-violet-cool/40 text-left transition-colors"
              >
                <div className="text-violet-cool font-bold">admin</div>
                <div className="text-[10px] text-text-muted">admin123</div>
              </button>
            </div>
            <div className="text-[10px] font-mono text-text-muted">
              SQL Injection payload: <code className="text-amber-400 font-bold">' or 1=1--</code>
            </div>
          </div>
        </div>

        {/* Right Side: Clean Login Form */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-lime-primary uppercase tracking-wider block">
              PORTAL ACCESS
            </span>
            <h2 className="text-2xl font-bold text-text-primary">Sign in to VulnShop</h2>
          </div>

          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {loginSuccess && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Authentication successful. Redirecting to workspace...</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-text-secondary block">
                USERNAME OR IDENTIFIER
              </label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="student, admin, or SQLi payload"
                required
                autoComplete="off"
                className="w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-text-secondary block">PASSWORD</label>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Mode Selector Toggle (Vulnerable SQLi vs Parameterized) */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-surface-elevated border border-surface-border text-xs">
              <div className="flex items-center gap-2 text-text-secondary font-mono">
                <Lock className="w-3.5 h-3.5 text-lime-primary" />
                <span>Backend Route</span>
              </div>
              <button
                type="button"
                onClick={() => setUseSecureMode(!useSecureMode)}
                className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all ${
                  useSecureMode
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                }`}
              >
                {useSecureMode ? '🛡️ /login-secure (Safe)' : '⚠️ /login (SQLi Unsafe)'}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all shadow-[0_0_24px_rgba(183,255,106,0.3)] hover:scale-[1.01] disabled:opacity-50"
            >
              <span>{loading ? 'Authenticating...' : 'Continue to Workspace'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Footer Navigation */}
          <div className="pt-4 border-t border-surface-border text-center text-xs text-text-secondary">
            Don't have a local demo account?{' '}
            <button
              onClick={() => onNavigate('/register')}
              className="text-lime-primary font-bold hover:underline"
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
