import HeroBanner from '../components/home/HeroBanner';
import ShopByCategory from '../components/home/ShopByCategory';
import BestSellers from '../components/home/BestSellers';
import OffersBundle from '../components/home/OffersBundle';
import ShopByCuts from '../components/home/ShopByCuts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import BlogSection from '../components/home/BlogSection';

// Removed: Testimonials (fake reviews), ShopByOrigin (fabricated sourcing data)
// These sections will return when real owner data is provided — see DATA_NEEDED.md

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ShopByCategory />
      <BestSellers />
      <OffersBundle />
      <ShopByCuts />
      <WhyChooseUs />
      <BlogSection />
    </>
  );
}
