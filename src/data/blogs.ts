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
    id: '1', slug: 'where-to-buy-fresh-halal-meat-melbourne',
    title: 'Where to Buy Fresh Halal Meat in Melbourne',
    date: '14 Apr 2026',
    image: '/images/blog-1.jpg',
    excerpt: 'Looking for the best place to buy fresh halal meat in Melbourne? TFM delivers premium cuts to your door within 1 hour.',
  },
  {
    id: '2', slug: 'halal-meat-shop-australia',
    title: 'Halal Meat Shop in Tarneit | Fresh & Organic Meat Delivery',
    date: '9 Apr 2026',
    image: '/images/blog-2.jpg',
    excerpt: 'Discover TFM – Tarneit\'s leading online halal butcher delivering fresh organic meat directly from world-class farms.',
  },
  {
    id: '3', slug: 'buy-fresh-halal-meat-online-melbourne',
    title: 'Buy Fresh Halal Meat Online in Melbourne | Beef, Lamb & Chicken',
    date: '7 Apr 2026',
    image: '/images/blog-3.jpg',
    excerpt: 'Order fresh halal beef, lamb and chicken online in Melbourne. Fast delivery across the western suburbs with free returns guaranteed.',
  },
  {
    id: '4', slug: 'benefits-ordering-fresh-meat-online-melbourne',
    title: 'The Benefits of Ordering Fresh Meat Online in Melbourne',
    date: '29 Aug 2025',
    image: '/images/blog-4.jpg',
    excerpt: 'Why more Melbourne families are switching to online meat ordering — convenience, freshness, and quality guaranteed.',
  },
];

