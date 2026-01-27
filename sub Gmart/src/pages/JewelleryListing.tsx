import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, Grid, List } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { JewelleryCard } from '@/components/jewellery/JewelleryCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { jewelleryItems, categories, shops } from '@/data/mockData';

export default function JewelleryListing() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedShop, setSelectedShop] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  const filteredItems = useMemo(() => {
    let items = [...jewelleryItems];

    // Filter by category
    if (selectedCategory !== 'All') {
      items = items.filter((item) => item.category === selectedCategory);
    }

    // Filter by shop
    if (selectedShop !== 'All') {
      items = items.filter((item) => item.shopId === selectedShop);
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.shopName.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        items.sort((a, b) => a.totalPrice - b.totalPrice);
        break;
      case 'price-high':
        items.sort((a, b) => b.totalPrice - a.totalPrice);
        break;
      case 'weight':
        items.sort((a, b) => b.weight - a.weight);
        break;
      default:
        break;
    }

    return items;
  }, [selectedCategory, selectedShop, sortBy, searchQuery]);

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-muted/30 py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            Gold Jewellery Collection
          </h1>
          <p className="text-muted-foreground">
            Explore our curated collection of {filteredItems.length} exquisite gold pieces
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-card border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Search */}
            <div className="flex-1 min-w-[200px]">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jewellery..."
                className="bg-muted border-border"
              />
            </div>

            {/* Category */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[160px] bg-muted border-border">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Shop */}
            <Select value={selectedShop} onValueChange={setSelectedShop}>
              <SelectTrigger className="w-[180px] bg-muted border-border">
                <SelectValue placeholder="All Shops" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Shops</SelectItem>
                {shops.map((shop) => (
                  <SelectItem key={shop.id} value={shop.id}>
                    {shop.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[160px] bg-muted border-border">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="weight">Weight</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Jewellery Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <JewelleryCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                No jewellery found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
