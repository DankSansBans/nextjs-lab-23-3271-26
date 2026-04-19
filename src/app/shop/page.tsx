'use client';

import { useCart } from '@/lib/cart-context';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 79.99 },
  { id: 2, name: 'Smart Watch', price: 129.99 },
  { id: 3, name: 'Bluetooth Speaker', price: 49.99 },
];

export default function ShopPage() {
  const { addItem } = useCart();

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-3xl shadow-md overflow-hidden border">
            <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-6xl">🛍️</div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
              <p className="text-2xl font-bold text-emerald-600 mb-6">${product.price}</p>
              <button
                onClick={() => addItem(product)}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-3xl transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}