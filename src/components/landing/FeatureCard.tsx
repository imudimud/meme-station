import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        y: -5,
        boxShadow: "0 0 20px rgba(0, 128, 255, 0.3)",
      }}
      className="
        bg-secondary-black/30 
        backdrop-blur-lg 
        p-6 
        rounded-xl 
        border 
        border-primary-blue/20 
        hover:border-primary-blue/40
        transition-colors
        group
        relative
        overflow-hidden
      "
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/0 via-primary-blue/5 to-primary-blue/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      
      {/* Icon with glow */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative"
      >
        <div className="absolute inset-0 blur-lg bg-primary-blue/20 scale-150" />
        <Icon className="w-12 h-12 text-primary-blue mb-4 relative" />
      </motion.div>

      {/* Content */}
      <motion.h3 
        className="font-orbitron text-xl text-primary-blue mb-2 relative"
        whileHover={{ textShadow: "0 0 8px rgba(0, 128, 255, 0.5)" }}
      >
        {title}
      </motion.h3>
      <p className="text-accent-silver/80 relative">{description}</p>
    </motion.div>
  );
};