export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export const blogs: BlogPost[] = [
  {
    id: '1', slug: 'where-to-buy-fresh-halal-meat-muscat',
    title: 'Where to Buy Fresh Halal Meat in Muscat',
    date: '14 Apr 2026',
    // Butcher counter / fresh meat display
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    excerpt: 'Looking for the best place to buy fresh halal meat in Muscat? TFM delivers premium cuts to your door within 1 hour.',
  },
  {
    id: '2', slug: 'halal-meat-shop-oman',
    title: 'Halal Meat Shop in Oman | Fresh & Organic Meat Delivery',
    date: '9 Apr 2026',
    // Raw red meat on wooden board
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    excerpt: 'Discover TFM – Oman\'s leading online halal butcher delivering fresh organic meat directly from world-class farms.',
  },
  {
    id: '3', slug: 'buy-fresh-halal-meat-online-oman',
    title: 'Buy Fresh Halal Meat Online in Oman | Beef, Lamb & Chicken',
    date: '7 Apr 2026',
    // Premium beef steak close-up
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    excerpt: 'Order fresh halal beef, lamb and chicken online in Oman. Fast delivery across Muscat with free returns guaranteed.',
  },
  {
    id: '4', slug: 'benefits-ordering-fresh-meat-online-muscat',
    title: 'The Benefits of Ordering Fresh Meat Online in Muscat',
    date: '29 Aug 2025',
    // Delivery / food package concept
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    excerpt: 'Why more Muscat families are switching to online meat ordering — convenience, freshness, and quality guaranteed.',
  },
];
