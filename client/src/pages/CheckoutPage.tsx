import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ArrowRight, ShieldAlert, ShoppingBag, Truck, CreditCard, Terminal } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

interface CheckoutPageProps {
  onNavigate: (path: string) => void;
  onSelectOrder: (id: number) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onNavigate, onSelectOrder }) => {
  const { items, subtotal, clearCart } = useCart();
  const { user } = useAuth();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [address, setAddress] = useState(user ? `${user.username} · Main Lab, Nirma Campus` : 'Lab address');
  const [city, setCity] = useState('Ahmedabad');
  const [postalCode, setPostalCode] = useState('382481');
  const [tamperedTotal, setTamperedTotal] = useState<number | ''>('');
  const [enableTamper, setEnableTamper] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-text-primary">Sign in required for checkout</h2>
        <p className="text-xs text-text-secondary">Please sign in with a demo account to place orders.</p>
        <button
          onClick={() => onNavigate('/login')}
          className="px-6 py-2.5 rounded-xl bg-lime-primary text-bg font-bold text-xs"
        >
          Sign In to Continue →
        </button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-surface-elevated border border-surface-border mx-auto flex items-center justify-center text-text-muted">
          <ShoppingBag className="w-8 h-8 stroke-1" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary">Your bag is empty</h2>
        <p className="text-xs text-text-secondary">Select hardware products from the catalog before checkout.</p>
        <button
          onClick={() => onNavigate('/products')}
          className="px-6 py-2.5 rounded-xl bg-lime-primary text-bg font-bold text-xs"
        >
          Browse Catalog →
        </button>
      </div>
    );
  }

  const effectiveTotal = enableTamper && tamperedTotal !== '' ? Number(tamperedTotal) : subtotal;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const payload = {
      items: items.map(i => ({ productId: i.product.id, quantity: i.quantity })),
      address: `${address}, ${city} ${postalCode}`,
      customTotal: enableTamper && tamperedTotal !== '' ? Number(tamperedTotal) : undefined
    };

    const res = await api.checkout(payload);
    if (res.success && res.orderId) {
      clearCart();
      onSelectOrder(res.orderId);
    } else {
      setError(res.error || 'Failed to place order.');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Back Link */}
      <button
        onClick={() => onNavigate('/products')}
        className="flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-lime-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>RETURN TO CATALOG</span>
      </button>

      {/* Header & Step Indicator */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-lime-primary font-bold">COMMERCE CHECKOUT</span>
          <span className="h-px w-12 bg-surface-border" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary">
          COMPLETE YOUR ORDER.
        </h1>

        {/* Steps Progress */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className={`p-3 rounded-xl border text-xs font-mono flex items-center gap-2 ${
            step >= 1 ? 'bg-surface-elevated border-lime-primary/50 text-lime-primary' : 'bg-surface border-surface-border text-text-muted'
          }`}>
            <span className="font-bold">01</span>
            <span>DELIVERY</span>
          </div>
          <div className={`p-3 rounded-xl border text-xs font-mono flex items-center gap-2 ${
            step >= 2 ? 'bg-surface-elevated border-lime-primary/50 text-lime-primary' : 'bg-surface border-surface-border text-text-muted'
          }`}>
            <span className="font-bold">02</span>
            <span>REVIEW</span>
          </div>
          <div className={`p-3 rounded-xl border text-xs font-mono flex items-center gap-2 ${
            step === 3 ? 'bg-surface-elevated border-lime-primary/50 text-lime-primary' : 'bg-surface border-surface-border text-text-muted'
          }`}>
            <span className="font-bold">03</span>
            <span>CONFIRM</span>
          </div>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
          {error}
        </div>
      )}

      {/* Main Step Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Step Forms */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-surface border border-surface-border space-y-6">
          {step === 1 && (
            <div className="space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono text-lime-primary uppercase">STEP 01</span>
                <h3 className="text-lg font-bold text-text-primary">Shipping Destination</h3>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="space-y-1.5">
                  <label className="text-text-secondary block">STREET / LAB ADDRESS</label>
                  <input
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm font-sans text-text-primary focus:outline-none focus:border-lime-primary/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-text-secondary block">CITY / REGION</label>
                    <input
                      type="text"
                      value={city}
                      onChange={e => setCity(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm font-sans text-text-primary focus:outline-none focus:border-lime-primary/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-text-secondary block">POSTAL CODE</label>
                    <input
                      type="text"
                      value={postalCode}
                      onChange={e => setPostalCode(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm font-sans text-text-primary focus:outline-none focus:border-lime-primary/50"
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all"
              >
                <span>Continue to Review →</span>
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono text-lime-primary uppercase">STEP 02</span>
                <h3 className="text-lg font-bold text-text-primary">Order Review &amp; Security Mode</h3>
              </div>

              {/* Items summary */}
              <div className="space-y-3 divide-y divide-surface-border text-xs">
                {items.map(item => (
                  <div key={item.product.id} className="pt-2 first:pt-0 flex justify-between">
                    <div>
                      <div className="font-bold text-text-primary">{item.product.name}</div>
                      <div className="text-text-muted font-mono">Qty: {item.quantity}</div>
                    </div>
                    <div className="font-mono text-text-primary font-bold">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>

              {/* Parameter Tampering Demo Box */}
              <div className="p-4 rounded-2xl bg-surface-elevated border border-surface-border space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">PARAMETER TAMPERING TESTING</span>
                  <button
                    type="button"
                    onClick={() => setEnableTamper(!enableTamper)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] transition-colors ${
                      enableTamper
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-surface border border-surface-border text-text-muted'
                    }`}
                  >
                    {enableTamper ? '⚠️ Tamper Amount Active' : 'Normal Server Calc'}
                  </button>
                </div>

                {enableTamper && (
                  <div className="space-y-2 pt-2 border-t border-surface-border">
                    <label className="text-text-muted block text-[11px]">
                      Client-Supplied Override Total (₹):
                    </label>
                    <input
                      type="number"
                      value={tamperedTotal}
                      onChange={e => setTamperedTotal(e.target.value === '' ? '' : Number(e.target.value))}
                      placeholder="e.g. 1 (Test parameter tampering in request)"
                      className="w-full px-3 py-2 bg-surface border border-surface-border rounded-xl text-lime-primary font-bold focus:outline-none"
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3.5 px-5 rounded-xl bg-surface-elevated border border-surface-border text-text-secondary text-xs font-medium"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3.5 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all"
                >
                  <span>Proceed to Confirmation →</span>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono text-lime-primary uppercase">STEP 03</span>
                <h3 className="text-lg font-bold text-text-primary">Confirm &amp; Dispatch</h3>
              </div>

              <div className="p-4 rounded-xl bg-surface-elevated border border-surface-border space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-text-muted">RECIPIENT:</span>
                  <span className="text-text-primary font-bold">{user.username} ({user.email})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">DESTINATION:</span>
                  <span className="text-text-primary">{address}, {city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">TOTAL PAYABLE:</span>
                  <span className="text-lime-primary font-bold">₹{effectiveTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="py-3.5 px-5 rounded-xl bg-surface-elevated border border-surface-border text-text-secondary text-xs font-medium"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  disabled={loading}
                  className="flex-1 py-3.5 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all shadow-[0_0_20px_rgba(183,255,106,0.3)] disabled:opacity-50"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>{loading ? 'Processing Order...' : 'Authorize & Place Order →'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Order Summary Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-surface border border-surface-border space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-lime-primary uppercase">SUMMARY</span>
            <h3 className="text-base font-bold text-text-primary">Cart Breakdown</h3>
          </div>

          <div className="space-y-3 divide-y divide-surface-border text-xs">
            {items.map(item => (
              <div key={item.product.id} className="pt-3 first:pt-0 flex justify-between">
                <div>
                  <div className="font-bold text-text-primary">{item.product.name}</div>
                  <div className="text-text-muted font-mono">Qty: {item.quantity}</div>
                </div>
                <div className="font-mono text-text-primary font-bold">
                  ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-surface-border space-y-2 text-xs font-mono">
            <div className="flex justify-between text-text-secondary">
              <span>SUBTOTAL</span>
              <span className="text-text-primary">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-text-secondary">
              <span>DISPATCH</span>
              <span className="text-lime-primary">FREE LOCAL LAB</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-text-primary pt-2 border-t border-surface-border">
              <span>TOTAL</span>
              <span className="text-lime-primary text-base">₹{effectiveTotal.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface-elevated border border-surface-border text-[11px] font-mono text-text-muted space-y-1">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Terminal className="w-3.5 h-3.5" />
              <span>Burp Target: <code>POST /checkout</code></span>
            </div>
            <p>
              Capture the HTTP POST request to test modifying quantity or product prices before server insertion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
