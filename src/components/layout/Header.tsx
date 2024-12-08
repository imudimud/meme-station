import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  action?: React.ReactNode;
}

export const Header = ({ title, subtitle, showBack = false, action }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-40 bg-secondary-black/80 backdrop-blur-lg border-b border-primary-purple/20 px-4 py-3"
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center gap-3">
          {showBack && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(-1)}
              className="p-1 hover:text-primary-blue transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          )}
          <div>
            <h1 className="font-orbitron text-2xl text-primary-blue">{title}</h1>
            {subtitle && (
              <p className="text-accent-silver text-sm mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>
        {action && (
          <div className="flex items-center">
            {action}
          </div>
        )}
      </div>
    </motion.header>
  );
};
