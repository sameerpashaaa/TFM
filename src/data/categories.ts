export interface SubCategory {
  name: string;
  slug: string;
}

export interface MenuSection {
  title: string;
  items: SubCategory[];
}

export interface NavCategory {
  label: string;
  slug: string;
  sections?: MenuSection[];
  subCategories?: SubCategory[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  { id: '1', slug: 'all-beef', name: 'All Beef', description: 'Premium grass-fed and Wagyu beef cuts delivered fresh across Tarneit & Melbourne.', icon: 'beef' },
  { id: '2', slug: 'all-lamb', name: 'All Lamb', description: 'Fresh Australian grass-fed lamb legs, racks, and chops.', icon: 'lamb' },
  { id: '3', slug: 'tfm-poultry', name: 'TFM Poultry', description: 'Farm-fresh Australian antibiotic-free chicken and gourmet poultry.', icon: 'poultry' },
  { id: '4', slug: 'whole-carcass', name: 'Whole Carcass', description: 'Full carcass orders for events and large family gatherings.', icon: 'carcass' },
  { id: '5', slug: 'box-collection', name: 'Box Collection', description: 'Curated value boxes with your favourite cuts bundled together.', icon: 'box' },
  { id: '6', slug: 'seasoned', name: 'Seasoned', description: 'Pre-marinated and seasoned meat ready to cook.', icon: 'seasoned' },
  { id: '7', slug: 'dry-aged-beef', name: 'Dry Aged Beef', description: 'Artisan dry-aged beef for the discerning palate.', icon: 'dry-aged-beef' },
  { id: '8', slug: 'dry-aged-lamb', name: 'Dry Aged Lamb', description: 'Premium dry-aged lamb with unmatched depth of flavour.', icon: 'dry-aged-lamb' },
  { id: '9', slug: 'beef', name: 'Beef Collections', description: 'All premium beef cuts including Wagyu, Angus, Ribeye, Striploin, and Mince.', icon: 'beef' },
  { id: '10', slug: 'lamb-mutton', name: 'Lamb & Mutton', description: 'Fresh grass-fed lamb legs, chops, racks, and barbecue cubes.', icon: 'lamb' },
  { id: '11', slug: 'poultry-camel', name: 'Poultry & Specialty', description: 'Farm fresh Australian chickens and specialty prime cuts.', icon: 'poultry' },
  { id: '12', slug: 'seasoned-sauce', name: 'Seasoned & Sauces', description: 'Pre-marinated steaks, seasoned meatballs, and signature barbecue sauces.', icon: 'seasoned' },
  { id: '13', slug: 'value-boxes', name: 'Value Boxes', description: 'Bundled meat boxes offering exceptional value for families and barbecues.', icon: 'box' },
  { id: '14', slug: 'explore-meat', name: 'Explore Meat', description: 'Artisan dry-aged cuts and whole carcass orders.', icon: 'carcass' },
  // ── Seasoned subcategories ───────────────────────────────────────────────────
  { id: 's1',  slug: 'seasoned-kofta',          name: 'Seasoned Kofta',                   description: 'House-seasoned kofta made from premium NZ beef and AUS lamb blend, ready to grill.', icon: 'seasoned' },
  { id: 's2',  slug: 'seasoned-meatballs',       name: 'Seasoned Meatballs',               description: 'Juicy house-seasoned meatballs made with premium Australian grass-fed beef.', icon: 'seasoned' },
  { id: 's3',  slug: 'seasoned-mishkak',         name: 'Seasoned Skewers',                 description: 'Marinated BBQ meat cubes seasoned in TFM house blend. Skewer-ready.', icon: 'seasoned' },
  { id: 's4',  slug: 'seasoned-sausages',        name: 'Seasoned Sausages',                description: 'Halal beef and lamb blend sausages seasoned with TFM signature spices.', icon: 'seasoned' },
  { id: 's5',  slug: 'seasoned-burgers',         name: 'Seasoned Burger Patties',          description: 'Premium seasoned beef burger patties marinated with TFM house blend.', icon: 'seasoned' },
  { id: 's6',  slug: 'seasoned-kebab',           name: 'Seasoned Meat Kebab',              description: 'Traditionally spiced meat kebab blend, shaped and ready for grilling.', icon: 'seasoned' },
  { id: 's7',  slug: 'seasoned-nz-beef-mishkak', name: 'Seasoned NZ Beef Skewers',         description: 'NZ grass-fed beef cubes in authentic Australian house seasoning.', icon: 'seasoned' },
  { id: 's8',  slug: 'seasoned-aus-lamb-mishkak',name: 'Seasoned AUS Lamb Skewers',        description: 'AUS grass-fed lamb cubes in classic Australian house seasoning.', icon: 'seasoned' },
  { id: 's9',  slug: 'seasoned-pepper-burger',   name: 'Seasoned Pepper Burger',           description: 'Beef patties seasoned with cracked black pepper and herbs.', icon: 'seasoned' },
  { id: 's10', slug: 'seasoned-chicken-mishkak', name: 'Seasoned Chicken Skewers',        description: 'Free-range chicken breast cubes in signature BBQ seasoning.', icon: 'seasoned' },
  { id: 's11', slug: 'seasoned-lamb-ribs',        name: 'Seasoned NZ Lamb Ribs',           description: 'NZ grass-fed lamb ribs marinated in TFM signature rub.', icon: 'seasoned' },
  { id: 's12', slug: 'seasoned-mix-mishkak',     name: 'Seasoned Mix Skewers',             description: 'Half NZ beef and half AUS lamb in signature seasoning.', icon: 'seasoned' },
  // ── Sauces ───────────────────────────────────────────────────────────────────
  { id: 'sa1', slug: 'tfm-sauce-bundle',         name: 'TFM Sauce Bundle',                 description: 'The complete TFM sauce collection — BBQ, Spicy, Signature & Creamy Dip in one bundle.', icon: 'seasoned' },
  { id: 'sa2', slug: 'tfm-bbq-sauce',            name: 'TFM BBQ Sauce',                   description: 'House-made smoky barbecue sauce with a rich, tangy finish.', icon: 'seasoned' },
  { id: 'sa3', slug: 'tfm-spicy-sauce',          name: 'TFM Spicy Sauce',                 description: 'Fiery house-made spicy chilli sauce for grilled meats and wraps.', icon: 'seasoned' },
  { id: 'sa4', slug: 'tfm-sohar-sauce',          name: 'TFM Signature Sauce',             description: 'Signature house spice blend inspired by premium butchery marinades.', icon: 'seasoned' },
  { id: 'sa5', slug: 'tfm-creamy-dip-sauce',     name: 'TFM Creamy Dip Sauce',            description: 'Velvety creamy dip sauce — pairs perfectly with grilled meats and kofta.', icon: 'seasoned' },
  // ── Nomu ─────────────────────────────────────────────────────────────────────
  { id: 'n1',  slug: 'nomu-rubs',                name: 'Nomu Rubs',                        description: 'Premium South African Nomu dry rubs — Braai, Steak, Chicken, and Lamb variants.', icon: 'seasoned' },
  { id: 'n2',  slug: 'nomu-grinders',            name: 'Nomu Grinders',                   description: 'Freshly grind whole spices directly onto your meat with Nomu grinders.', icon: 'seasoned' },
  { id: 'n3',  slug: 'nomu-gift-boxes',          name: 'Nomu Gift Boxes',                 description: 'Beautifully presented Nomu gift boxes — the perfect gift for any BBQ lover.', icon: 'seasoned' },
  { id: 'nr',  slug: 'mls-signature-rubs',       name: 'TFM Rubs & Sauces',               description: 'TFM signature rubs, Nomu artisan spices, and house-made sauces.', icon: 'seasoned' },
  // ── Meat Boxes ───────────────────────────────────────────────────────────────
  { id: 'b1',  slug: 'box-nz-lamb-chops-5kg',          name: 'NZ Lamb Chops Box 5kg',                    description: 'Bulk 5kg box of premium NZ grass-fed lamb chops.', icon: 'box' },
  { id: 'b2',  slug: 'box-indian-mutton-5kg',           name: 'Indian Mutton Bone-in Cubes Box 5kg',      description: 'Bulk 5kg box of Indian halal bone-in mutton cubes.', icon: 'box' },
  { id: 'b3',  slug: 'box-somali-beef-bone-in-5kg',     name: 'Local Somali Beef Bone-in Cubes Box 5kg', description: 'Bulk 5kg box of local Somali beef bone-in cubes.', icon: 'box' },
  { id: 'b4',  slug: 'box-nz-beef-40-burgers',          name: 'NZ Beef 40 Burgers Box',                  description: '40 freshly pressed NZ grass-fed beef burger patties in one mega box.', icon: 'box' },
  { id: 'b5',  slug: 'mince-boxes',                     name: 'NZ Beef Mince Box 5kg',                   description: 'Value 5kg box of premium NZ grass-fed beef mince.', icon: 'box' },
  { id: 'b6',  slug: 'box-nz-beef-mishkak-5kg',         name: 'NZ Beef Mishkak Box 5kg',                 description: 'Bulk 5kg box of premium NZ grass-fed beef Mishkak BBQ cubes.', icon: 'box' },
  { id: 'b7',  slug: 'box-nz-lamb-mishkak-5kg',         name: 'NZ Lamb Mishkak Cubes Box 5kg',           description: 'Bulk 5kg box of premium NZ grass-fed lamb Mishkak cubes.', icon: 'box' },
  { id: 'b8',  slug: 'box-nz-lamb-boneless-5kg',        name: 'NZ Lamb Boneless Cubes Box 5kg',          description: 'Bulk 5kg box of premium NZ grass-fed boneless lamb cubes.', icon: 'box' },
  { id: 'b9',  slug: 'box-nz-lamb-bone-in-5kg',         name: 'NZ Lamb Bone-in Cubes Box 5kg',           description: 'Bulk 5kg box of NZ grass-fed bone-in lamb cubes.', icon: 'box' },
  { id: 'b10', slug: 'box-tfm-beef-20-burgers',         name: 'TFM Beef 20 Burgers Box',                 description: '20 TFM premium NZ grass-fed beef burger patties.', icon: 'box' },
  { id: 'b11', slug: 'box-tfm-wagyu-16-burgers',        name: 'TFM Wagyu 16 Burgers Box',                description: '16 premium Australian Wagyu beef burger patties.', icon: 'box' },
  { id: 'b12', slug: 'box-somali-beef-mishkak-burger-3kg', name: 'Local Somali Beef Mishkak & Burger Box 3kg', description: '3kg combo — local Somali beef Mishkak cubes and burger patties.', icon: 'box' },
  { id: 'b13', slug: 'box-somali-beef-mince-3kg',       name: 'Local Somali Beef Mince Box 3kg',         description: '3kg box of freshly ground local Somali halal beef mince.', icon: 'box' },
  { id: 'b14', slug: 'box-somali-beef-16-burgers',      name: 'Local Somali Beef 16 Burgers Box',        description: '16 local Somali halal beef burger patties.', icon: 'box' },
  { id: 'b15', slug: 'box-camel-mishkak-5kg',           name: 'Camel Mishkak Box 5kg',                   description: 'Bulk 5kg box of local Omani camel Mishkak BBQ cubes.', icon: 'box' },
  { id: 'b16', slug: 'box-somali-beef-boneless-5kg',    name: 'Local Somali Beef Boneless Cubes Box 5kg',description: 'Bulk 5kg box of local Somali boneless beef cubes.', icon: 'box' },
  { id: 'b17', slug: 'box-chicken-breast-5kg',          name: 'Local Chicken Breast Box 5kg',            description: 'Bulk 5kg box of fresh local Omani chicken breasts.', icon: 'box' },
  // ── Festive Boxes ─────────────────────────────────────────────────────────────
  { id: 'f1',  slug: 'festive-prime-box',               name: 'Prime Box',                               description: 'Our most prestigious festive box — Wagyu, Black Angus, dry-aged cuts & sauces.', icon: 'box' },
  { id: 'f2',  slug: 'festive-signature-box',           name: 'Signature Box',                           description: 'NZ grass-fed beef and lamb cuts, TFM rubs, and BBQ sauce in a gift box.', icon: 'box' },
  { id: 'f3',  slug: 'festive-lamb-mishkak-chops',      name: 'TFM Lamb Mishkak & Chops Box',            description: 'Festive NZ lamb combo — Mishkak BBQ cubes paired with tender loin chops.', icon: 'box' },
  { id: 'f4',  slug: 'festive-aus-beef-mishkak-burger-3kg', name: 'AUS Beef Mishkak & Burger Box 3kg',  description: 'AUS grass-fed beef Mishkak cubes and burger patties in one festive 3kg combo.', icon: 'box' },
  { id: 'f5',  slug: 'festive-seasoned-chicken-2kg',    name: 'Seasoned Chicken Mishkak & Burger Box 2kg', description: 'Festive seasoned chicken Mishkak cubes and seasoned chicken burgers.', icon: 'box' },
  { id: 'f6',  slug: 'festive-seasoned-beef-2kg',       name: 'Seasoned Beef Kebabs, Meat Balls & Burger Box 2kg', description: 'Festive seasoned beef trio — kebabs, meatballs, and burger patties.', icon: 'box' },
  // ── BBQ / Party ──────────────────────────────────────────────────────────────
  { id: 'p1',  slug: 'bbq-party-boxes',                 name: 'BBQ Party Boxes',                         description: 'Large-quantity party boxes ideal for gatherings, events, and celebrations.', icon: 'box' },
  { id: 'p2',  slug: 'family-packs',                    name: 'Family Packs',                            description: 'Family-sized meat packs offering great value for weekly meal prep.', icon: 'box' },
];

export const navCategories: NavCategory[] = [
  {
    label: 'BEEF',
    slug: 'beef',
    sections: [
      {
        title: 'Shop By Cuts',
        items: [
          { name: 'Beef & All Sausages', slug: 'all-sausages' },
          { name: 'Beef Boneless Cubes', slug: 'beef-boneless-cubes' },
          { name: 'Beef Bone-In Cubes', slug: 'beef-bone-in-cubes' },
          { name: 'Beef Mince', slug: 'beef-mince' },
          { name: 'Beef Steak', slug: 'beef-steaks' },
          { name: 'Beef Ribs', slug: 'beef-ribs' },
          { name: 'Beef Brisket', slug: 'beef-brisket' },
          { name: 'Beef Roast', slug: 'beef-roast' },
          { name: 'Beef Stroganoff', slug: 'beef-stroganoff' },
          { name: 'Beef Burgers', slug: 'beef-burgers-patties' },
          { name: 'Beef Mishkak', slug: 'beef-mishkak-fondue' },
          { name: 'Beef Thin Slices', slug: 'beef-thin-slices' },
          { name: 'Dry Aged Beef', slug: 'dry-aged-beef' }
        ]
      },
      {
        title: 'Shop By Origin',
        items: [
          { name: 'South African Grass-fed Beef', slug: 'south-african-grass-fed-beef' },
          { name: 'Australian Grass-fed Beef', slug: 'australian-grass-fed-beef' },
          { name: 'New Zealand Grass-fed Beef', slug: 'new-zealand-grass-fed-beef' },
          { name: 'Brazilian Grass-fed Beef', slug: 'brazilian-grass-fed-beef' },
          { name: 'Australian Black Angus Beef', slug: 'australian-black-angus-beef' },
          { name: 'Australian Wagyu Beef', slug: 'australian-wagyu-beef' },
          { name: 'US Black Angus Beef', slug: 'us-choice-black-angus-beef' },
          { name: 'Local Somali Beef', slug: 'somali-beef' },
          { name: 'Pakistani Beef', slug: 'pakistani-beef' },
          { name: 'Japanese Wagyu Beef', slug: 'japanese-wagyu-beef' },
          { name: 'Local Salalah Beef', slug: 'local-salalah-beef' },
          { name: 'Seasoned Beef', slug: 'seasoned-beef' }
        ]
      },
      {
        title: 'AUS Wagyu',
        items: [
          { name: 'Australian Wagyu Beef MB 4/5', slug: 'australian-wagyu-beef-mb-4-5' },
          { name: 'Australian Wagyu Beef MB 6/7', slug: 'australian-wagyu-beef-mb-6-7' },
          { name: 'Australian Wagyu Beef MB 8/9', slug: 'australian-wagyu-beef-mb-8-9' }
        ]
      },
      {
        title: 'Shop Whole Cuts',
        items: [
          { name: 'Shop All Whole Cuts', slug: 'whole-cuts' },
          { name: 'Shop Boneless Beef Whole Cuts', slug: 'boneless-beef-whole-cuts' },
          { name: 'Shop Bone-In Beef Whole Cuts', slug: 'bone-in-beef-whole-cuts' },
          { name: 'Shop Beef Brisket Whole Cuts', slug: 'beef-brisket-whole-cuts' },
          { name: 'Shop Lamb Rack', slug: 'lamb-rack' },
          { name: 'Shop Lamb Boneless', slug: 'lamb-boneless' },
          { name: 'Shop Lamb Shoulder', slug: 'lamb-shoulder' },
          { name: 'Shop Lamb Leg', slug: 'lamb-leg' }
        ]
      }
    ]
  },
  {
    label: 'LAMB & MUTTON',
    slug: 'lamb-mutton',
    sections: [
      {
        title: 'Shop By Cut',
        items: [
          { name: 'Lamb & All Sausages', slug: 'lamb-all-sausages' },
          { name: 'Lamb Boneless Cubes', slug: 'lamb-boneless-cubes' },
          { name: 'Lamb Bone-In Cubes', slug: 'lamb-bone-in-cubes' },
          { name: 'Lamb Mince', slug: 'lamb-mince' },
          { name: 'Lamb Chops', slug: 'lamb-chops' },
          { name: 'Lamb Ribs', slug: 'lamb-ribs' },
          { name: 'Lamb Burgers', slug: 'lamb-burgers' },
          { name: 'Lamb Mishkak', slug: 'lamb-mishkak' },
          { name: 'Lamb Shanks', slug: 'lamb-shanks' },
          { name: 'Lamb Whole Carcass', slug: 'lamb-whole-carcass' },
          { name: 'Lamb Leg', slug: 'lamb-leg' },
          { name: 'Lamb Shoulder', slug: 'lamb-shoulder' },
          { name: 'Dry Aged Lamb', slug: 'dry-aged-lamb' }
        ]
      },
      {
        title: 'Shop By Origin',
        items: [
          { name: 'Freshly Slaughtered Local Omani Lamb', slug: 'freshly-slaughtered-local-omani-lamb' },
          { name: 'Freshly Slaughtered Australian Lamb', slug: 'freshly-slaughtered-australian-lamb' },
          { name: 'Australian Grass-Fed Lamb', slug: 'aus-grass-fed-lamb' },
          { name: 'New Zealand Grass-Fed Lamb', slug: 'nz-grass-fed-lamb' },
          { name: 'Somali Lamb', slug: 'somali-lamb' },
          { name: 'Australian Mutton', slug: 'australian-mutton' },
          { name: 'Pakistani Mutton', slug: 'pakistani-mutton' },
          { name: 'Indian Mutton', slug: 'indian-mutton' },
          { name: 'Seasoned Lamb', slug: 'seasoned-lamb' }
        ]
      }
    ]
  },
  {
    label: 'POULTRY & CAMEL',
    slug: 'poultry-camel',
    subCategories: [
      { name: 'All Poultry & Camel', slug: 'mls-poultry' },
      { name: 'Fresh Whole Chicken', slug: 'whole-chicken' },
      { name: 'Chicken Breasts & Drumsticks', slug: 'chicken-cuts' },
      { name: 'Local Camel Meat', slug: 'camel-meat' },
    ]
  },
  {
    label: 'SEASONED & SAUCE',
    slug: 'seasoned-sauce',
    sections: [
      {
        title: 'Shop Seasoned',
        items: [
          { name: 'Seasoned Kofta – 500g', slug: 'seasoned-kofta' },
          { name: 'Seasoned Meatball – 500g', slug: 'seasoned-meatballs' },
          { name: 'Seasoned Mishkak – 500g', slug: 'seasoned-mishkak' },
          { name: 'Seasoned Sausages – 500g', slug: 'seasoned-sausages' },
          { name: 'Seasoned Burger 125g x 4', slug: 'seasoned-burgers' },
          { name: 'Seasoned Meat Kebab – 500g', slug: 'seasoned-kebab' },
          { name: 'Seasoned NZ Beef Mishkak – Local Style', slug: 'seasoned-nz-beef-mishkak' },
          { name: 'Seasoned AUS Lamb Mishkak – Local Style', slug: 'seasoned-aus-lamb-mishkak' },
          { name: 'Seasoned Pepper Burger 125g x 2', slug: 'seasoned-pepper-burger' },
          { name: 'Seasoned Omani Chicken Mishkak', slug: 'seasoned-chicken-mishkak' },
          { name: 'Seasoned NZ Lamb Ribs – Standard Chops 1kg', slug: 'seasoned-lamb-ribs' },
          { name: 'Seasoned Mix NZ Beef & AUS Lamb Mishkak', slug: 'seasoned-mix-mishkak' },
        ]
      },
      {
        title: 'Shop Sauce',
        items: [
          { name: 'TFM Sauce Bundle', slug: 'tfm-sauce-bundle' },
          { name: 'TFM BBQ Sauce', slug: 'tfm-bbq-sauce' },
          { name: 'TFM Spicy Sauce', slug: 'tfm-spicy-sauce' },
          { name: 'TFM Sohar Sauce', slug: 'tfm-sohar-sauce' },
          { name: 'TFM Creamy Dip Sauce', slug: 'tfm-creamy-dip-sauce' },
        ]
      },
      {
        title: 'Shop Nomu Rubs & Grinders',
        items: [
          { name: 'Nomu Rubs', slug: 'nomu-rubs' },
          { name: 'Nomu Grinders', slug: 'nomu-grinders' },
          { name: 'Nomu Gift Boxes', slug: 'nomu-gift-boxes' },
        ]
      },
    ]
  },
  {
    label: 'VALUE BOXES',
    slug: 'value-boxes',
    sections: [
      {
        title: 'Shop All Meat Boxes',
        items: [
          { name: 'NZ Lamb Chops Box 5kg', slug: 'box-nz-lamb-chops-5kg' },
          { name: 'Indian Mutton Bone-in Cubes Box 5kg', slug: 'box-indian-mutton-5kg' },
          { name: 'Local Somali Beef Bone-in Cubes Box 5kg', slug: 'box-somali-beef-bone-in-5kg' },
          { name: 'NZ Beef 40 Burgers Box', slug: 'box-nz-beef-40-burgers' },
          { name: 'NZ Beef Mince Box 5kg', slug: 'mince-boxes' },
          { name: 'NZ Beef Mishkak Box 5kg', slug: 'box-nz-beef-mishkak-5kg' },
          { name: 'NZ Lamb Mishkak Cubes Box 5kg', slug: 'box-nz-lamb-mishkak-5kg' },
          { name: 'NZ Lamb Boneless Cubes Box 5kg', slug: 'box-nz-lamb-boneless-5kg' },
          { name: 'NZ Lamb Bone-in Cubes Box 5kg', slug: 'box-nz-lamb-bone-in-5kg' },
          { name: 'TFM Beef 20 Burgers Box', slug: 'box-tfm-beef-20-burgers' },
          { name: 'TFM Wagyu 16 Burgers Box', slug: 'box-tfm-wagyu-16-burgers' },
          { name: 'Local Somali Beef Mishkak & Burger Box 3kg', slug: 'box-somali-beef-mishkak-burger-3kg' },
          { name: 'Local Somali Beef Mince Box 3kg', slug: 'box-somali-beef-mince-3kg' },
          { name: 'Local Somali Beef 16 Burgers Box', slug: 'box-somali-beef-16-burgers' },
          { name: 'Camel Mishkak Box 5kg', slug: 'box-camel-mishkak-5kg' },
          { name: 'Local Somali Beef Boneless Cubes Box 5kg', slug: 'box-somali-beef-boneless-5kg' },
          { name: 'Local Chicken Breast Box 5kg', slug: 'box-chicken-breast-5kg' },
        ]
      },
      {
        title: 'Shop Festive Boxes',
        items: [
          { name: 'Prime Box', slug: 'festive-prime-box' },
          { name: 'Signature Box', slug: 'festive-signature-box' },
          { name: 'TFM Lamb Mishkak & Chops Box', slug: 'festive-lamb-mishkak-chops' },
          { name: 'AUS Beef Mishkak & Burger Box 3kg', slug: 'festive-aus-beef-mishkak-burger-3kg' },
          { name: 'Seasoned Chicken Mishkak & Burger Box 2kg', slug: 'festive-seasoned-chicken-2kg' },
          { name: 'Seasoned Beef Kebabs, Meat Balls & Burger Box 2kg', slug: 'festive-seasoned-beef-2kg' },
        ]
      },
    ]
  },
  {
    label: 'EXPLORE MEAT',
    slug: 'explore-meat',
    subCategories: [
      { name: 'All Speciality Meat', slug: 'explore-meat' },
      { name: 'Dry Aged Beef', slug: 'dry-aged-beef' },
      { name: 'Dry Aged Lamb', slug: 'dry-aged-lamb' },
      { name: 'Whole Carcass Orders', slug: 'whole-carcass' },
    ]
  }
];

export const origins = {
  beef: ['AUS Grass-Fed Beef', 'Australian Black Angus Beef', 'Australian Wagyu Beef', 'NZ Grass-Fed Beef', 'South African Grass-Fed Beef', 'Japanese A5 Wagyu Beef', 'US Black Angus Beef', 'Brazilian Grass-Fed Beef'],
  lamb: ['NZ Grass-Fed Lamb', 'Australian Grass-Fed Lamb', 'Omani Lamb', 'South African Lamb'],
  ostrich: ['South African Ostrich', 'Namibian Ostrich'],
  venison: ['NZ Venison', 'Scottish Venison'],
};

export const cuts = ['Steaks', 'Mince', 'Bone in Cubes', 'Mishkak Barbecue Cubes', 'Boneless Cubes', 'Lamb Chops', 'Ribs', 'Burgers', 'Beef Roast', 'Shanks', 'Whole Carcass'];
