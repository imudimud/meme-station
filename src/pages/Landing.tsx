import React from 'react';
import { Rocket, Users, BookOpen, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { ParticleBackground } from '../components/ui/ParticleBackground';
import { Button } from '../components/ui/Button';
import { FeatureCard } from '../components/landing/FeatureCard';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: TrendingUp,
    title: 'Track Your Lunar Gains',
    description: 'Monitor your portfolio with real-time tracking, advanced analytics, and predictive insights powered by AI.'
  },
  {
    icon: Users,
    title: 'Join the Crypto Collective',
    description: 'Connect with fellow moonwalkers, share your journey, and become part of a thriving crypto community.'
  },
  {
    icon: BookOpen,
    title: 'Meme-ify Your Portfolio',
    description: 'Express yourself through memes, earn badges, and climb the ranks of our unique social ecosystem.'
  },
  {
    icon: Rocket,
    title: 'Stay Ahead of the Curve',
    description: 'Access curated news, market insights, and trending signals to make informed decisions.'
  }
];

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background-dark to-background-darker">
      <ParticleBackground />
      
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="font-orbitron text-6xl md:text-7xl text-primary-blue mb-4 animate-glow"
            animate={{ 
              textShadow: ["0 0 10px #00f", "0 0 20px #00f", "0 0 10px #00f"],
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            Moon Verse
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-accent-silver mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Dive into the world of meme coins, track your portfolio, and connect with fellow crypto enthusiasts. 
            The future of decentralized fun is here.
          </motion.p>
          <Button
            size="lg"
            onClick={() => navigate('/app')}
            className="animate-glow hover:scale-105 transition-transform"
          >
            Launch App
          </Button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer 
        className="relative z-10 container mx-auto px-4 py-8 mt-16 border-t border-accent-silver/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent-silver/60"> 2024 Moon Verse. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-accent-silver hover:text-primary-blue transition-colors">About Us</a>
            <a href="#" className="text-accent-silver hover:text-primary-blue transition-colors">Contact</a>
            <a href="#" className="text-accent-silver hover:text-primary-blue transition-colors">Privacy</a>
            <a href="#" className="text-accent-silver hover:text-primary-blue transition-colors">Terms</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};