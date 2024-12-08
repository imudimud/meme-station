import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { MessageSquare, ThumbsUp, Share2, Trophy, BookOpen, Newspaper, User, TrendingUp } from 'lucide-react';

export type FeedItemType = 'post' | 'news' | 'encyclopedia' | 'achievement' | 'market';

interface FeedItemProps {
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
}

const typeConfig = {
  post: {
    icon: MessageSquare,
    color: 'text-primary-blue',
    bgColor: 'bg-primary-blue/10',
  },
  news: {
    icon: Newspaper,
    color: 'text-cyber-green',
    bgColor: 'bg-cyber-green/10',
  },
  encyclopedia: {
    icon: BookOpen,
    color: 'text-cyber-yellow',
    bgColor: 'bg-cyber-yellow/10',
  },
  achievement: {
    icon: Trophy,
    color: 'text-cyber-pink',
    bgColor: 'bg-cyber-pink/10',
  },
  market: {
    icon: TrendingUp,
    color: 'text-cyber-purple',
    bgColor: 'bg-cyber-purple/10',
  },
};

const rarityColors = {
  common: 'text-accent-silver',
  rare: 'text-cyber-blue',
  epic: 'text-cyber-purple',
  legendary: 'text-cyber-gold',
};

export const FeedItem: React.FC<FeedItemProps> = ({
  type,
  title,
  content,
  author,
  timestamp,
  engagement,
  metadata,
  tags,
}) => {
  const TypeIcon = typeConfig[type].icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden bg-secondary-black/30 hover:bg-secondary-black/40 transition-colors">
        {/* Header */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${typeConfig[type].bgColor}`}>
                <TypeIcon className={`w-5 h-5 ${typeConfig[type].color}`} />
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-8 h-8 rounded-full border-2 border-primary-blue/20"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-white">{author.name}</span>
                    {author.level && (
                      <span className="text-xs px-2 py-1 rounded-full bg-primary-blue/10 text-primary-blue">
                        Lvl {author.level}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-accent-silver">{timestamp}</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="font-orbitron text-lg text-white group-hover:text-primary-blue transition-colors mb-2">
            {title}
          </h3>

          {/* Market Data */}
          {type === 'market' && metadata?.market && (
            <div className="flex items-center space-x-4 mb-2">
              <span className="text-white font-medium">{metadata.market.symbol}</span>
              <span className={metadata.market.change >= 0 ? 'text-cyber-green' : 'text-cyber-pink'}>
                {metadata.market.change >= 0 ? '+' : ''}{metadata.market.change}%
              </span>
              <span className="text-accent-silver">${metadata.market.price.toLocaleString()}</span>
            </div>
          )}

          {/* Achievement */}
          {type === 'achievement' && metadata?.achievement && (
            <div className="flex items-center space-x-2 mb-2">
              <img src={metadata.achievement.icon} alt="Achievement" className="w-6 h-6" />
              <span className={`${rarityColors[metadata.achievement.rarity]}`}>
                {metadata.achievement.rarity.charAt(0).toUpperCase() + metadata.achievement.rarity.slice(1)} Achievement
              </span>
            </div>
          )}

          <p className="text-accent-silver">{content}</p>
        </div>

        {/* Tags */}
        <div className="px-4 py-2 border-b border-white/10">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-primary-blue/10 text-primary-blue hover:bg-primary-blue/20 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Engagement */}
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-1 text-accent-silver hover:text-cyber-green transition-colors">
              <ThumbsUp className="w-4 h-4" />
              <span className="text-xs">{engagement.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-accent-silver hover:text-primary-blue transition-colors">
              <MessageSquare className="w-4 h-4" />
              <span className="text-xs">{engagement.comments}</span>
            </button>
            <button className="flex items-center space-x-1 text-accent-silver hover:text-cyber-pink transition-colors">
              <Share2 className="w-4 h-4" />
              <span className="text-xs">{engagement.shares}</span>
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
