import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, TrendingUp } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { NewsCard } from '../components/news/NewsCard';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const mockNews = [
  {
    id: '1',
    title: 'Bitcoin Surges Past $70,000 as Institutional Adoption Grows',
    source: 'CryptoNews',
    publishedAt: '2024-12-09T00:36:42+03:00',
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=300',
    summary: 'Bitcoin reaches new all-time high as major institutions announce significant investments in cryptocurrency...',
    category: 'trending',
    engagement: {
      likes: 1200,
      comments: 450,
      saves: 280
    }
  },
  {
    id: '2',
    title: 'New DeFi Protocol Promises Revolutionary Yield Farming',
    source: 'DeFi Daily',
    publishedAt: '2024-12-08T21:36:42+03:00',
    imageUrl: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=400&h=300',
    summary: 'A new decentralized finance protocol has emerged, offering innovative approaches to yield farming...',
    category: 'latest',
    engagement: {
      likes: 850,
      comments: 320,
      saves: 150
    }
  },
];

const trendingTopics = [
  { name: 'Bitcoin ETF', count: 2453 },
  { name: 'DeFi Security', count: 1876 },
  { name: 'NFT Gaming', count: 1654 },
  { name: 'Layer 2', count: 1432 },
];

export const News = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header 
        title="Crypto News" 
        subtitle="Stay updated with the latest in crypto"
        action={
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        }
      />

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news..."
                className="w-full bg-secondary-black/50 border border-primary-purple/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder-accent-silver/50 focus:outline-none focus:border-primary-purple"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-silver w-5 h-5" />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="space-y-4"
            >
              {mockNews.map((news) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <NewsCard {...news} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-orbitron text-lg text-primary-blue">
                  Trending Topics
                </h3>
                <TrendingUp className="w-5 h-5 text-primary-purple" />
              </div>
              
              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <motion.div
                    key={topic.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-white hover:text-primary-blue cursor-pointer transition-colors">
                      #{topic.name}
                    </span>
                    <span className="text-accent-silver text-sm">
                      {topic.count.toLocaleString()}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-orbitron text-lg text-primary-blue mb-4">
                Popular Sources
              </h3>
              <div className="flex flex-wrap gap-2">
                {['CoinDesk', 'CryptoNews', 'Bloomberg', 'Reuters'].map((source) => (
                  <motion.button
                    key={source}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 rounded-full bg-primary-purple/10 text-primary-purple text-sm hover:bg-primary-purple/20 transition-colors"
                  >
                    {source}
                  </motion.button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
