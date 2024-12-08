import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface HodlerCardProps {
  rank: number;
  username: string;
  amount: string;
  holdTime: string;
  trend: 'up' | 'down';
}

export const HodlerCard = ({ rank, username, amount, holdTime, trend }: HodlerCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-secondary-black/30 rounded-lg p-4 border border-primary-blue/20 hover:border-primary-blue/40 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 rounded-full bg-primary-blue/20 flex items-center justify-center font-orbitron">
            #{rank}
          </div>
          <div>
            <h3 className="font-orbitron text-lg text-primary-blue">{username}</h3>
            <p className="text-accent-silver text-sm">{holdTime}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-medium">{amount}</span>
            {trend === 'up' ? (
              <TrendingUp className="w-4 h-4 text-cyber-green" />
            ) : (
              <TrendingDown className="w-4 h-4 text-cyber-pink" />
            )}
          </div>
          <p className="text-accent-silver text-sm">
            {trend === 'up' ? 'Accumulating' : 'Decreasing'}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
