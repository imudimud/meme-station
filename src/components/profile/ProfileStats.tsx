import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Rocket, Star, MessageSquare, Award, TrendingUp, Users, Diamond } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
}

const StatItem = ({ icon: Icon, label, value, change, trend }: StatItemProps) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className="relative overflow-hidden"
  >
    <div className="flex flex-col items-center p-4 bg-secondary-black/30 rounded-lg border border-primary-blue/20 hover:border-primary-blue/40 transition-colors">
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary-blue/5 blur-xl" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center mb-2 group-hover:bg-primary-blue/20 transition-colors">
          <Icon className="w-6 h-6 text-primary-blue" />
        </div>
        
        <div className="text-center">
          <span className="font-orbitron text-xl text-primary-blue block">{value}</span>
          {change && (
            <span className={`text-xs ${
              trend === 'up' ? 'text-cyber-green' : 
              trend === 'down' ? 'text-cyber-pink' : 
              'text-accent-silver'
            }`}>
              {change}
            </span>
          )}
          <span className="text-sm text-accent-silver block mt-1">{label}</span>
        </div>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute top-0 left-[-100%] h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 translate-x-full animate-shine" />
      </div>
    </div>
  </motion.div>
);

export const ProfileStats = () => {
  const stats = [
    { 
      icon: Rocket, 
      label: 'Memes Posted', 
      value: 42,
      change: '+5 this week',
      trend: 'up' as const
    },
    { 
      icon: Star, 
      label: 'Likes Received', 
      value: '2.5K',
      change: '+324 today',
      trend: 'up' as const
    },
    { 
      icon: MessageSquare, 
      label: 'Comments', 
      value: 156,
      change: '+12 today',
      trend: 'up' as const
    },
    { 
      icon: Award, 
      label: 'Achievements', 
      value: 8,
      change: '2 in progress',
      trend: 'neutral' as const
    },
    { 
      icon: Diamond, 
      label: 'HODL Score', 
      value: '92',
      change: 'Diamond Hands',
      trend: 'up' as const
    },
    { 
      icon: Users, 
      label: 'Followers', 
      value: '1.2K',
      change: '+56 this week',
      trend: 'up' as const
    },
    { 
      icon: TrendingUp, 
      label: 'Portfolio Growth', 
      value: '+324%',
      change: 'All Time',
      trend: 'up' as const
    }
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-orbitron text-xl text-primary-blue">Community Stats</h3>
        <div className="flex items-center text-cyber-green text-sm">
          <TrendingUp className="w-4 h-4 mr-1" />
          <span>Growing Fast</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </Card>
  );
};
