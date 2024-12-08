import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { ExternalLink, MessageSquare, ThumbsUp, Bookmark, Share2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface NewsCardProps {
  title: string;
  summary: string;
  source: string;
  imageUrl: string;
  publishedAt: string;
  category: 'trending' | 'latest' | 'analysis';
  engagement: {
    likes: number;
    comments: number;
    saves: number;
  };
}

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  summary,
  source,
  imageUrl,
  publishedAt,
  category,
  engagement
}) => {
  const categoryColors = {
    trending: 'text-cyber-pink border-cyber-pink',
    latest: 'text-cyber-green border-cyber-green',
    analysis: 'text-primary-blue border-primary-blue'
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Card className="overflow-hidden bg-secondary-black/30 hover:bg-secondary-black/40 transition-colors">
        <div className="relative">
          {/* Category Badge */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border ${categoryColors[category]} text-xs uppercase font-bold bg-black/50 backdrop-blur-sm`}>
            {category}
          </div>

          {/* Image with gradient overlay */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="p-4">
          {/* Source and Time */}
          <div className="flex items-center justify-between text-xs text-accent-silver mb-2">
            <span className="font-medium">{source}</span>
            <span>
              {(() => {
                try {
                  return formatDistanceToNow(new Date(publishedAt)) + ' ago';
                } catch (error) {
                  return 'Recently';
                }
              })()}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-orbitron text-lg text-white mb-2 line-clamp-2 group-hover:text-primary-blue transition-colors">
            {title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-accent-silver mb-4 line-clamp-3">
            {summary}
          </p>

          {/* Engagement Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
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
                <Bookmark className="w-4 h-4" />
                <span className="text-xs">{engagement.saves}</span>
              </button>
            </div>
            <div className="flex space-x-2">
              <button className="p-1 text-accent-silver hover:text-primary-blue transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-1 text-accent-silver hover:text-primary-blue transition-colors">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
