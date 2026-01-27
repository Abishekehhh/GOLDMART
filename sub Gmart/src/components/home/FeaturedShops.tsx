import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { shops } from '@/data/mockData';
import { motion } from 'framer-motion';

export function FeaturedShops() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
              Trusted Jewellery Shops
            </h2>
            <p className="text-muted-foreground">
              Verified and certified jewellers across India
            </p>
          </div>
          <Link to="/shops">
            <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
              View All Shops
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Shops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shops.map((shop, index) => (
            <motion.div
              key={shop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/shops/${shop.id}`}>
                <div className="bg-card rounded-xl overflow-hidden card-premium group h-full">
                  {/* Image */}
                  <div className="relative aspect-video bg-muted">
                    <img
                      src={shop.image}
                      alt={shop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 bg-card/90 backdrop-blur px-2 py-1 rounded-md flex items-center gap-1">
                      <Star className="h-3 w-3 text-primary fill-primary" />
                      <span className="text-sm font-semibold">{shop.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {shop.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4" />
                      {shop.location}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {shop.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
