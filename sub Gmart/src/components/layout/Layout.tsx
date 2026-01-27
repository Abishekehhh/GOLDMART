import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { GoldRateTicker } from '@/components/home/GoldRateTicker';

interface LayoutProps {
  children: ReactNode;
  showTicker?: boolean;
}

export function Layout({ children, showTicker = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {showTicker && <GoldRateTicker />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
