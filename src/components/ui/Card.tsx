import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'highlight' | 'interactive';
}

export const Card = ({ children, className = '', variant = 'default' }: CardProps) => {
  const variants = {
    default: 'bg-secondary-black/80 border-primary-purple/20',
    highlight: 'bg-secondary-black/90 border-primary-blue/40',
    interactive: 'bg-secondary-black/80 border-primary-purple/20 hover:border-primary-blue/60 cursor-pointer'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        backdrop-blur-lg border rounded-xl p-4
        shadow-lg hover:shadow-primary-blue/20
        transition-all duration-300
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-primary-purple/0 before:via-primary-purple/5 before:to-primary-purple/0
        relative overflow-hidden
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};