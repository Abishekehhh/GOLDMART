import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories } from '@/data/mockData';

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/jewellery?search=${searchQuery}&category=${selectedCategory}`);
  };

  return (
    <section className="py-8 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jewellery by name, shop, or style..."
              className="pl-12 h-12 bg-card border-border focus:border-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.slice(0, 5).map((category) => (
              <Button
                key={category}
                type="button"
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border-border text-foreground hover:border-primary hover:text-primary'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Search Button */}
          <Button type="submit" className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
      </div>
    </section>
  );
}
