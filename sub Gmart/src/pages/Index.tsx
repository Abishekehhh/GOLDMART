import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { SpecialOffers } from '@/components/home/SpecialOffers';
import { FeaturedJewellery } from '@/components/home/FeaturedJewellery';
import { FeaturedShops } from '@/components/home/FeaturedShops';
import { SearchSection } from '@/components/home/SearchSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SearchSection />
      <SpecialOffers />
      <FeaturedJewellery />
      <FeaturedShops />
    </Layout>
  );
};

export default Index;
