-- PostgreSQL Schema for Tarneit Fresh Meat (TFM)
-- Project: n

CREATE TABLE IF NOT EXISTS categories (
  id VARCHAR(50) PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(150) NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(50) PRIMARY KEY,
  slug VARCHAR(150) UNIQUE NOT NULL,
  name VARCHAR(200) NOT NULL,
  category VARCHAR(100) NOT NULL,
  origin VARCHAR(100) NOT NULL,
  cut VARCHAR(100) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  original_price NUMERIC(10, 2),
  rating NUMERIC(3, 2) DEFAULT 5.0,
  review_count INT DEFAULT 0,
  in_stock BOOLEAN DEFAULT TRUE,
  image TEXT NOT NULL,
  images TEXT[],
  description TEXT,
  weight VARCHAR(50),
  badge VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS product_variants (
  id SERIAL PRIMARY KEY,
  product_id VARCHAR(50) REFERENCES products(id) ON DELETE CASCADE,
  label VARCHAR(100) NOT NULL,
  weight VARCHAR(50) NOT NULL,
  price NUMERIC(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS reviews (
  id VARCHAR(50) PRIMARY KEY,
  product_id VARCHAR(50) REFERENCES products(id) ON DELETE CASCADE,
  author VARCHAR(100) NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  date VARCHAR(50) NOT NULL,
  title VARCHAR(200),
  comment TEXT NOT NULL,
  verified BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_price ON products(price);
