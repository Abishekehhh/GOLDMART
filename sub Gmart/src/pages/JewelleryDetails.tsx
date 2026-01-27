import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Scale, Star, Shield, Percent } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { jewelleryItems, shops, formatPrice } from '@/data/mockData';
import { motion } from 'framer-motion';

export default function JewelleryDetails() {
  const { id } = useParams();
  const item = jewelleryItems.find((j) => j.id === id);
  const shop = item ? shops.find((s) => s.id === item.shopId) : null;

  if (!item || !shop) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-serif font-bold text-foreground mb-4">
            Jewellery not found
          </h1>
          <Link to="/jewellery">
            <Button variant="outline" className="border-primary text-primary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Collection
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const finalPrice = item.isSpecialOffer && item.discount
    ? item.totalPrice * (1 - item.discount / 100)
    : item.totalPrice;

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-muted/30 py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/jewellery" className="text-muted-foreground hover:text-primary">
              Jewellery
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{item.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square bg-muted rounded-xl overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.isSpecialOffer && item.discount && (
                  <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-1">
                    <Percent className="h-4 w-4" />
                    {item.discount}% OFF
                  </div>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-3">
                {item.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-20 h-20 rounded-lg overflow-hidden bg-muted border-2 border-primary cursor-pointer"
                  >
                    <img src={img} alt={`${item.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-medium text-primary">{item.category}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                {item.name}
              </h1>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Price Breakdown */}
              <div className="bg-muted/50 rounded-xl p-6 mb-6">
                <h3 className="font-serif font-semibold text-foreground mb-4">Price Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weight</span>
                    <span className="font-medium">{item.weight}g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Gold Price ({item.purity})</span>
                    <span className="font-medium">{formatPrice(item.pricePerGram)}/g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Gold Value</span>
                    <span className="font-medium">{formatPrice(item.weight * item.pricePerGram)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Making Charge</span>
                    <span className="font-medium">{formatPrice(item.makingCharge)}</span>
                  </div>
                  {item.isSpecialOffer && item.discount && (
                    <div className="flex justify-between text-destructive">
                      <span>Discount ({item.discount}%)</span>
                      <span className="font-medium">-{formatPrice(item.totalPrice * item.discount / 100)}</span>
                    </div>
                  )}
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-semibold text-foreground">Total Price</span>
                    <span className="text-2xl font-bold text-primary">{formatPrice(finalPrice)}</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">BIS Hallmark</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{item.purity} Purity</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <Scale className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{item.weight}g Weight</span>
                </div>
              </div>

              {/* Shop Info */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif font-semibold text-foreground mb-1">
                      {shop.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {shop.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                    <Star className="h-4 w-4 text-primary fill-primary" />
                    <span className="text-sm font-semibold">{shop.rating}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${shop.phone}`} className="flex-1">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Shop
                    </Button>
                  </a>
                  <Link to={`/shops/${shop.id}`} className="flex-1">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                      View Shop
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
