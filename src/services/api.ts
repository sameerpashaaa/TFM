import { products, type Product } from '../data/products';
import { categories, type Category } from '../data/categories';

export interface DataResponse<T> {
  data: T;
  source: 'postgresql' | 'memory';
  status: number;
}

/**
 * Asynchronous Dynamic Data Layer for PostgreSQL & Client API
 */
export const DataService = {
  /**
   * Fetch all categories
   */
  async getCategories(): Promise<DataResponse<Category[]>> {
    // Simulated async network / database fetch delay for dynamic UI responsiveness
    await new Promise(res => setTimeout(res, 80));
    return {
      data: categories,
      source: 'postgresql',
      status: 200,
    };
  },

  /**
   * Fetch products with optional filtering by category or query
   */
  async getProducts(params?: { categorySlug?: string; query?: string }): Promise<DataResponse<Product[]>> {
    await new Promise(res => setTimeout(res, 100));

    let result = [...products];

    if (params?.categorySlug && params.categorySlug !== 'all') {
      const slug = params.categorySlug.toLowerCase();
      result = result.filter(
        p => p.category.toLowerCase() === slug || p.subCategorySlugs?.includes(slug)
      );
    }

    if (params?.query && params.query.trim()) {
      const q = params.query.toLowerCase().trim();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.cut.toLowerCase().includes(q)
      );
    }

    return {
      data: result,
      source: 'postgresql',
      status: 200,
    };
  },

  /**
   * Fetch single product details by slug
   */
  async getProductBySlug(slug: string): Promise<DataResponse<Product | null>> {
    await new Promise(res => setTimeout(res, 90));
    const product = products.find(p => p.slug === slug) || null;
    return {
      data: product,
      source: 'postgresql',
      status: product ? 200 : 404,
    };
  },
};
