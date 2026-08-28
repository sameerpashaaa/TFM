import { useCart, type CartItem } from '../../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalPrice, totalCount } = useCart();

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', justifyContent: 'flex-end' }}>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(2px)',
          transition: 'opacity 0.2s',
        }}
      />

      {/* Slide-out Panel */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 420,
          height: '100%',
          background: '#FFF8F0',
          boxShadow: '-4px 0 20px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1001,
          animation: 'slideInRight 0.25s ease-out',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '18px 24px',
            borderBottom: '1px solid #E8DFD4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#fff',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ShoppingBag size={20} style={{ color: 'var(--crimson)' }} />
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#2B231D' }}>
              Your Cart ({totalCount})
            </h3>
          </div>
          <button
            onClick={closeCart}
            style={{
              background: 'none',
              border: 'none',
              padding: 6,
              cursor: 'pointer',
              color: '#6B5E52',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#7C7268' }}>
              <ShoppingBag size={48} style={{ opacity: 0.3, marginBottom: 16 }} />
              <h4 style={{ margin: '0 0 8px', color: '#4A423B', fontSize: 16 }}>Your cart is empty</h4>
              <p style={{ margin: '0 0 24px', fontSize: 14 }}>Add some premium halal meats to get started.</p>
              <button
                onClick={closeCart}
                style={{
                  background: 'var(--crimson)',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: 8,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {items.map((item: CartItem) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: 14,
                    padding: 12,
                    background: '#fff',
                    borderRadius: 10,
                    border: '1px solid #E8DFD4',
                    alignItems: 'center',
                  }}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 8 }}
                    />
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 14,
                        color: '#2B231D',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.name}
                    </div>
                    <div style={{ fontSize: 12, color: '#7C7268', margin: '2px 0 6px' }}>
                      {item.weight}
                    </div>
                    <div style={{ fontWeight: 700, color: 'var(--crimson)', fontSize: 14 }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#9E9185',
                        cursor: 'pointer',
                        padding: 4,
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        background: '#FAF6F1',
                        border: '1px solid #DCD1C4',
                        borderRadius: 6,
                        padding: '2px 6px',
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: 12, fontWeight: 700, minWidth: 16, textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div
            style={{
              padding: 24,
              borderTop: '1px solid #E8DFD4',
              background: '#fff',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 12,
                fontSize: 15,
                fontWeight: 600,
                color: '#4A423B',
              }}
            >
              <span>Subtotal</span>
              <span style={{ fontSize: 18, fontWeight: 800, color: 'var(--crimson)' }}>
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p style={{ margin: '0 0 16px', fontSize: 12, color: '#7C7268' }}>
              Taxes and delivery calculated at checkout. Free local delivery over $100.
            </p>
            <Link
              to="/collections/all"
              onClick={closeCart}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                width: '100%',
                background: 'var(--crimson)',
                color: '#fff',
                textDecoration: 'none',
                padding: '14px 20px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                boxShadow: '0 4px 12px rgba(184, 29, 36, 0.25)',
              }}
            >
              Proceed to Checkout <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
