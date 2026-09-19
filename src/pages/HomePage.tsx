import HeroBanner from '../components/home/HeroBanner';
import ShopByCategory from '../components/home/ShopByCategory';
import BestSellers from '../components/home/BestSellers';
import OffersBundle from '../components/home/OffersBundle';
import ShopByCuts from '../components/home/ShopByCuts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ShopByOrigin from '../components/home/ShopByOrigin';
import Testimonials from '../components/home/Testimonials';
import BlogSection from '../components/home/BlogSection';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ShopByCategory />
      <BestSellers />
      <OffersBundle />
      <ShopByCuts />
      <WhyChooseUs />
      <ShopByOrigin />
      <Testimonials />
      <BlogSection />
    </>
  );
}
