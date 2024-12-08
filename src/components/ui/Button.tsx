import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = 'font-orbitron rounded-lg transition-all duration-200 flex items-center justify-center relative overflow-hidden';
  
  const variants = {
    primary: 'bg-primary-blue hover:bg-primary-blue/90 text-white before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-purple/0 before:via-primary-purple/30 before:to-primary-purple/0 before:animate-glow',
    secondary: 'bg-secondary-green hover:bg-secondary-green/90 text-secondary-black before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-blue/0 before:via-primary-blue/30 before:to-primary-blue/0 before:animate-glow',
    outline: 'border-2 border-primary-purple hover:border-primary-blue hover:bg-primary-blue/10 text-primary-blue before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-purple/0 before:via-primary-purple/30 before:to-primary-purple/0 before:animate-glow'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(30, 144, 255, 0.5)' }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};