import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Card } from '../ui/Card';

interface MemeCardProps {
  imageUrl: string;
  title: string;
  author: string;
  likes: number;
  comments: number;
}

export const MemeCard = ({ imageUrl, title, author, likes, comments }: MemeCardProps) => {
  return (
    <Card className="space-y-4">
      <div className="relative aspect-square rounded-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="space-y-2">
        <h3 className="font-orbitron text-primary-blue text-lg">{title}</h3>
        <p className="text-accent-silver text-sm">by {author}</p>
      </div>
      <div className="flex justify-between items-center text-accent-silver">
        <button className="flex items-center space-x-2 hover:text-primary-purple transition-colors">
          <Heart className="w-5 h-5" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-primary-purple transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span>{comments}</span>
        </button>
        <button className="hover:text-primary-purple transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </Card>
  );
};