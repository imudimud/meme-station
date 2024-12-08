import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Edit2, Image, Link2, Trophy, Star, 
  TrendingUp, Diamond, Rocket, Users, Zap, Medal
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ProfileStats } from '../components/profile/ProfileStats';
import { MemeCard } from '../components/meme/MemeCard';
import { AchievementBadge } from '../components/profile/AchievementBadge';
import { HodlerCard } from '../components/crypto/HodlerCard';

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
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=400&fit=crop',
    title: 'HODL Life 💎',
    author: 'DiamondHands',
    likes: 856,
    comments: 45,
    tags: ['hodl', 'diamond']
  }
];

const achievements = [
  { 
    id: '1',
    name: 'Diamond Hands',
    description: 'Held through a 50% dip',
    icon: Diamond,
    progress: 100
  },
  { 
    id: '2',
    name: 'Moon Walker',
    description: '10x gain achieved',
    icon: Rocket,
    progress: 75
  },
  { 
    id: '3',
    name: 'Community Leader',
    description: 'Created 10 viral memes',
    icon: Users,
    progress: 60
  },
  { 
    id: '4',
    name: 'Trend Setter',
    description: 'Started 5 viral trends',
    icon: TrendingUp,
    progress: 85
  },
  { 
    id: '5',
    name: 'Early Adopter',
    description: 'Joined during beta',
    icon: Star,
    progress: 100
  },
  { 
    id: '6',
    name: 'Power User',
    description: '100 days active streak',
    icon: Zap,
    progress: 45
  }
];

const mockPortfolio = {
  totalValue: 123456.78,
  change24h: 12.34,
  topHolding: { name: 'Bitcoin', amount: '2.5 BTC', value: 85000 }
};

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

export const Profile = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'achievements' | 'portfolio'>('posts');
  const level = 42;
  const xp = 8450;
  const nextLevelXp = 10000;

  const xpProgress = (xp / nextLevelXp) * 100;

  return (
    <div className="min-h-screen bg-secondary-black text-white pb-20">
      <Header 
        title="Profile" 
        action={
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        }
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-6 space-y-6"
      >
        {/* Profile Card */}
        <motion.div variants={itemVariants}>
          <Card className="p-6 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue via-primary-purple to-primary-blue animate-cyber-gradient" />
            </div>

            {/* Profile Content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary-blue animate-glow">
                    <img
                      src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=112&h=112&fit=crop"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-primary-blue rounded-full text-white hover:bg-primary-purple transition-colors animate-pulse">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <h2 className="font-orbitron text-2xl text-primary-blue">CryptoMemer</h2>
                    <div className="flex items-center bg-primary-blue/20 rounded-full px-3 py-1">
                      <Trophy className="w-4 h-4 text-primary-blue mr-1" />
                      <span className="text-sm">Level {level}</span>
                    </div>
                  </div>
                  <p className="text-accent-silver">Meme artist & crypto enthusiast</p>
                  
                  {/* XP Progress */}
                  <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span>XP: {xp}</span>
                      <span>Next Level: {nextLevelXp}</span>
                    </div>
                    <div className="h-2 bg-secondary-black/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${xpProgress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary-blue to-primary-purple"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                    <Button size="sm" className="animate-glow">
                      <Image className="w-4 h-4 mr-2" />
                      Edit Cover
                    </Button>
                    <Button variant="outline" size="sm">
                      <Link2 className="w-4 h-4 mr-2" />
                      Share Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ProfileStats />
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div variants={itemVariants} className="border-b border-primary-blue/20">
          <div className="flex space-x-8">
            {(['posts', 'achievements', 'portfolio'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  py-2 px-4 font-orbitron transition-colors relative
                  ${activeTab === tab ? 'text-primary-blue' : 'text-accent-silver hover:text-primary-purple'}
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-blue"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          variants={itemVariants}
          className="grid gap-6"
        >
          {activeTab === 'posts' && (
            <div className="space-y-6">
              {mockMemes.map((meme) => (
                <motion.div key={meme.id} variants={itemVariants}>
                  <MemeCard {...meme} />
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <motion.div key={achievement.id} variants={itemVariants}>
                  <AchievementBadge {...achievement} />
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'portfolio' && (
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-accent-silver mb-1">Total Value</h3>
                    <p className="font-orbitron text-2xl text-primary-blue">
                      ${mockPortfolio.totalValue.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-accent-silver mb-1">24h Change</h3>
                    <p className="text-cyber-green text-2xl">
                      +{mockPortfolio.change24h}%
                    </p>
                  </div>
                  <div>
                    <h3 className="text-accent-silver mb-1">Top Holding</h3>
                    <p className="font-orbitron text-xl text-primary-blue">
                      {mockPortfolio.topHolding.name}
                    </p>
                    <p className="text-accent-silver">
                      {mockPortfolio.topHolding.amount}
                    </p>
                  </div>
                </div>
              </Card>

              <div className="space-y-4">
                <h3 className="font-orbitron text-xl text-primary-blue">Recent Transactions</h3>
                <HodlerCard
                  rank={1}
                  username="CryptoMemer"
                  amount="2.5 BTC"
                  holdTime="180 days"
                  trend="up"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
