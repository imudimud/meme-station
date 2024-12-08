import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { BookOpen, Star, ThumbsUp, Share2, Bookmark, ExternalLink } from 'lucide-react';

interface EncyclopediaEntryProps {
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lastUpdated: string;
  stats: {
    views: number;
    likes: number;
    saves: number;
  };
  contributors: Array<{
    name: string;
    avatar: string;
  }>;
  tags: string[];
}

export const EncyclopediaEntry: React.FC<EncyclopediaEntryProps> = ({
  title,
  description,
  category,
  difficulty,
  lastUpdated,
  stats,
  contributors,
  tags,
}) => {
  const difficultyColors = {
    beginner: 'text-cyber-green border-cyber-green',
    intermediate: 'text-cyber-yellow border-cyber-yellow',
    advanced: 'text-cyber-pink border-cyber-pink',
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Card className="overflow-hidden bg-secondary-black/30 hover:bg-secondary-black/40 transition-colors p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <BookOpen className="w-5 h-5 text-primary-blue" />
              <span className="text-accent-silver">{category}</span>
              <div className={`px-3 py-1 rounded-full border ${difficultyColors[difficulty]} text-xs uppercase`}>
                {difficulty}
              </div>
            </div>
            <h3 className="font-orbitron text-xl text-white group-hover:text-primary-blue transition-colors">
              {title}
            </h3>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-accent-silver hover:text-primary-blue transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="p-2 text-accent-silver hover:text-primary-blue transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-accent-silver mb-6 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-primary-blue/10 text-primary-blue hover:bg-primary-blue/20 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats and Contributors */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1 text-accent-silver">
              <Star className="w-4 h-4" />
              <span className="text-xs">{stats.views} views</span>
            </div>
            <div className="flex items-center space-x-1 text-accent-silver">
              <ThumbsUp className="w-4 h-4" />
              <span className="text-xs">{stats.likes} likes</span>
            </div>
            <div className="flex items-center space-x-1 text-accent-silver">
              <Bookmark className="w-4 h-4" />
              <span className="text-xs">{stats.saves} saves</span>
            </div>
          </div>

          {/* Contributors */}
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {contributors.map((contributor, index) => (
                <img
                  key={index}
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="w-6 h-6 rounded-full border-2 border-secondary-black"
                  title={contributor.name}
                />
              ))}
            </div>
            <span className="text-xs text-accent-silver">
              • Updated {lastUpdated}
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
