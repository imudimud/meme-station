import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

interface Asset {
  name: string;
  symbol: string;
  value: number;
  percentage: number;
  color: string;
}

const mockAssets: Asset[] = [
  { name: 'Bitcoin', symbol: 'BTC', value: 8234.56, percentage: 45, color: '#FF9900' },
  { name: 'Ethereum', symbol: 'ETH', value: 2345.67, percentage: 25, color: '#627EEA' },
  { name: 'Dogecoin', symbol: 'DOGE', value: 1456.78, percentage: 20, color: '#BA9F33' },
  { name: 'Others', symbol: 'OTHER', value: 308.66, percentage: 10, color: '#808080' },
];

export const AssetAllocation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Card className="p-6">
      <h3 className="font-orbitron text-lg text-primary-blue mb-4">Asset Allocation</h3>
      
      <div className="flex gap-4 mb-6">
        <div className="flex-1 h-4 bg-secondary-black/50 rounded-full overflow-hidden flex">
          {mockAssets.map((asset) => (
            <div
              key={asset.symbol}
              style={{
                width: `${asset.percentage}%`,
                backgroundColor: asset.color,
              }}
              className="transition-all duration-500"
            />
          ))}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {mockAssets.map((asset) => (
          <motion.div
            key={asset.symbol}
            variants={itemVariants}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: asset.color }}
              />
              <div>
                <p className="font-orbitron text-white">
                  {asset.name}
                  <span className="text-accent-silver ml-2">
                    {asset.symbol}
                  </span>
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white">${asset.value.toLocaleString()}</p>
              <p className="text-accent-silver text-sm">{asset.percentage}%</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
};
