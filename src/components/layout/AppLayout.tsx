import React from 'react';
import { motion } from 'framer-motion';
import { BottomNav } from './BottomNav';

interface AppLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

export const AppLayout = ({ children, showNav = true }: AppLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-secondary-black text-white relative"
    >
      <div className="fixed inset-0 bg-gradient-to-b from-secondary-black via-secondary-black/95 to-primary-purple/10 pointer-events-none" />
      
      <main className="relative z-10 pb-20">
        {children}
      </main>

      {showNav && <BottomNav />}
    </motion.div>
  );
};
