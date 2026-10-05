import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Circle, Clock, Package, Truck, ShieldAlert, Lock, Terminal } from 'lucide-react';
import { Order, Product } from '../types';
import { api } from '../services/api';

interface OrderDetailPageProps {
  orderId: number;
  onNavigate: (path: string) => void;
  onSelectOrder: (id: number) => void;
}

export const OrderDetailPage: React.FC<OrderDetailPageProps> = ({ orderId, onNavigate, onSelectOrder }) => {
  const [order, setOrder] = useState<Order | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [useSecureMode, setUseSecureMode] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [targetIdInput, setTargetIdInput] = useState(orderId.toString());

  const fetchOrderData = async (id: number, secure: boolean) => {
    setLoading(true);
    setError('');
    const [orderRes, prods] = await Promise.all([
      api.getOrder(id, secure),
      api.getProducts()
    ]);
    setProducts(prods);
    if (orderRes.order) {
      setOrder(orderRes.order);
    } else {
      setError(orderRes.error || 'Order access denied or record not found.');
      setOrder(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrderData(orderId, useSecureMode);
    setTargetIdInput(orderId.toString());
  }, [orderId, useSecureMode]);

  const handleJumpToOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(targetIdInput, 10);
    if (!isNaN(parsed)) {
      onSelectOrder(parsed);
    }
  };

  const getProductInfo = (productId: number) => {
    return products.find(p => p.id === productId);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={() => onNavigate('/orders')}
          className="flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-lime-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ORDERS</span>
        </button>

        {/* IDOR Quick Switcher & Mode Toggle */}
        <div className="flex flex-wrap items-center gap-3">
          <form onSubmit={handleJumpToOrder} className="flex items-center gap-2">
            <span className="text-xs font-mono text-text-muted">Jump to #</span>
            <input
              type="number"
              value={targetIdInput}
              onChange={e => setTargetIdInput(e.target.value)}
              className="w-20 px-2.5 py-1 bg-surface border border-surface-border rounded-lg text-xs font-mono text-lime-primary focus:outline-none"
            />
            <button
              type="submit"
              className="px-2.5 py-1 bg-surface-elevated border border-surface-border rounded-lg text-xs text-text-primary hover:border-lime-primary/40"
            >
              Go
            </button>
          </form>

          <button
            type="button"
            onClick={() => setUseSecureMode(!useSecureMode)}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
              useSecureMode
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
            }`}
          >
            {useSecureMode ? '🛡️ Secure Auth Check' : '⚠️ IDOR Active'}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-20 text-center text-text-muted font-mono text-xs">
          Querying order telemetry for #{orderId}...
        </div>
      ) : error ? (
        <div className="p-8 rounded-3xl bg-surface border border-red-500/30 text-center space-y-4">
          <ShieldAlert className="w-12 h-12 text-red-400 mx-auto" />
          <h2 className="text-xl font-bold text-text-primary">ACCESS RESTRICTED</h2>
          <p className="text-xs text-red-400 max-w-md mx-auto">{error}</p>
          <div className="text-[11px] font-mono text-text-muted pt-2">
            The secure endpoint checks object ownership (<code>req.user.id === order.userId</code>).
          </div>
        </div>
      ) : order ? (
        <div className="space-y-8">
          {/* Header */}
          <div className="p-8 rounded-3xl bg-surface border border-surface-border space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-border pb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-lime-primary font-bold">
                    ORDER TELEMETRY / #{order.id}
                  </span>
                  <span className="text-xs font-mono text-text-muted">· User ID: {order.userId}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary mt-1">
                  ORDER #{order.id}
                </h1>
                <p className="text-xs font-mono text-text-secondary mt-1">
                  Placed on {order.date} · Destination: {order.address}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-lime-primary animate-pulse" />
                <span className="font-mono text-sm font-bold text-lime-primary uppercase">
                  {order.status}
                </span>
              </div>
            </div>

            {/* 5-Step Fulfillment Progress Timeline */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                FULFILLMENT PIPELINE
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-surface-elevated border border-lime-primary/30 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-primary shrink-0" />
                  <span className="text-text-primary">Order Placed</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-elevated border border-lime-primary/30 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-primary shrink-0" />
                  <span className="text-text-primary">Paid</span>
                </div>
                <div className={`p-3 rounded-xl bg-surface-elevated border flex items-center gap-2 ${
                  order.status === 'Processing' || order.status === 'Shipped' || order.status === 'Delivered'
                    ? 'border-lime-primary/30 text-lime-primary'
                    : 'border-surface-border text-text-muted'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-lime-primary" />
                  <span className="text-text-primary">Processing</span>
                </div>
                <div className={`p-3 rounded-xl bg-surface-elevated border flex items-center gap-2 ${
                  order.status === 'Shipped' || order.status === 'Delivered'
                    ? 'border-blue-500/30 text-blue-400'
                    : 'border-surface-border text-text-muted'
                }`}>
                  <Circle className="w-3.5 h-3.5" />
                  <span>Shipped</span>
                </div>
                <div className={`p-3 rounded-xl bg-surface-elevated border flex items-center gap-2 ${
                  order.status === 'Delivered'
                    ? 'border-emerald-500/30 text-emerald-400'
                    : 'border-surface-border text-text-muted'
                }`}>
                  <Circle className="w-3.5 h-3.5" />
                  <span>Delivered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Itemized Breakdown Card */}
          <div className="p-8 rounded-3xl bg-surface border border-surface-border space-y-6">
            <h3 className="text-base font-bold text-text-primary font-mono tracking-tight">
              ITEMIZED INVOICE BREAKDOWN
            </h3>

            <div className="space-y-3 divide-y divide-surface-border">
              {order.items.map((item, idx) => {
                const p = getProductInfo(item.productId);
                return (
                  <div key={idx} className="pt-3 first:pt-0 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center font-mono font-bold text-xs text-lime-primary">
                        {p?.accent || 'VS'}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-text-primary">
                          {p?.name || `Product #${item.productId}`}
                        </div>
                        <div className="text-xs font-mono text-text-muted">
                          {p?.category || 'Hardware'} · Qty: {item.quantity}
                        </div>
                      </div>
                    </div>

                    <div className="text-right font-mono">
                      <div className="text-sm font-bold text-text-primary">
                        ₹{((p?.price || 0) * item.quantity).toLocaleString('en-IN')}
                      </div>
                      <div className="text-[10px] text-text-muted">
                        ₹{(p?.price || 0).toLocaleString('en-IN')} each
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Total Row */}
            <div className="pt-6 border-t border-surface-border flex items-center justify-between text-sm font-mono font-bold">
              <span className="text-text-secondary">TOTAL AMOUNT INVOICED</span>
              <span className="text-xl text-lime-primary font-extrabold">
                ₹{order.total.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Practical 7 IDOR Documentation Note */}
          <div className="p-5 rounded-2xl bg-surface-elevated border border-surface-border text-xs font-mono text-text-muted space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <Terminal className="w-4 h-4" />
              <span>Burp Suite Practical Target: <code>GET /order/{order.id}</code></span>
            </div>
            <p className="text-text-secondary leading-relaxed">
              When intercepted in Burp Suite, modify the order ID parameter (e.g. change <code>1003</code> to <code>1001</code> or <code>1002</code>). Notice how the vulnerable server endpoint returns any customer's confidential invoice.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
