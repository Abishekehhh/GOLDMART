import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted by 500+ Shops</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              Discover{' '}
              <span className="gold-text">Exquisite Gold</span>{' '}
              Jewellery
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Connect with trusted local jewellers and explore authentic gold jewellery collections. 
              From traditional temple designs to contemporary styles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/jewellery">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/shops">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                  View Shops
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {[
                { value: '500+', label: 'Verified Shops' },
                { value: '10K+', label: 'Jewellery Items' },
                { value: '50K+', label: 'Happy Customers' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-serif font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent animate-float" />
              
              {/* Jewelry Display */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cream to-ivory shadow-hover flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="h-16 w-16 text-primary" />
                  </div>
                  <p className="font-serif text-xl text-foreground">Premium Gold</p>
                  <p className="text-sm text-muted-foreground">22K & 24K Certified</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-4 top-1/4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">Today's Rate</div>
                <div className="text-lg font-bold">₹5,730/g</div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -left-4 bottom-1/4 bg-card text-card-foreground px-4 py-2 rounded-lg shadow-lg border border-primary/20">
                <div className="text-sm font-semibold text-primary">BIS Hallmark</div>
                <div className="text-xs text-muted-foreground">100% Certified</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
