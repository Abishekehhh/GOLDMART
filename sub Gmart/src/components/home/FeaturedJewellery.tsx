import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { JewelleryCard } from '@/components/jewellery/JewelleryCard';
import { jewelleryItems } from '@/data/mockData';

export function FeaturedJewellery() {
  const featured = jewelleryItems.slice(0, 4);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
              Featured Jewellery
            </h2>
            <p className="text-muted-foreground">
              Handpicked collections from our premium jewellers
            </p>
          </div>
          <Link to="/jewellery">
            <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Jewellery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item, index) => (
            <JewelleryCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
