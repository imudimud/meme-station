import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { PriceCard } from '../components/crypto/PriceCard';
import { MemeCard } from '../components/meme/MemeCard';
import { Header } from '../components/layout/Header';
import { Button } from '../components/ui/Button';
import { Plus, ChevronRight, Trophy, Diamond, Rocket, TrendingUp, Users, Star } from 'lucide-react';
import { PortfolioChart } from '../components/portfolio/PortfolioChart';
import { AssetAllocation } from '../components/portfolio/AssetAllocation';
import { AddAssetModal } from '../components/portfolio/AddAssetModal';
import { BottomNav } from '../components/layout/BottomNav';
import { HodlerCard } from '../components/crypto/HodlerCard';
import { AchievementBadge } from '../components/profile/AchievementBadge';

const mockCryptos = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 65432.10,
    change: 2.5,
    volume: '24.5B',
    marketCap: '1.2T',
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=64&h=64&fit=crop'
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3456.78,
    change: -1.2,
    volume: '12.3B',
    marketCap: '450B',
    imageUrl: 'https://images.unsplash.com/photo-1622790698141-94e30457ef82?w=64&h=64&fit=crop'
  },
  {
    id: '3',
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.12345,
    change: 15.7,
    volume: '5.6B',
    marketCap: '18B',
    imageUrl: 'https://images.unsplash.com/photo-1622790698141-94e30457ef82?w=64&h=64&fit=crop'
  }
];

const mockMemes = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1520121401995-928cd50d4e27?w=400&h=400&fit=crop',
    title: 'To the Moon! 🚀',
    author: 'CryptoMemer',
    likes: 1234,
    comments: 89,
    tags: ['bitcoin', 'moon']
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1520121401995-928cd50d4e27?w=400&h=400&fit=crop',
    title: 'Diamond Hands 💎',
    author: 'HODLer4Life',
    likes: 987,
    comments: 65,
    tags: ['hodl', 'diamond']
  }
];

const mockAchievements = [
  { id: '1', name: 'Diamond Hands', icon: Diamond, description: 'Held through a 50% dip', progress: 100 },
  { id: '2', name: 'Moon Walker', icon: Rocket, description: '10x gain achieved', progress: 75 },
  { id: '3', name: 'Community Leader', icon: Users, description: 'Created 10 viral memes', progress: 60 }
];

const mockHodlers = [
  { rank: 1, username: 'DiamondKing', amount: '1,234.56 BTC', holdTime: '365 days', trend: 'up' },
  { rank: 2, username: 'MoonWalker', amount: '987.65 BTC', holdTime: '180 days', trend: 'up' },
  { rank: 3, username: 'CryptoWhale', amount: '567.89 BTC', holdTime: '90 days', trend: 'down' }
];

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Dashboard = () => {
  const [isAddAssetModalOpen, setIsAddAssetModalOpen] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');

  const timeframes = ['1H', '1D', '1W', '1M', '1Y', 'ALL'];

  return (
    <div className="min-h-screen bg-secondary-black text-white pb-20">
      <Header 
        title="Dashboard" 
        subtitle={
          <div className="flex items-center space-x-2">
            <span>Welcome back, Astronaut!</span>
            <div className="flex items-center text-primary-blue">
              <Trophy className="w-4 h-4 mr-1" />
              <span>Level 42</span>
            </div>
          </div>
        }
        action={
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setIsAddAssetModalOpen(true)}
            className="animate-glow"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Asset
          </Button>
        }
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-6 space-y-8"
      >
        {/* Portfolio Overview */}
        <motion.section variants={itemVariants} className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="font-orbitron text-2xl text-primary-blue">$123,456.78</h2>
                <p className="text-accent-silver">Total Portfolio Value</p>
              </div>
              <div className="text-right">
                <p className="text-cyber-green text-lg">+12.34%</p>
                <p className="text-accent-silver">24h Change</p>
              </div>
            </div>
            <div className="flex space-x-2 mb-4">
              {timeframes.map((tf) => (
                <Button
                  key={tf}
                  variant={selectedTimeframe === tf ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTimeframe(tf)}
                >
                  {tf}
                </Button>
              ))}
            </div>
            <PortfolioChart timeframe={selectedTimeframe} />
          </Card>
        </motion.section>

        {/* Asset Allocation */}
        <motion.section variants={itemVariants}>
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-orbitron text-xl text-primary-blue">Asset Allocation</h2>
              <Button variant="outline" size="sm">Manage</Button>
            </div>
            <AssetAllocation />
          </Card>
        </motion.section>

        {/* HODLer Status */}
        <motion.section variants={itemVariants}>
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-orbitron text-xl text-primary-blue">HODLer Status</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {mockHodlers.map((hodler) => (
                <HodlerCard key={hodler.username} {...hodler} />
              ))}
            </div>
          </Card>
        </motion.section>

        {/* Achievements */}
        <motion.section variants={itemVariants}>
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-orbitron text-xl text-primary-blue">Recent Achievements</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {mockAchievements.map((achievement) => (
                <AchievementBadge key={achievement.id} {...achievement} />
              ))}
            </div>
          </Card>
        </motion.section>

        {/* Top Movers */}
        <motion.section variants={itemVariants}>
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-orbitron text-xl text-primary-blue">Top Movers</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {mockCryptos.map(crypto => (
                <motion.div key={crypto.id} variants={itemVariants}>
                  <PriceCard {...crypto} />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.section>

        {/* Trending Memes */}
        <motion.section variants={itemVariants}>
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-orbitron text-xl text-primary-blue">Trending Memes</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {mockMemes.map((meme) => (
                <motion.div key={meme.id} variants={itemVariants}>
                  <MemeCard {...meme} />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.section>
      </motion.div>

      <AddAssetModal 
        isOpen={isAddAssetModalOpen}
        onClose={() => setIsAddAssetModalOpen(false)}
      />
    </div>
  );
};