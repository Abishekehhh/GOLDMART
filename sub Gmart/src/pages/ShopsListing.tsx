import { Link } from 'react-router-dom';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { shops, jewelleryItems } from '@/data/mockData';
import { motion } from 'framer-motion';

export default function ShopsListing() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-muted/30 py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            Trusted Jewellery Shops
          </h1>
          <p className="text-muted-foreground">
            Discover verified jewellers with authentic gold collections across India
          </p>
        </div>
      </section>

      {/* Shops Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shops.map((shop, index) => {
              const shopItems = jewelleryItems.filter((j) => j.shopId === shop.id);

              return (
                <motion.div
                  key={shop.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-card rounded-xl overflow-hidden card-premium">
                    <div className="grid md:grid-cols-2">
                      {/* Shop Image */}
                      <div className="relative aspect-video md:aspect-auto bg-muted">
                        <img
                          src={shop.image}
                          alt={shop.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                          <Star className="h-4 w-4 text-primary fill-primary" />
                          <span className="font-semibold">{shop.rating}</span>
                        </div>
                      </div>

                      {/* Shop Info */}
                      <div className="p-6 flex flex-col">
                        <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                          {shop.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <MapPin className="h-4 w-4" />
                          {shop.location}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                          {shop.description}
                        </p>

                        {/* Items Preview */}
                        <div className="flex -space-x-2 mb-4">
                          {shopItems.slice(0, 4).map((item) => (
                            <div
                              key={item.id}
                              className="w-10 h-10 rounded-full border-2 border-card bg-muted overflow-hidden"
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                          {shopItems.length > 4 && (
                            <div className="w-10 h-10 rounded-full border-2 border-card bg-primary flex items-center justify-center">
                              <span className="text-xs font-semibold text-primary-foreground">
                                +{shopItems.length - 4}
                              </span>
                            </div>
                          )}
                        </div>

                        <Link to={`/shops/${shop.id}`}>
                          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            View Collection
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
