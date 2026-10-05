import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface MiniCartDrawerProps {
  onNavigate: (path: string) => void;
}


const productImageMap: Record<number, string> = {
  101: '/images/laptop.svg',
  102: '/images/phone.svg',
  103: '/images/headphones.svg',
  104: '/images/keyboard.svg',
  105: '/images/monitor.svg',
  106: '/images/mouse.svg',
};

export const MiniCartDrawer: React.FC<MiniCartDrawerProps> = ({ onNavigate }) => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, totalCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bg/70 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        {/* Slide-out Panel (Desktop: Right Drawer, Mobile: Bottom/Full Sheet) */}
        <div className="w-screen max-w-md bg-surface border-l border-surface-border flex flex-col shadow-2xl animate-slide-in-right">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-surface-border bg-surface-elevated">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-lime-primary/10 text-lime-primary border border-lime-primary/20">
                <ShoppingBag className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-base font-bold text-text-primary tracking-tight">YOUR BAG</h2>
                <span className="text-xs font-mono text-text-secondary">
                  {totalCount} {totalCount === 1 ? 'ITEM' : 'ITEMS'} SELECTED
                </span>
              </div>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-text-secondary hover:text-text-primary rounded-xl hover:bg-surface border border-transparent hover:border-surface-border transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length > 0 ? (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="p-4 rounded-2xl bg-surface-elevated border border-surface-border flex gap-4 transition-all hover:border-surface-borderHover"
                >
                  {/* Product Image */}
                  <div className="w-16 h-16 rounded-xl bg-surface border border-surface-border flex items-center justify-center shrink-0 p-1.5 overflow-hidden">
                    <img
                      src={productImageMap[product.id] || '/images/laptop.svg'}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono text-lime-primary uppercase">
                          {product.category}
                        </span>
                        <h4 className="text-sm font-semibold text-text-primary line-clamp-1">
                          {product.name}
                        </h4>
                      </div>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-text-muted hover:text-red-400 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Selector */}
                      <div className="flex items-center bg-surface rounded-lg border border-surface-border p-0.5">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-1 text-text-secondary hover:text-text-primary rounded"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs px-2 text-text-primary font-medium">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-1 text-text-secondary hover:text-text-primary rounded"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="font-mono text-sm font-bold text-text-primary">
                        ₹{(product.price * quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-surface-elevated border border-surface-border flex items-center justify-center text-text-muted">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-base">NOTHING HERE YET.</h3>
                  <p className="text-xs text-text-secondary mt-1">
                    Your selected technology hardware will appear in this bag.
                  </p>
                </div>
                <button
                  onClick={() => {
                    closeCart();
                    onNavigate('/products');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-lime-primary text-bg font-semibold text-xs transition-transform hover:scale-105"
                >
                  Explore the collection →
                </button>
              </div>
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-6 border-t border-surface-border bg-surface-elevated space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-text-secondary font-mono">
                  <span>SUBTOTAL</span>
                  <span className="text-text-primary font-bold">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-text-secondary font-mono">
                  <span>SHIPPING</span>
                  <span className="text-lime-primary">FREE LOCAL LAB DISPATCH</span>
                </div>
                <div className="h-px bg-surface-border my-2" />
                <div className="flex justify-between text-sm text-text-primary font-bold font-mono">
                  <span>ESTIMATED TOTAL</span>
                  <span className="text-lime-primary text-base">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => {
                    closeCart();
                    onNavigate('/products');
                  }}
                  className="py-3 px-4 rounded-xl border border-surface-border bg-surface text-text-primary text-xs font-semibold hover:border-lime-primary/40 transition-colors"
                >
                  CONTINUE SHOPPING
                </button>
                <button
                  onClick={() => {
                    closeCart();
                    onNavigate('/checkout');
                  }}
                  className="py-3 px-4 rounded-xl bg-lime-primary text-bg text-xs font-bold flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all hover:shadow-[0_0_20px_rgba(183,255,106,0.3)]"
                >
                  <span>CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
