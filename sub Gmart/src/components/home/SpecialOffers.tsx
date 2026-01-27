import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { jewelleryItems, formatPrice } from '@/data/mockData';
import { motion } from 'framer-motion';

export function SpecialOffers() {
  const specialOffers = jewelleryItems.filter((item) => item.isSpecialOffer);

  return (
    <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Limited Time</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Special Offers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exclusive deals on stunning gold jewellery. Don't miss these limited-time offers from our trusted jewellers.
          </p>
        </div>

        {/* Offers Showcase Box */}
        <div className="relative bg-gradient-to-r from-secondary via-secondary/90 to-secondary rounded-2xl p-8 md:p-12 overflow-hidden mb-8">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />

          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialOffers.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/jewellery/${item.id}`}>
                  <div className="bg-card/95 backdrop-blur rounded-xl overflow-hidden card-premium group">
                    {/* Image */}
                    <div className="relative aspect-square bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Discount Badge */}
                      <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                        <Percent className="h-3 w-3" />
                        {item.discount}% OFF
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-serif font-semibold text-foreground line-clamp-1 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">{item.shopName}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-primary">
                          {formatPrice(item.totalPrice * (1 - (item.discount || 0) / 100))}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(item.totalPrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/offers">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Offers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
