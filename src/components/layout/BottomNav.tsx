import React from 'react';
import { Home, Users, BookOpen, Newspaper, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { icon: Home, label: 'Home', path: '/app' },
  { icon: Users, label: 'Community', path: '/app/community' },
  { icon: BookOpen, label: 'Encyclopedia', path: '/app/encyclopedia' },
  { icon: Newspaper, label: 'News', path: '/app/news' },
  { icon: User, label: 'Profile', path: '/app/profile' },
];

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 w-full bg-secondary-black/90 backdrop-blur-lg border-t border-primary-purple/20 px-4 py-2 z-50"
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          
          return (
            <motion.button
              key={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(path)}
              className="flex flex-col items-center p-2 relative"
            >
              <div className={`
                relative transition-colors duration-300
                ${isActive ? 'text-primary-blue' : 'text-accent-silver hover:text-primary-purple'}
              `}>
                <Icon className="w-6 h-6" />
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -inset-1 bg-primary-blue/10 rounded-lg -z-10"
                  />
                )}
              </div>
              <span className={`
                text-xs mt-1 font-roboto transition-colors duration-300
                ${isActive ? 'text-primary-blue' : 'text-accent-silver'}
              `}>
                {label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};