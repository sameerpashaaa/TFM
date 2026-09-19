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
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    excerpt: 'Looking for the best place to buy fresh halal meat in Muscat? TFM delivers premium cuts to your door within 1 hour.',
  },
  {
    id: '2', slug: 'halal-meat-shop-oman',
    title: 'Halal Meat Shop in Oman | Fresh & Organic Meat Delivery',
    date: '9 Apr 2026',
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    excerpt: 'Discover TFM – Oman\'s leading online halal butcher delivering fresh organic meat directly from world-class farms.',
  },
  {
    id: '3', slug: 'buy-fresh-halal-meat-online-oman',
    title: 'Buy Fresh Halal Meat Online in Oman | Beef, Lamb & Chicken',
    date: '7 Apr 2026',
    image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    excerpt: 'Order fresh halal beef, lamb and chicken online in Oman. Fast delivery across Muscat with free returns guaranteed.',
  },
  {
    id: '4', slug: 'benefits-ordering-fresh-meat-online-muscat',
    title: 'The Benefits of Ordering Fresh Meat Online in Muscat',
    date: '29 Aug 2025',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    excerpt: 'Why more Muscat families are switching to online meat ordering — convenience, freshness, and quality guaranteed.',
  },
];
