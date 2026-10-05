import React, { useState, useEffect } from 'react';
import { User, Mail, Shield, ShoppingBag, Upload, CheckCircle2, AlertCircle, ArrowRight, Activity, Terminal } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

interface ProfilePageProps {
  onNavigate: (path: string) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ onNavigate }) => {
  const { user, refreshUser } = useAuth();
  const [email, setEmail] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [useSecureMode, setUseSecureMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      api.getOrders().then(orders => setOrderCount(orders.length));
    }
  }, [user]);

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-text-primary">Sign in required</h2>
        <p className="text-xs text-text-secondary">Please sign in to access your profile settings.</p>
        <button
          onClick={() => onNavigate('/login')}
          className="px-6 py-2.5 rounded-xl bg-lime-primary text-bg font-bold text-xs"
        >
          Go to Sign In →
        </button>
      </div>
    );
  }

  const handleEmailUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const tokenToSend = useSecureMode ? (csrfToken || 'SECURE-DEMO-TOKEN') : undefined;
    const res = await api.updateEmail(email, tokenToSend);

    if (res.success) {
      setStatusMessage({ type: 'success', text: 'Email updated successfully.' });
      refreshUser();
    } else {
      setStatusMessage({ type: 'error', text: res.error || 'Failed to update email.' });
    }
    setLoading(false);
  };

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'GOOD MORNING';
    if (hours < 18) return 'GOOD AFTERNOON';
    return 'GOOD EVENING';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-lime-primary font-bold">IDENTITY &amp; SECURITY</span>
          <span className="h-px w-12 bg-surface-border" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-text-primary">
          {getGreeting()},<br />
          <span className="text-lime-primary uppercase">{user.username}.</span>
        </h1>
        <p className="text-sm text-text-secondary max-w-lg">
          Manage your authenticated identity, security parameters, and associated order history.
        </p>
      </div>

      {/* Telemetry Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          onClick={() => onNavigate('/orders')}
          className="p-5 rounded-2xl bg-surface border border-surface-border space-y-2 cursor-pointer hover:border-lime-primary/40 transition-all group"
        >
          <div className="flex items-center justify-between text-xs font-mono text-text-muted">
            <span>ORDERS</span>
            <ShoppingBag className="w-3.5 h-3.5 text-lime-primary group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-3xl font-mono font-bold text-text-primary">{orderCount}</div>
          <span className="text-[11px] font-mono text-lime-primary flex items-center gap-1">
            <span>View history</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-surface border border-surface-border space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-text-muted">
            <span>REVIEWS</span>
            <Activity className="w-3.5 h-3.5 text-blue-electric" />
          </div>
          <div className="text-3xl font-mono font-bold text-text-primary">2</div>
          <span className="text-[11px] font-mono text-text-secondary">Storefront verified</span>
        </div>

        <div className="p-5 rounded-2xl bg-surface border border-surface-border space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-text-muted">
            <span>PROFILE</span>
            <User className="w-3.5 h-3.5 text-violet-cool" />
          </div>
          <div className="text-xl font-mono font-bold text-lime-primary mt-1">COMPLETE</div>
          <span className="text-[11px] font-mono text-text-secondary">{user.role.toUpperCase()} ROLE</span>
        </div>

        <div className="p-5 rounded-2xl bg-surface border border-surface-border space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-text-muted">
            <span>ACTIVITY</span>
            <span className="w-2 h-2 rounded-full bg-lime-primary animate-pulse" />
          </div>
          <div className="text-xl font-mono font-bold text-text-primary mt-1">ONLINE</div>
          <span className="text-[11px] font-mono text-text-muted">SESSION ACTIVE</span>
        </div>
      </div>

      {/* Main Profile Grid: Settings + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Change Email (Target for CSRF Vulnerability) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface border border-surface-border space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-lime-primary font-bold uppercase">
              PROFILE PARAMETERS
            </span>
            <h3 className="text-xl font-bold text-text-primary">Email &amp; Notification Address</h3>
            <p className="text-xs text-text-secondary">
              Update the primary destination for order receipts and dispatch notifications.
            </p>
          </div>

          {statusMessage && (
            <div
              className={`p-4 rounded-xl text-xs flex items-center gap-2 ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          <form onSubmit={handleEmailUpdate} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-text-secondary block">EMAIL ADDRESS</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-lime-primary/50 transition-colors"
                />
              </div>
            </div>

            {/* CSRF Mode Selector */}
            <div className="p-3 rounded-xl bg-surface-elevated border border-surface-border space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-text-secondary">CSRF PROTECTION MODE</span>
                <button
                  type="button"
                  onClick={() => setUseSecureMode(!useSecureMode)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] transition-colors ${
                    useSecureMode
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}
                >
                  {useSecureMode ? '🛡️ Enforce Anti-CSRF Token' : '⚠️ No Anti-CSRF (Vulnerable)'}
                </button>
              </div>

              {useSecureMode && (
                <div className="pt-2">
                  <input
                    type="text"
                    value={csrfToken}
                    onChange={e => setCsrfToken(e.target.value)}
                    placeholder="Enter anti-CSRF token (default: SECURE-DEMO-TOKEN)"
                    className="w-full px-3 py-2 bg-surface border border-surface-border rounded-lg text-xs font-mono text-text-primary placeholder:text-text-muted focus:outline-none"
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="py-3 px-6 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider hover:bg-lime-secondary transition-all shadow-[0_0_16px_rgba(183,255,106,0.25)] disabled:opacity-50"
            >
              {loading ? 'Updating...' : 'Save Email Changes'}
            </button>
          </form>

          <div className="p-3 rounded-xl bg-surface-elevated border border-surface-border text-[11px] font-mono text-text-muted space-y-1">
            <span className="text-amber-400 font-semibold block">⚠️ Practical 7 CSRF Demonstration Target:</span>
            <span>The standard endpoint <code>POST /profile/email</code> lacks an anti-CSRF token, allowing state changes via cross-origin requests.</span>
          </div>
        </div>

        {/* Right Side: Account Overview & Upload Navigation Card */}
        <div className="lg:col-span-5 space-y-6">
          {/* Identity Card */}
          <div className="p-6 rounded-3xl bg-surface border border-surface-border space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-surface-elevated border border-surface-border flex items-center justify-center font-mono font-extrabold text-2xl text-lime-primary shadow-inner">
                {user.username[0].toUpperCase()}
              </div>
              <div>
                <span className="text-[10px] font-mono text-lime-primary uppercase">AUTHENTICATED USER</span>
                <h4 className="text-lg font-bold text-text-primary">{user.username}</h4>
                <div className="text-xs text-text-secondary font-mono">{user.email}</div>
              </div>
            </div>

            <div className="pt-3 border-t border-surface-border flex items-center justify-between text-xs font-mono">
              <span className="text-text-muted">ROLE ASSIGNMENT</span>
              <span className="px-2 py-0.5 rounded bg-lime-primary/10 text-lime-primary border border-lime-primary/20">
                {user.role}
              </span>
            </div>
          </div>

          {/* Quick Links Cards */}
          <div
            onClick={() => onNavigate('/profile/upload')}
            className="p-5 rounded-2xl bg-surface border border-surface-border hover:border-lime-primary/40 transition-all cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-surface-elevated text-lime-primary border border-surface-border group-hover:border-lime-primary/40">
                <Upload className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-text-primary group-hover:text-lime-primary transition-colors">
                  Upload Avatar Image
                </div>
                <p className="text-xs text-text-secondary">Upload profile media (Unrestricted file test target)</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-lime-primary group-hover:translate-x-1 transition-all" />
          </div>

          <div
            onClick={() => onNavigate('/orders')}
            className="p-5 rounded-2xl bg-surface border border-surface-border hover:border-blue-electric/40 transition-all cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-surface-elevated text-blue-electric border border-surface-border group-hover:border-blue-electric/40">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-text-primary group-hover:text-blue-electric transition-colors">
                  Order Telemetry &amp; Invoices
                </div>
                <p className="text-xs text-text-secondary">View past orders and test object-level authorization (IDOR)</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-blue-electric group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
};
