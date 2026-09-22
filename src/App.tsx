import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ProductPage from './pages/ProductPage';
import ReviewsPage from './pages/ReviewsPage';
import RewardsPage from './pages/RewardsPage';
import ReferPage from './pages/ReferPage';
import AffiliatePage from './pages/AffiliatePage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import FAQsPage from './pages/FAQsPage';
import ContactPage from './pages/ContactPage';
import LocationsPage from './pages/LocationsPage';
import BlogsPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';
import DeliveryPage from './pages/DeliveryPage';
import ReturnsPage from './pages/ReturnsPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <CartProvider>
      <Router>
        {/* padding-bottom for mobile sticky bar (80px safe area) */}
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <AnnouncementBar />
          <Header />
          <Navbar />
          <main style={{ flex: 1, paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/collections/:slug" element={<CollectionPage />} />
              <Route path="/products/:slug" element={<ProductPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/rewards" element={<RewardsPage />} />
              <Route path="/refer" element={<ReferPage />} />
              <Route path="/affiliate" element={<AffiliatePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/faqs" element={<FAQsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blogs/:slug" element={<BlogPostPage />} />
              {/* New pages required by footer links */}
              <Route path="/delivery" element={<DeliveryPage />} />
              <Route path="/returns" element={<ReturnsPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              {/* Real 404 — previously redirected to HomePage (T1.3) */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}
