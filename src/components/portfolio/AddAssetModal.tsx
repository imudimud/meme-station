import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Plus } from 'lucide-react';
import { Button } from '../ui/Button';

interface AddAssetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockAssets = [
  { id: '1', name: 'Bitcoin', symbol: 'BTC', price: 65432.10 },
  { id: '2', name: 'Ethereum', symbol: 'ETH', price: 3456.78 },
  { id: '3', name: 'Dogecoin', symbol: 'DOGE', price: 0.12 },
];

export const AddAssetModal = ({ isOpen, onClose }: AddAssetModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAssets = mockAssets.filter(
    asset => 
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
          >
            <div className="bg-secondary-black border border-primary-purple/20 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-orbitron text-xl text-primary-blue">Add Asset</h2>
                <button
                  onClick={onClose}
                  className="p-1 hover:text-primary-purple transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search assets..."
                  className="w-full bg-secondary-black/50 border border-primary-purple/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder-accent-silver/50 focus:outline-none focus:border-primary-purple"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-silver w-5 h-5" />
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto">
                {filteredAssets.map((asset) => (
                  <motion.div
                    key={asset.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-primary-blue/10 transition-colors cursor-pointer group"
                  >
                    <div>
                      <p className="font-orbitron text-white">{asset.name}</p>
                      <p className="text-accent-silver text-sm">{asset.symbol}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-white">${asset.price.toLocaleString()}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
