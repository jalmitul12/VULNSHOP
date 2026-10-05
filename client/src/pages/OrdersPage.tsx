import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowRight, Clock, CheckCircle, Package, Truck, AlertCircle } from 'lucide-react';
import { Order } from '../types';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';

interface OrdersPageProps {
  onSelectOrder: (id: number) => void;
  onNavigate: (path: string) => void;
}

export const OrdersPage: React.FC<OrdersPageProps> = ({ onSelectOrder, onNavigate }) => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      api.getOrders().then(data => {
        setOrders(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [user]);

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">Delivered</span>;
      case 'shipped':
        return <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono">Shipped</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono">Processing</span>;
    }
  };

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-text-primary">Sign in required</h2>
        <button
          onClick={() => onNavigate('/login')}
          className="px-6 py-2.5 rounded-xl bg-lime-primary text-bg font-bold text-xs"
        >
          Sign in to view orders →
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-lime-primary font-bold">ORDER TELEMETRY</span>
          <span className="h-px w-12 bg-surface-border" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-text-primary">
          YOUR ORDERS.
        </h1>
        <p className="text-sm text-text-secondary">
          Track fulfillment status, invoice receipts, and dispatch timelines for hardware purchases.
        </p>
      </div>

      {/* Orders List */}
      {loading ? (
        <div className="py-12 text-center text-text-muted font-mono text-xs">
          Loading order history...
        </div>
      ) : orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map(order => (
            <div
              key={order.id}
              onClick={() => onSelectOrder(order.id)}
              className="p-6 rounded-2xl bg-surface border border-surface-border hover:border-lime-primary/40 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              data-cursor="view"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-surface-border flex items-center justify-center font-mono font-bold text-lime-primary text-sm group-hover:border-lime-primary/40 transition-colors">
                  #{order.id}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-text-primary">Order #{order.id}</span>
                    {getStatusBadge(order.status)}
                  </div>
                  <div className="text-xs text-text-secondary font-mono mt-1">
                    {order.date} · {order.address}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-surface-border">
                <div className="text-right">
                  <span className="text-[10px] font-mono text-text-muted block">TOTAL AMOUNT</span>
                  <strong className="text-base font-mono text-text-primary">
                    ₹{order.total.toLocaleString('en-IN')}
                  </strong>
                </div>
                <div className="p-2 rounded-xl bg-surface-elevated text-text-secondary group-hover:text-lime-primary group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-surface border border-surface-border space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-surface-elevated border border-surface-border mx-auto flex items-center justify-center text-text-muted">
            <ShoppingBag className="w-8 h-8 stroke-1" />
          </div>
          <div>
            <h3 className="font-bold text-text-primary text-base">NOTHING HERE YET.</h3>
            <p className="text-xs text-text-secondary mt-1">Your first order will appear here.</p>
          </div>
          <button
            onClick={() => onNavigate('/products')}
            className="px-5 py-2.5 rounded-xl bg-lime-primary text-bg font-semibold text-xs transition-transform hover:scale-105"
          >
            Explore the collection →
          </button>
        </div>
      )}

      {/* IDOR Test Helper Note */}
      <div className="p-5 rounded-2xl bg-surface-elevated border border-surface-border text-xs font-mono text-text-muted space-y-2">
        <span className="text-amber-400 font-bold block">⚠️ Practical 7 IDOR (Insecure Direct Object Reference) Target:</span>
        <p className="text-text-secondary leading-relaxed">
          The order viewing endpoint trusts the order ID from the URL/API parameter. Test requesting order identifiers like <code>#1001</code> (Alice) or <code>#1002</code> (Bob) while logged in as <code>student</code> to demonstrate unauthorized data disclosure.
        </p>
      </div>
    </div>
  );
};
