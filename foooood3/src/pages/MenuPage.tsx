import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import CategoryFilter from '../components/Menu/CategoryFilter';
import MenuItem from '../components/Menu/MenuItem';
import { menuItems } from '../data/menuItems';
import { Search } from 'lucide-react';

const glassCard = 'bg-white/30 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl';

const MenuPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(menuItems);
  
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);
  
  useEffect(() => {
    let filtered = menuItems;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        item => 
          item.name.toLowerCase().includes(query) || 
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredItems(filtered);
    
    // Update URL params for category
    if (selectedCategory !== 'All') {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, searchQuery, setSearchParams]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <Layout>
      <div
        className="min-h-screen pt-24 pb-16"
        style={{
          background:
            'linear-gradient(135deg, #f8bbd0 0%, #fce4ec 100%)',
        }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10 text-center">
            <h1 className="text-5xl font-bold mb-3 text-rose-900">Our Menu</h1>
            <p className="text-lg text-rose-700 max-w-2xl mx-auto">
              Browse through our delicious selection of meals and drinks
            </p>
          </div>
          
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search for dishes, cuisines, etc."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 pl-12 pr-4 rounded-full border border-white/30 bg-white/20 backdrop-blur-xl shadow-lg text-lg placeholder-gray-400 transition-all focus:ring-2 focus:ring-rose-400"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-rose-300" size={24} />
            </div>
          </div>
          
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onCategoryChange={handleCategoryChange} 
          />
          
          {filteredItems.length === 0 ? (
            <div className="text-center py-24">
              <h3 className="text-2xl font-semibold text-rose-700 mb-2">No items found</h3>
              <p className="text-rose-400">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {filteredItems.map(item => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MenuPage;