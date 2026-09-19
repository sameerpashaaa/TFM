# Tarneit Fresh Meat (TFM) 🥩

Premium Halal Meat E-Commerce Platform featuring high-performance scrollytelling frame animation, full collection filtering, interactive shopping cart, customer reviews, rewards, and local delivery in Melbourne, Australia.

---

## 🚀 Features

- **High-Performance Animations**: Scrollytelling hero banner powered by `framer-motion` and `react-intersection-observer`.
- **Global Design Tokens**: Clean, scalable vanilla CSS architecture without external bloat.
- **Product Collections**: Categorized browsing with grid layouts and CSS variable-driven themes.
- **Dynamic Origin & Cut Filtering**: Filter by origin (Australia, New Zealand, Japan, South Africa) and cut types with real-time price slider.
- **Interactive Cart & Checkout**: Slide-over cart drawer with real-time quantity adjustments, free delivery threshold calculation, and persistent storage.
- **Content & Customer Hub**: Dedicated pages for Customer Reviews, Loyalty Rewards, Referral Program, Affiliate System, Store Locations, FAQs, Contact Form, and Culinary Blogs.
- **Responsive & Accessible Design**: Mobile-first architecture with custom SVG illustrations and high-contrast typography.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + Canvas 2D Scrollytelling
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📁 Project Structure

```
├── db/                     # PostgreSQL database schema & seed scripts
├── public/
│   ├── favicon.svg         # Brand favicon
│   ├── frames/             # 160 scrollytelling video animation frames
│   └── images/             # 97 optimized product, banner, and blog images
├── src/
│   ├── components/
│   │   ├── home/           # Home page sections (HeroBanner, ShopByCategory, BestSellers, etc.)
│   │   ├── layout/         # Layout components (Header, Navbar, Footer, CartDrawer, AnnouncementBar)
│   │   └── shared/         # Reusable UI (ProductCard, CategoryArt, CutIcon)
│   ├── context/            # Global React contexts (CartContext)
│   ├── data/               # Static product, category, and blog catalogs
│   ├── pages/              # 14 application routes / views
│   ├── services/           # Data access and API services
│   ├── App.tsx             # Root application & routing setup
│   ├── index.css           # Global design tokens and styles
│   └── main.tsx            # Application entry point
├── index.html              # HTML shell
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/sameerpashaaa/TFM.git

# Navigate into project directory
cd TFM

# Install dependencies
npm install
```

### Development

```bash
# Start local development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Typecheck and build for production
npm run build

# Preview production build locally
npm run preview
```

### Linting

```bash
# Run oxlint across source code
npm run lint
```

---

## 📜 License

Private & Proprietary - Tarneit Fresh Meat.
