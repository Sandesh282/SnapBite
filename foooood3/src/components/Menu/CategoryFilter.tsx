import React from 'react';
import { categories } from '../../data/menuItems';

const glassCard = 'bg-white/30 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl';
const glassButton = 'bg-white/40 backdrop-blur border border-white/30 text-gray-700 hover:bg-white/60';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className={glassCard + " p-2 overflow-x-auto mb-6"}>
      <div className="flex space-x-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
              selectedCategory === category
                ? 'bg-primary-500 text-white shadow-md'
                : glassButton
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;