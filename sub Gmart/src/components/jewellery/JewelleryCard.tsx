import { Link } from 'react-router-dom';
import { Eye, Scale, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Jewellery, formatPrice } from '@/data/mockData';
import { motion } from 'framer-motion';

interface JewelleryCardProps {
  item: Jewellery;
  index?: number;
}

export function JewelleryCard({ item, index = 0 }: JewelleryCardProps) {
  const finalPrice = item.isSpecialOffer && item.discount
    ? item.totalPrice * (1 - item.discount / 100)
    : item.totalPrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="bg-card rounded-xl overflow-hidden card-premium group h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-square bg-muted">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3 bg-card/90 backdrop-blur px-3 py-1 rounded-full">
            <span className="text-xs font-medium text-foreground">{item.category}</span>
          </div>

          {/* Discount Badge */}
          {item.isSpecialOffer && item.discount && (
            <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
              <Percent className="h-3 w-3" />
              {item.discount}% OFF
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link to={`/jewellery/${item.id}`}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-serif font-semibold text-foreground line-clamp-1 mb-1 group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          
          <Link to={`/shops/${item.shopId}`} className="text-sm text-primary hover:underline mb-3">
            {item.shopName}
          </Link>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Scale className="h-4 w-4" />
            <span>{item.weight}g</span>
            <span className="text-border">•</span>
            <span>{item.purity}</span>
          </div>

          <div className="mt-auto flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">
              {formatPrice(finalPrice)}
            </span>
            {item.isSpecialOffer && item.discount && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(item.totalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
