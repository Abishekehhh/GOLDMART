import { Sparkles, Percent } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { JewelleryCard } from '@/components/jewellery/JewelleryCard';
import { jewelleryItems } from '@/data/mockData';

export default function SpecialOffers() {
  const specialOffers = jewelleryItems.filter((item) => item.isSpecialOffer);

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-secondary via-secondary/90 to-secondary py-12 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Limited Time Only</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-secondary-foreground mb-4">
            Special Offers
          </h1>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Exclusive discounts on premium gold jewellery. Grab these deals before they're gone!
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          {specialOffers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {specialOffers.map((item, index) => (
                <JewelleryCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-muted/50 rounded-xl">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                No special offers right now
              </h3>
              <p className="text-muted-foreground">
                Check back soon for exclusive deals!
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
