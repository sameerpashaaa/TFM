-- Seed script for Tarneit Fresh Meat (PostgreSQL)
-- Standardized to AUD ($ AUD) pricing and Australian sourcing

INSERT INTO categories (id, slug, name, description, icon) VALUES
('1', 'beef', 'Beef Collections', 'All premium beef cuts including Wagyu, Angus, Ribeye, Striploin, and Mince.', 'beef'),
('2', 'lamb-mutton', 'Lamb & Mutton', 'Fresh Australian grass-fed lamb legs, chops, racks, shanks, and skewers.', 'lamb'),
('3', 'poultry-camel', 'Poultry & Specialty', 'Farm-fresh Australian free-range chicken and specialty cuts.', 'poultry'),
('4', 'seasoned-sauce', 'Seasoned & Sauces', 'Pre-marinated steaks, seasoned burgers, and signature barbecue sauces.', 'seasoned'),
('5', 'value-boxes', 'Value Boxes', 'Bundled meat boxes offering exceptional value for families and barbecues.', 'box'),
('6', 'explore-meat', 'Explore Meat', 'Artisan dry-aged cuts and whole carcass orders.', 'carcass'),
('7', 'lamb-all-sausages', 'Lamb & All Sausages', 'Gourmet lamb and mixed sausages.', 'seasoned'),
('8', 'lamb-boneless-cubes', 'Lamb Boneless Cubes', 'Tender boneless lamb cubes for stews and curries.', 'lamb'),
('9', 'lamb-bone-in-cubes', 'Lamb Bone-In Cubes', 'Flavourful bone-in lamb cubes.', 'lamb'),
('10', 'lamb-mince', 'Lamb Mince', 'Fresh lean grass-fed lamb mince.', 'lamb'),
('11', 'lamb-chops', 'Lamb Chops', 'Fresh Victorian lamb loin and rib chops.', 'lamb'),
('12', 'lamb-ribs', 'Lamb Ribs', 'Juicy marinated lamb ribs.', 'lamb'),
('13', 'lamb-burgers', 'Lamb Burgers', 'Gourmet seasoned lamb patties.', 'seasoned'),
('14', 'lamb-mishkak', 'Lamb Skewers', 'Marinated lamb BBQ skewers.', 'seasoned'),
('15', 'lamb-shanks', 'Lamb Shanks', 'Slow-roast lamb shanks.', 'lamb'),
('16', 'lamb-whole-carcass', 'Lamb Whole Carcass', 'Whole Australian lamb carcass.', 'carcass'),
('17', 'lamb-leg', 'Lamb Leg', 'Whole and sliced Australian lamb leg.', 'lamb'),
('18', 'lamb-shoulder', 'Lamb Shoulder', 'Bone-in and boneless lamb shoulder.', 'lamb'),
('19', 'dry-aged-lamb', 'Dry Aged Lamb', 'Artisan dry-aged lamb cuts.', 'dry-aged-lamb'),
('20', 'freshly-slaughtered-australian-lamb', 'Fresh Australian Lamb', '100% Australian grass-fed lamb.', 'lamb'),
('21', 'aus-grass-fed-lamb', 'Australian Grass-Fed Lamb', 'Victorian pasture-raised lamb.', 'lamb'),
('22', 'nz-grass-fed-lamb', 'New Zealand Grass-Fed Lamb', 'NZ grass-fed lamb cuts.', 'lamb'),
('23', 'australian-mutton', 'Australian Mutton', 'Traditional Australian mutton cuts.', 'lamb'),
('24', 'seasoned-lamb', 'Seasoned Lamb', 'Pre-marinated gourmet lamb.', 'seasoned')
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description;

INSERT INTO products (id, slug, name, category, origin, cut, price, original_price, rating, review_count, in_stock, image, description, weight, badge) VALUES
('p1', 'aus-wagyu-ribeye-mbs7', 'Australian Wagyu Ribeye Steak (MB 6/7)', 'beef', 'Australia', 'Ribeye', 68.50, 78.00, 5.0, 48, true, '/images/tfm_wagyu_ribeye.jpg', 'Mouthwatering Marble Score 6/7 Australian Wagyu Ribeye. Intensely marbled, juicy, and buttery smooth.', '300g / steak', 'WAGYU BESTSELLER'),
('p2', 'grass-fed-black-angus-striploin', 'Grass-Fed Black Angus Striploin', 'beef', 'Australia', 'Striploin', 38.99, 44.00, 4.9, 34, true, 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80', '100% Australian grass-fed Black Angus sirloin steak with rich natural beef flavor.', '500g', 'POPULAR'),
('p3', 'aus-grass-fed-lamb-chops', 'Australian Grass-Fed Lamb Loin Chops', 'lamb-chops', 'Australia', 'Chops', 32.50, 36.00, 4.9, 56, true, 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80', 'Fresh Victorian lamb loin chops. Succulent and quick to grill for family dinners.', '1 kg', 'BEST SELLER'),
('p4', 'aus-grass-fed-lamb-french-rack', 'Australian Grass-Fed Lamb French Cut Rack', 'lamb-mutton', 'Australia', 'Rack', 48.00, 55.00, 4.9, 42, true, 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', 'Frenched lamb rack trimmed to perfection. Succulent and tender, ideal for roasting with garlic and rosemary.', '700g', 'PREMIUM RACK'),
('p5', 'aus-lamb-shanks-slow-cook', 'Australian Grass-Fed Lamb Shanks', 'lamb-shanks', 'Australia', 'Shanks', 28.50, 32.00, 4.8, 29, true, 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', 'Meaty Australian lamb shanks, perfect for slow braising with red wine and root vegetables.', '2 pcs (approx 900g)', 'SLOW COOK FAVOURITE'),
('p6', 'seasoned-bbq-lamb-skewers', 'House Seasoned Lamb Skewers', 'lamb-mishkak', 'Australia', 'Skewers', 24.99, 28.50, 4.9, 61, true, 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', 'Signature spiced Australian lamb skewers ready for charcoal grilling.', '1 kg (10 Skewers)', 'READY TO GRILL'),
('p7', 'aus-grass-fed-lamb-mince', 'Australian Grass-Fed Lean Lamb Mince', 'lamb-mince', 'Australia', 'Mince', 22.00, 25.00, 4.8, 38, true, 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80', 'Fresh ground Australian grass-fed lamb mince. Ideal for burgers, kofta, and shepherd pie.', '500g', 'FRESH GROUND'),
('p8', 'fresh-whole-free-range-chicken', 'Fresh Whole Free-Range Australian Chicken', 'poultry-camel', 'Australia', 'Whole Bird', 14.99, 17.50, 4.7, 22, true, 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80', '100% free-range Australian chicken, hormone-free and farm fresh. Perfect for Sunday roasts.', '1.3 kg', 'FARM FRESH'),
('p9', 'artisan-lamb-sausages-rosemary', 'Artisan Lamb Sausages with Rosemary & Mint', 'lamb-all-sausages', 'Australia', 'Sausages', 19.99, 23.00, 4.9, 41, true, 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', 'Handcrafted Australian lamb sausages seasoned with fresh rosemary, sea salt, and mint.', '1 kg', 'ARTISAN SPECIAL'),
('p10', 'aus-grass-fed-bone-in-lamb-leg', 'Australian Grass-Fed Bone-in Lamb Leg', 'lamb-leg', 'Australia', 'Whole Leg', 34.50, 39.00, 4.9, 49, true, 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', 'Whole Australian grass-fed lamb leg trimmed and ready for slow oven roast.', '2.5kg+', 'ROAST FAVOURITE')
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, category=EXCLUDED.category, price=EXCLUDED.price, image=EXCLUDED.image;
