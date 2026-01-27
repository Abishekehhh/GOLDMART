import { TrendingUp, TrendingDown } from 'lucide-react';
import { goldRates, formatPrice } from '@/data/mockData';

export function GoldRateTicker() {
  // Duplicate for seamless loop
  const tickerItems = [...goldRates, ...goldRates, ...goldRates];

  return (
    <div className="bg-charcoal py-2 overflow-hidden">
      <div className="ticker-scroll flex gap-8 whitespace-nowrap">
        {tickerItems.map((rate, index) => (
          <div key={index} className="flex items-center gap-4 px-4">
            <span className="text-primary font-semibold">{rate.purity}</span>
            <span className="text-cream font-medium">{formatPrice(rate.rate)}/g</span>
            <span className={`flex items-center gap-1 text-sm ${rate.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {rate.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {rate.change >= 0 ? '+' : ''}{formatPrice(rate.change)}
            </span>
            <span className="text-cream/30">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
