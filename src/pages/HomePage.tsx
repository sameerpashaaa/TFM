import HeroBanner from '../components/home/HeroBanner';
import ShopByCategory from '../components/home/ShopByCategory';
import Testimonials from '../components/home/Testimonials';
import BestSellers from '../components/home/BestSellers';
import ShopByOrigin from '../components/home/ShopByOrigin';
import ShopByCuts from '../components/home/ShopByCuts';
import BlogSection from '../components/home/BlogSection';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ShopByCategory />
      <Testimonials />
      <BestSellers />
      <ShopByOrigin />
      <ShopByCuts />
      <BlogSection />
    </>
  );
}
