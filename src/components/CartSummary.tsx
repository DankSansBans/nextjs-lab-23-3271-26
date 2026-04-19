'use client';
import { useCart } from '@/lib/cart-context';

export default function CartSummary() {
  const { items, totalPrice } = useCart();
  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-3xl">🛒 {count} items</span>
      <span className="text-emerald-600">${totalPrice.toFixed(2)}</span>
    </div>
  );
}