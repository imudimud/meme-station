import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Line, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { Card } from '../ui/Card';

interface TimeRange {
  label: string;
  value: '1D' | '1W' | '1M' | '3M' | '1Y' | 'ALL';
}

const timeRanges: TimeRange[] = [
  { label: '1D', value: '1D' },
  { label: '1W', value: '1W' },
  { label: '1M', value: '1M' },
  { label: '3M', value: '3M' },
  { label: '1Y', value: '1Y' },
  { label: 'ALL', value: 'ALL' },
];

export const PortfolioChart = () => {
  const [selectedRange, setSelectedRange] = useState<TimeRange['value']>('1W');
  const isPositive = true; // This would be determined by actual data

  return (
    <Card variant="highlight" className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-orbitron text-primary-blue">Portfolio Value</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-orbitron text-white">$12,345.67</span>
            <span className={`flex items-center text-sm ${isPositive ? 'text-secondary-green' : 'text-accent-pink'}`}>
              {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
              {isPositive ? '+5.67%' : '-5.67%'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-primary-purple" />
          <span className="text-accent-silver">USD</span>
        </div>
      </div>

      <div className="h-48 mb-6 flex items-center justify-center">
        <div className="text-accent-silver">Chart placeholder - Will integrate with chart library</div>
      </div>

      <div className="flex justify-between gap-2">
        {timeRanges.map(({ label, value }) => (
          <motion.button
            key={value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedRange(value)}
            className={`
              px-3 py-1.5 rounded-lg font-roboto text-sm transition-all
              ${selectedRange === value
                ? 'bg-primary-blue text-white shadow-lg shadow-primary-blue/20'
                : 'bg-secondary-black/50 text-accent-silver hover:bg-primary-blue/10'
              }
            `}
          >
            {label}
          </motion.button>
        ))}
      </div>
    </Card>
  );
};
