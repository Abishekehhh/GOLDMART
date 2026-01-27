import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Star, Clock } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { JewelleryCard } from '@/components/jewellery/JewelleryCard';
import { Button } from '@/components/ui/button';
import { shops, jewelleryItems } from '@/data/mockData';
import { motion } from 'framer-motion';

export default function ShopDetails() {
  const { id } = useParams();
  const shop = shops.find((s) => s.id === id);
  const shopItems = jewelleryItems.filter((j) => j.shopId === id);

  if (!shop) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-serif font-bold text-foreground mb-4">
            Shop not found
          </h1>
          <Link to="/shops">
            <Button variant="outline" className="border-primary text-primary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shops
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Shop Header */}
      <section className="relative bg-gradient-to-b from-muted to-background py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Shop Avatar */}
            <div className="w-24 h-24 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-4xl font-bold text-primary">
                {shop.name.charAt(0)}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              {shop.name}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                <Star className="h-4 w-4 text-primary fill-primary" />
                <span className="font-semibold text-foreground">{shop.rating}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {shop.location}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                10:00 AM - 8:00 PM
              </div>
            </div>

            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              {shop.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${shop.phone}`}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Phone className="h-4 w-4 mr-2" />
                  {shop.phone}
                </Button>
              </a>
              <a href={`mailto:${shop.email}`}>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shop Jewellery */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-1">
                Jewellery Collection
              </h2>
              <p className="text-muted-foreground">
                {shopItems.length} items available
              </p>
            </div>
          </div>

          {shopItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {shopItems.map((item, index) => (
                <JewelleryCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-muted/50 rounded-xl">
              <p className="text-muted-foreground">
                No jewellery items available from this shop yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
