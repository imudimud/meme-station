import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '../ui/Card';

interface PriceCardProps {
  name: string;
  symbol: string;
  price: number;
  change: number;
  imageUrl: string;
}

export const PriceCard = ({ name, symbol, price, change, imageUrl }: PriceCardProps) => {
  const isPositive = change >= 0;

  return (
    <Card className="flex items-center space-x-4">
      <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full" />
      <div className="flex-1">
        <h3 className="font-orbitron text-primary-blue">{name}</h3>
        <p className="text-accent-silver text-sm">{symbol}</p>
      </div>
      <div className="text-right">
        <p className="font-orbitron text-accent-silver">${price.toLocaleString()}</p>
        <div className={`flex items-center space-x-1 ${isPositive ? 'text-secondary-green' : 'text-accent-pink'}`}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span className="text-sm">{Math.abs(change)}%</span>
        </div>
      </div>
    </Card>
  );
};