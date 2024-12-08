import React from 'react';
import { FeedItem, FeedItemType } from './FeedItem';
import { Filter, TrendingUp, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface CommunityFeedProps {
  feedItems: Array<{
    id: string;
    type: FeedItemType;
    title: string;
    content: string;
    author: {
      name: string;
      avatar: string;
      level?: number;
    };
    timestamp: string;
    engagement: {
      likes: number;
      comments: number;
      shares: number;
    };
    metadata?: {
      achievement?: {
        icon: string;
        rarity: 'common' | 'rare' | 'epic' | 'legendary';
      };
      market?: {
        symbol: string;
        change: number;
        price: number;
      };
    };
    tags: string[];
  }>;
}

const feedFilters = [
  { 
    id: 'trending',
    label: 'Trending',
    icon: TrendingUp,
    color: 'text-cyber-pink',
    borderColor: 'border-cyber-pink'
  },
  { 
    id: 'latest',
    label: 'Latest',
    icon: Clock,
    color: 'text-cyber-green',
    borderColor: 'border-cyber-green'
  },
  { 
    id: 'following',
    label: 'Following',
    icon: Star,
    color: 'text-cyber-yellow',
    borderColor: 'border-cyber-yellow'
  },
  { 
    id: 'all',
    label: 'All Posts',
    icon: Filter,
    color: 'text-primary-blue',
    borderColor: 'border-primary-blue'
  }
];

export const CommunityFeed: React.FC<CommunityFeedProps> = ({ feedItems }) => {
  const [selectedFilter, setSelectedFilter] = React.useState('all');
  const [selectedTypes, setSelectedTypes] = React.useState<FeedItemType[]>([
    'post', 'news', 'encyclopedia', 'achievement', 'market'
  ]);

  const toggleType = (type: FeedItemType) => {
    setSelectedTypes(prev => 
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const filteredItems = feedItems.filter(item => selectedTypes.includes(item.type));

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col space-y-4">
        {/* Main Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {feedFilters.map(filter => {
            const Icon = filter.icon;
            return (
              <motion.button
                key={filter.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedFilter(filter.id)}
                className={`p-4 rounded-lg border ${filter.borderColor} bg-secondary-black/30 
                           hover:bg-secondary-black/50 transition-colors
                           ${selectedFilter === filter.id ? 'bg-secondary-black/50' : ''}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${filter.color}`} />
                </div>
                <span className={`block text-sm font-medium ${filter.color}`}>
                  {filter.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Content Type Filters */}
        <div className="flex flex-wrap gap-2">
          {(['post', 'news', 'encyclopedia', 'achievement', 'market'] as FeedItemType[]).map(type => (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`px-3 py-1 rounded-full text-sm border transition-colors
                ${selectedTypes.includes(type)
                  ? 'border-primary-blue bg-primary-blue/10 text-primary-blue'
                  : 'border-accent-silver/30 text-accent-silver hover:border-primary-blue'
                }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}s
            </button>
          ))}
        </div>
      </div>

      {/* Feed Items */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <FeedItem key={item.id} {...item} />
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-accent-silver text-lg">No posts found matching your filters</p>
          <button
            onClick={() => {
              setSelectedFilter('all');
              setSelectedTypes(['post', 'news', 'encyclopedia', 'achievement', 'market']);
            }}
            className="mt-4 text-primary-blue hover:text-primary-purple transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};
