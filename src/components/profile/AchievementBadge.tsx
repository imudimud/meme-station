import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AchievementBadgeProps {
  name: string;
  icon: LucideIcon;
  description: string;
  progress: number;
}

export const AchievementBadge = ({ name, icon: Icon, description, progress }: AchievementBadgeProps) => {
  const isCompleted = progress === 100;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`
        relative p-4 rounded-lg border
        ${isCompleted 
          ? 'border-primary-blue bg-primary-blue/10 animate-glow' 
          : 'border-accent-silver/20 bg-secondary-black/30'
        }
      `}
    >
      {/* Background glow effect for completed achievements */}
      {isCompleted && (
        <div className="absolute inset-0 bg-primary-blue/5 blur-xl rounded-lg" />
      )}

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-center mb-2">
          <div className={`
            w-12 h-12 rounded-full flex items-center justify-center
            ${isCompleted ? 'bg-primary-blue text-white' : 'bg-accent-silver/20 text-accent-silver'}
          `}>
            <Icon className="w-6 h-6" />
          </div>
        </div>

        <h3 className="font-orbitron text-center text-sm mb-1">
          {name}
        </h3>

        <p className="text-accent-silver/80 text-xs text-center mb-2">
          {description}
        </p>

        {/* Progress bar */}
        <div className="w-full h-1 bg-accent-silver/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full rounded-full ${
              isCompleted ? 'bg-primary-blue' : 'bg-accent-silver/40'
            }`}
          />
        </div>

        {/* Progress percentage */}
        <p className="text-xs text-center mt-1 text-accent-silver">
          {progress}%
        </p>
      </div>

      {/* Shine effect for completed achievements */}
      {isCompleted && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-[-100%] h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 translate-x-full animate-shine" />
        </div>
      )}
    </motion.div>
  );
};
