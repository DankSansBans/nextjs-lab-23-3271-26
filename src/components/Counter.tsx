'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => Math.max(0, c - 1));
  const reset = () => setCount(0);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl max-w-xs text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Counter</h2>
      <div className="text-7xl font-mono font-bold text-indigo-600 mb-12">{count}</div>
      <div className="flex gap-4 justify-center">
        <button onClick={decrement} className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-2xl">–</button>
        <button onClick={reset} className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-2xl">Reset</button>
        <button onClick={increment} className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl">+</button>
      </div>
      <p className="text-xs text-gray-400 mt-8">Cannot go below 0</p>
    </div>
  );
}