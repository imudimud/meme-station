import React from 'react';
import { BottomNav } from '../components/layout/BottomNav';
import { CommunityFeed } from '../components/community/CommunityFeed';
import { Card } from '../components/ui/Card';
import { Search, Users, TrendingUp, Award } from 'lucide-react';

// Mock data for the feed
const mockFeedItems = [
  {
    id: '1',
    type: 'achievement' as const,
    title: 'Diamond Hands Achievement Unlocked! 🚀',
    content: 'Just held through a 30% dip and came out stronger! True HODLER status achieved.',
    author: {
      name: 'CryptoKing',
      avatar: '/avatars/user1.jpg',
      level: 42
    },
    timestamp: '2 hours ago',
    engagement: { likes: 230, comments: 45, shares: 12 },
    metadata: {
      achievement: {
        icon: '/icons/diamond-hands.png',
        rarity: 'legendary' as const
      }
    },
    tags: ['achievement', 'hodl', 'diamond-hands']
  },
  {
    id: '2',
    type: 'news' as const,
    title: 'Breaking: Major DeFi Protocol Launches New Feature',
    content: 'A leading DeFi protocol has just announced a groundbreaking new feature that could revolutionize yield farming...',
    author: {
      name: 'CryptoNews',
      avatar: '/avatars/news.jpg'
    },
    timestamp: '4 hours ago',
    engagement: { likes: 543, comments: 89, shares: 156 },
    tags: ['defi', 'yield-farming', 'crypto-news']
  },
  {
    id: '3',
    type: 'market' as const,
    title: 'BTC Breaks Key Resistance Level',
    content: 'Bitcoin has successfully broken through the $50,000 resistance level with strong volume...',
    author: {
      name: 'TradingPro',
      avatar: '/avatars/trader.jpg',
      level: 35
    },
    timestamp: '30 minutes ago',
    engagement: { likes: 892, comments: 234, shares: 145 },
    metadata: {
      market: {
        symbol: 'BTC/USD',
        change: 5.67,
        price: 51234.56
      }
    },
    tags: ['bitcoin', 'trading', 'technical-analysis']
  },
  {
    id: '4',
    type: 'encyclopedia' as const,
    title: 'Understanding Layer 2 Scaling Solutions',
    content: 'A comprehensive guide to various Layer 2 scaling solutions in the blockchain ecosystem...',
    author: {
      name: 'BlockchainEdu',
      avatar: '/avatars/edu.jpg'
    },
    timestamp: '1 day ago',
    engagement: { likes: 445, comments: 67, shares: 89 },
    tags: ['education', 'layer2', 'scaling', 'blockchain']
  },
  {
    id: '5',
    type: 'post' as const,
    title: 'Community Discussion: Future of DeFi',
    content: 'What are your thoughts on the future of DeFi? Share your predictions and insights...',
    author: {
      name: 'DeFiExplorer',
      avatar: '/avatars/user2.jpg',
      level: 28
    },
    timestamp: '5 hours ago',
    engagement: { likes: 234, comments: 156, shares: 23 },
    tags: ['discussion', 'defi', 'future', 'community']
  }
];

// Mock data for trending topics
const trendingTopics = [
  { name: 'Bitcoin', posts: 1234, trending: true },
  { name: 'DeFi', posts: 856, trending: true },
  { name: 'NFTs', posts: 654 },
  { name: 'Layer2', posts: 432 },
  { name: 'Metaverse', posts: 321 }
];

// Mock data for top contributors
const topContributors = [
  { name: 'CryptoKing', level: 42, contributions: 234, avatar: '/avatars/user1.jpg' },
  { name: 'BlockchainGuru', level: 38, contributions: 189, avatar: '/avatars/user3.jpg' },
  { name: 'DeFiExplorer', level: 35, contributions: 156, avatar: '/avatars/user2.jpg' }
];

export const Community = () => {
  return (
    <div className="min-h-screen bg-secondary-black text-white pb-20">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-6">
              <h1 className="font-orbitron text-3xl text-primary-blue mb-2">Community Hub</h1>
              <p className="text-accent-silver">
                Connect, share, and learn with fellow crypto enthusiasts
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-silver w-5 h-5" />
              <input
                type="text"
                placeholder="Search community posts..."
                className="w-full pl-10 pr-4 py-3 bg-secondary-black/30 border border-white/10 rounded-lg 
                         text-white placeholder-accent-silver focus:border-primary-blue focus:ring-1 
                         focus:ring-primary-blue outline-none transition-colors"
              />
            </div>

            {/* Feed */}
            <CommunityFeed feedItems={mockFeedItems} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-orbitron text-lg text-primary-blue">Trending Topics</h2>
                <TrendingUp className="w-5 h-5 text-cyber-pink" />
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-white hover:text-primary-blue cursor-pointer transition-colors">
                        #{topic.name}
                      </span>
                      {topic.trending && (
                        <span className="text-xs text-cyber-pink">Trending</span>
                      )}
                    </div>
                    <span className="text-xs text-accent-silver">{topic.posts} posts</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Top Contributors */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-orbitron text-lg text-primary-blue">Top Contributors</h2>
                <Users className="w-5 h-5 text-cyber-green" />
              </div>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={contributor.avatar}
                        alt={contributor.name}
                        className="w-8 h-8 rounded-full border-2 border-primary-blue/20"
                      />
                      <div>
                        <div className="text-white hover:text-primary-blue cursor-pointer transition-colors">
                          {contributor.name}
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                          <span className="text-cyber-green">Lvl {contributor.level}</span>
                          <span className="text-accent-silver">{contributor.contributions} contributions</span>
                        </div>
                      </div>
                    </div>
                    <Award className={`w-5 h-5 ${index === 0 ? 'text-cyber-gold' : index === 1 ? 'text-cyber-silver' : 'text-cyber-bronze'}`} />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};