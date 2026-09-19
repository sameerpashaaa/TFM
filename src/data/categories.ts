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
  { id: '1',  slug: 'chicken',              name: 'Chicken',              description: 'Fresh chicken cuts including breast fillets, drumsticks, wings, Maryland and whole chickens.', icon: 'poultry' },
  { id: '2',  slug: 'goat',                 name: 'Goat',                 description: 'Fresh goat cuts including leg, shoulder, curry pieces, mince and boneless.', icon: 'lamb' },
  { id: '3',  slug: 'lamb',                 name: 'Lamb',                 description: 'Premium lamb cuts including leg, shoulder, cutlets, shanks, backstrap and more.', icon: 'lamb' },
  { id: '4',  slug: 'beef',                 name: 'Beef',                 description: 'Quality beef cuts including steaks, roast, mince, brisket, T-bone and specialty cuts.', icon: 'beef' },
  { id: '5',  slug: 'fish',                 name: 'Fish',                 description: 'Fresh fish including Rohu, Basa, Barramundi, Pomfret and Tilapia – whole, steaks and fillets.', icon: 'seasoned' },
  { id: '6',  slug: 'pet-food',             name: 'Pet Food',             description: 'Nutritious pet food including pet mince trays, marrow bones and chicken carcass.', icon: 'box' },
  { id: '7',  slug: 'frozen-feet',          name: 'Frozen Feet',          description: 'Frozen beef, lamb and goat feet available fresh.', icon: 'carcass' },
  { id: '8',  slug: 'eggs',                 name: 'Eggs',                 description: 'Cage and free-range eggs available in trays and dozens in a range of weights.', icon: 'box' },
  { id: '9',  slug: 'frozen-products',      name: 'Frozen Products',      description: 'Frozen fish varieties and frozen chicken products including burgers, nuggets and fingers.', icon: 'box' },
  { id: '10', slug: 'grocery',              name: 'Grocery',              description: 'Essential grocery items including Shan masalas, ginger garlic paste, noodles and more.', icon: 'seasoned' },
  { id: '11', slug: 'marinated-fish',       name: 'Marinated Fish',       description: 'Expertly marinated fish including Basa fillets, Barramundi steak, Pomfret and Tilapia.', icon: 'seasoned' },
  { id: '12', slug: 'marinated-chicken',    name: 'Marinated Chicken',    description: 'Marinated chicken drumettes, fillets and drumsticks in a wide range of flavours and styles.', icon: 'seasoned' },
  { id: '13', slug: 'vegetarian-marinates', name: 'Vegetarian Marinates', description: 'Marinated vegetarian options including Soya Chaap, Paneer and Mushrooms.', icon: 'seasoned' },
  { id: '14', slug: 'marinated-lamb',       name: 'Marinated Lamb',       description: 'Marinated lamb BBQ, cutlets and loin chops in Indian, Moroccan and Rosemary styles.', icon: 'lamb' },
];

export const navCategories: NavCategory[] = [
  {
    label: 'CHICKEN',
    slug: 'chicken',
    subCategories: [
      { name: 'All Chicken', slug: 'chicken' },
      { name: 'Marinated Chicken', slug: 'marinated-chicken' },
    ],
  },
  {
    label: 'LAMB & GOAT',
    slug: 'lamb',
    subCategories: [
      { name: 'All Lamb', slug: 'lamb' },
      { name: 'All Goat', slug: 'goat' },
      { name: 'Marinated Lamb', slug: 'marinated-lamb' },
    ],
  },
  {
    label: 'BEEF',
    slug: 'beef',
    subCategories: [
      { name: 'All Beef', slug: 'beef' },
    ],
  },
  {
    label: 'FISH',
    slug: 'fish',
    subCategories: [
      { name: 'Fresh Fish', slug: 'fish' },
      { name: 'Frozen Fish & Products', slug: 'frozen-products' },
      { name: 'Marinated Fish', slug: 'marinated-fish' },
    ],
  },
  {
    label: 'EGGS & GROCERY',
    slug: 'eggs',
    subCategories: [
      { name: 'Eggs', slug: 'eggs' },
      { name: 'Grocery', slug: 'grocery' },
      { name: 'Vegetarian Marinates', slug: 'vegetarian-marinates' },
    ],
  },
  {
    label: 'PET & OTHER',
    slug: 'pet-food',
    subCategories: [
      { name: 'Pet Food', slug: 'pet-food' },
      { name: 'Frozen Feet', slug: 'frozen-feet' },
    ],
  },
];

export const origins = {
  beef: ['Australian Beef', 'Wagyu Beef', 'Angus Reserve'],
  lamb: ['Australian Lamb', 'NZ Spring Lamb', 'Omani Local Lamb'],
  chicken: ['Local Fresh Chicken', 'Premium Free-Range', 'Corn-Fed Chicken'],
  fish: ['Fresh Local Catch', 'Norwegian Salmon', 'Indian Ocean Tuna'],
};

export const cuts = ['Fillets', 'Steak', 'Whole', 'Mince', 'Curry Pieces', 'Boneless', 'Leg', 'Shoulder', 'Drumsticks', 'Wings', 'Cutlets'];
