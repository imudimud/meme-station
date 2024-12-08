import React, { useState } from 'react';
import { EncyclopediaEntry } from './EncyclopediaEntry';
import { Search, Filter, SortDesc } from 'lucide-react';

interface EncyclopediaListProps {
  entries: Array<{
    id: string;
    title: string;
    description: string;
    category: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    lastUpdated: string;
    stats: {
      views: number;
      likes: number;
      saves: number;
    };
    contributors: Array<{
      name: string;
      avatar: string;
    }>;
    tags: string[];
  }>;
}

export const EncyclopediaList: React.FC<EncyclopediaListProps> = ({ entries }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const categories = ['all', ...new Set(entries.map(entry => entry.category))];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const filteredEntries = entries.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || entry.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-silver w-5 h-5" />
          <input
            type="text"
            placeholder="Search encyclopedia..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-secondary-black/30 border border-white/10 rounded-lg 
                     text-white placeholder-accent-silver focus:border-primary-blue focus:ring-1 
                     focus:ring-primary-blue outline-none transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-silver w-4 h-4" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-2 bg-secondary-black/30 border border-white/10 rounded-lg 
                       text-white appearance-none cursor-pointer hover:border-primary-blue 
                       focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none 
                       transition-colors"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-secondary-black">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <SortDesc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-silver w-4 h-4" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="pl-10 pr-8 py-2 bg-secondary-black/30 border border-white/10 rounded-lg 
                       text-white appearance-none cursor-pointer hover:border-primary-blue 
                       focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none 
                       transition-colors"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty} className="bg-secondary-black">
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-accent-silver">
        Showing {filteredEntries.length} of {entries.length} entries
      </div>

      {/* Entries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEntries.map((entry) => (
          <EncyclopediaEntry
            key={entry.id}
            {...entry}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredEntries.length === 0 && (
        <div className="text-center py-12">
          <p className="text-accent-silver text-lg">No entries found matching your criteria</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedDifficulty('all');
            }}
            className="mt-4 text-primary-blue hover:text-primary-purple transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};
