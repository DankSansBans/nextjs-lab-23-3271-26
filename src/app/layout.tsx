// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/lib/cart-context';
import CartSummary from '@/components/CartSummary';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Lab - Von Dkorps',
  description: 'A lab demonstrating Next.js 15 component patterns and best practices.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {/* Navigation Bar */}
          <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-indigo-600">NextLab</span>
                <span className="text-sm text-gray-400">by Chad Delos Santos</span>
              </div>

              {/* Updated Navigation with Cart Summary */}
              <div className="flex items-center gap-8">
                <div className="flex gap-8 text-sm font-medium">
                  <a href="/" className="hover:text-indigo-600 transition-colors">Home</a>
                  <a href="/posts" className="hover:text-indigo-600 transition-colors">Posts</a>
                  <a href="/contact" className="hover:text-indigo-600 transition-colors">Contact</a>
                  <a href="/shop" className="hover:text-indigo-600 transition-colors">Shop</a>
                </div>
                <CartSummary />
              </div>
            </div>
          </nav>

          {/* Main content wrapper */}
          <main className="min-h-[calc(100vh-136px)]">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-8 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} Next.js Lab. All rights reserved.</p>
              <p className="text-gray-400 mt-1">Built with Next.js, TypeScript &amp; Tailwind CSS</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}