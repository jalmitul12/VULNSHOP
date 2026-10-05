import React, { useState, useEffect } from 'react';
import { Users, ShoppingBag, DollarSign, Package, ShieldAlert, CheckCircle2, Lock, Activity, ArrowRight, Terminal } from 'lucide-react';
import { User, Order, Product } from '../types';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';

interface AdminPageProps {
  onNavigate: (path: string) => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [usersList, setUsersList] = useState<User[]>([]);
  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [useSecureMode, setUseSecureMode] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchAdminData = async (secure: boolean) => {
    setLoading(true);
    setError('');
    const res = await api.getAdminData(secure);
    if (res.success) {
      setUsersList(res.users || []);
      setOrdersList(res.orders || []);
      setProductsList(res.products || []);
    } else {
      setError(res.error || 'Access denied: Administrator authorization required.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAdminData(useSecureMode);
  }, [useSecureMode]);

  const totalRevenue = ordersList.reduce((sum, o) => sum + (o.total || 0), 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header & Mode Switcher */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-lime-primary font-bold">OPERATIONS / CONTROL CENTER</span>
          <span className="h-px w-12 bg-surface-border" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-text-primary">
              ADMIN CONSOLE.
            </h1>
            <p className="text-sm text-text-secondary mt-1">
              Storefront operational telemetry, user management, and authorization control.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setUseSecureMode(!useSecureMode)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-colors self-start md:self-auto ${
              useSecureMode
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
            }`}
          >
            {useSecureMode ? '🛡️ /admin-secure (Role Enforced)' : '⚠️ /admin (Broken Access Control)'}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-20 text-center font-mono text-xs text-text-muted">
          Loading operations telemetry...
        </div>
      ) : error ? (
        <div className="p-12 rounded-3xl bg-surface border border-red-500/30 text-center space-y-4">
          <ShieldAlert className="w-12 h-12 text-red-400 mx-auto" />
          <h2 className="text-xl font-bold text-text-primary">403 FORBIDDEN</h2>
          <p className="text-xs text-red-400 max-w-md mx-auto">{error}</p>
          <p className="text-[11px] font-mono text-text-muted">
            The secure route enforces <code>req.user.role === 'admin'</code> on the server.
          </p>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Operations Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                <span>TOTAL REVENUE</span>
                <DollarSign className="w-4 h-4 text-lime-primary" />
              </div>
              <div className="text-3xl font-mono font-bold text-lime-primary">
                ₹{totalRevenue.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] font-mono text-text-secondary">Gross demo fulfillment</span>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                <span>ORDER RECORDS</span>
                <ShoppingBag className="w-4 h-4 text-blue-electric" />
              </div>
              <div className="text-3xl font-mono font-bold text-text-primary">
                {ordersList.length}
              </div>
              <span className="text-[10px] font-mono text-text-secondary">Tracked fulfillment units</span>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                <span>USERS DIRECTORY</span>
                <Users className="w-4 h-4 text-violet-cool" />
              </div>
              <div className="text-3xl font-mono font-bold text-text-primary">
                {usersList.length}
              </div>
              <span className="text-[10px] font-mono text-text-secondary">Registered lab accounts</span>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                <span>ACTIVE PRODUCTS</span>
                <Package className="w-4 h-4 text-lime-primary" />
              </div>
              <div className="text-3xl font-mono font-bold text-text-primary">
                {productsList.length}
              </div>
              <span className="text-[10px] font-mono text-text-secondary">Catalog inventory nodes</span>
            </div>
          </div>

          {/* Interactive Visual Telemetry / Category Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Category distribution */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-surface border border-surface-border space-y-4">
              <span className="font-mono text-xs text-lime-primary uppercase">CATALOG SPREAD</span>
              <h3 className="text-lg font-bold text-text-primary">Hardware Category Breakdown</h3>

              <div className="space-y-3 pt-2">
                {[
                  { name: 'Laptops', count: 1, pct: 20, color: 'bg-lime-primary' },
                  { name: 'Smartphones', count: 1, pct: 20, color: 'bg-blue-electric' },
                  { name: 'Audio', count: 1, pct: 20, color: 'bg-violet-cool' },
                  { name: 'Monitors', count: 1, pct: 20, color: 'bg-amber-400' },
                  { name: 'Accessories', count: 2, pct: 40, color: 'bg-emerald-400' },
                ].map(cat => (
                  <div key={cat.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-text-secondary">{cat.name}</span>
                      <span className="text-text-primary font-bold">{cat.count} units ({cat.pct}%)</span>
                    </div>
                    <div className="w-full h-2 bg-surface-elevated rounded-full overflow-hidden">
                      <div className={`h-full ${cat.color}`} style={{ width: `${cat.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Flow Telemetry */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-surface border border-surface-border space-y-4">
              <span className="font-mono text-xs text-blue-electric uppercase">ORDER PIPELINE</span>
              <h3 className="text-lg font-bold text-text-primary">Recent Order Activity</h3>

              <div className="space-y-3 pt-2">
                {ordersList.map(order => (
                  <div
                    key={order.id}
                    className="p-3.5 rounded-xl bg-surface-elevated border border-surface-border flex items-center justify-between text-xs font-mono"
                  >
                    <div>
                      <div className="font-bold text-text-primary">Order #{order.id} · {order.address}</div>
                      <span className="text-[10px] text-text-muted">{order.date}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-lime-primary block">₹{order.total.toLocaleString('en-IN')}</span>
                      <span className="text-[10px] text-text-secondary">{order.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-surface-border space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-lime-primary uppercase">AUTHENTICATION REGISTRY</span>
                <h3 className="text-lg font-bold text-text-primary">Registered Accounts</h3>
              </div>
              <span className="text-xs font-mono text-text-muted">{usersList.length} IDENTITIES</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-surface-border text-text-muted">
                    <th className="pb-3 px-3">USER ID</th>
                    <th className="pb-3 px-3">USERNAME</th>
                    <th className="pb-3 px-3">EMAIL ADDRESS</th>
                    <th className="pb-3 px-3">ASSIGNED ROLE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border">
                  {usersList.map(u => (
                    <tr key={u.id} className="hover:bg-surface-elevated/50 transition-colors">
                      <td className="py-3 px-3 text-text-muted">#{u.id}</td>
                      <td className="py-3 px-3 font-bold text-text-primary">{u.username}</td>
                      <td className="py-3 px-3 text-text-secondary">{u.email}</td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] ${
                          u.role === 'admin'
                            ? 'bg-violet-cool/10 text-violet-cool border border-violet-cool/20 font-bold'
                            : 'bg-surface-elevated text-lime-primary border border-surface-border'
                        }`}>
                          {u.role.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Broken Access Control Exploit Note */}
          <div className="p-5 rounded-2xl bg-surface-elevated border border-surface-border space-y-2 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <Terminal className="w-4 h-4" />
              <span>Practical 7 Broken Access Control: <code>GET /admin</code></span>
            </div>
            <p className="text-text-secondary leading-relaxed">
              In the vulnerable mode, any non-admin account (such as <code>student</code> or <code>alice</code>) can access <code>/admin</code> because authorization boundaries are missing on the server route. Toggle the secure mode to see server-side role validation.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
