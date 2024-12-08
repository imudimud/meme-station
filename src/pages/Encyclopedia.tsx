import * as React from 'react';
import { BottomNav } from '../components/layout/BottomNav';
import { EncyclopediaList } from '../components/encyclopedia/EncyclopediaList';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Clock, Star } from 'lucide-react';

// Mock data for encyclopedia entries
const mockEntries = [
  {
    id: '1',
    title: 'Understanding Blockchain Technology',
    description: 'A comprehensive guide to blockchain technology, including its core concepts, mechanisms, and real-world applications.',
    category: 'Blockchain Basics',
    difficulty: 'beginner' as const,
    lastUpdated: '2 days ago',
    stats: {
      views: 15420,
      likes: 892,
      saves: 345
    },
    contributors: [
      { name: 'Alex Chen', avatar: '/avatars/alex.jpg' },
      { name: 'Sarah Kim', avatar: '/avatars/sarah.jpg' }
    ],
    tags: ['blockchain', 'cryptocurrency', 'technology', 'decentralization']
  },
  {
    id: '2',
    title: 'Advanced Trading Strategies',
    description: 'Deep dive into professional trading strategies, technical analysis, and risk management techniques.',
    category: 'Trading Strategies',
    difficulty: 'advanced' as const,
    lastUpdated: '1 week ago',
    stats: {
      views: 8930,
      likes: 654,
      saves: 289
    },
    contributors: [
      { name: 'Mike Wilson', avatar: '/avatars/mike.jpg' },
      { name: 'Emma Davis', avatar: '/avatars/emma.jpg' }
    ],
    tags: ['trading', 'analysis', 'strategy', 'risk-management']
  },
  {
    id: '3',
    title: 'Cryptocurrency Mining',
    description: 'A detailed explanation of cryptocurrency mining, including the process, hardware, and software requirements.',
    category: 'Cryptocurrency',
    difficulty: 'intermediate' as const,
    lastUpdated: '1 month ago',
    stats: {
      views: 9000,
      likes: 600,
      saves: 300
    },
    contributors: [
      { name: 'David Lee', avatar: '/avatars/david.jpg' },
      { name: 'Emily Chen', avatar: '/avatars/emily.jpg' }
    ],
    tags: ['cryptocurrency', 'mining', 'blockchain', 'technology']
  }
];

const categories = [
  { 
    title: 'Trending',
    icon: TrendingUp,
    color: 'text-cyber-pink',
    borderColor: 'border-cyber-pink',
    count: 15
  },
  { 
    title: 'Latest',
    icon: Clock,
    color: 'text-cyber-green',
    borderColor: 'border-cyber-green',
    count: 28
  },
  { 
    title: 'Most Popular',
    icon: Star,
    color: 'text-cyber-yellow',
    borderColor: 'border-cyber-yellow',
    count: 35
  },
  { 
    title: 'All Articles',
    icon: BookOpen,
    color: 'text-primary-blue',
    borderColor: 'border-primary-blue',
    count: 120
  }
];

export const Encyclopedia = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All Articles');

  return (
    <div className="min-h-screen bg-secondary-black text-white pb-20">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-orbitron text-3xl text-primary-blue">
              Crypto Encyclopedia
            </h1>
            <div className="text-accent-silver">
              <span className="text-primary-blue font-bold">{mockEntries.length}</span> articles
            </div>
          </div>
          <p className="text-accent-silver max-w-2xl">
            Your comprehensive guide to understanding cryptocurrency, blockchain technology, and decentralized finance.
          </p>
        </header>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.title}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(category.title)}
                className={`p-4 rounded-lg border ${category.borderColor} bg-secondary-black/30 
                           hover:bg-secondary-black/50 transition-colors
                           ${selectedCategory === category.title ? 'bg-secondary-black/50' : ''}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${category.color}`} />
                  <span className={`text-sm ${category.color}`}>{category.count}</span>
                </div>
                <span className={`block text-sm font-medium ${category.color}`}>
                  {category.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Encyclopedia List */}
        <EncyclopediaList entries={mockEntries} />
      </div>
      <BottomNav />
    </div>
  );
};