import { fetchProducts } from "./shopify.js";

export class Toolkit {
  constructor({ store }) {
    if (!store) throw new Error("Store is required");
    this.store = store;
  }

  async browse({ limit = 10, sort = "price_asc" } = {}) {
    const products = await fetchProducts(this.store);

    const sorted = products.sort((a, b) => {
      if (sort === "price_asc") return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      return 0;
    });

    return sorted.slice(0, limit);
  }
}
