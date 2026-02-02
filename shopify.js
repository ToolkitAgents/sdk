export async function fetchProducts(store) {
  const url = `https://${store}/products.json`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();

  return data.products.map(p => ({
    id: p.id,
    title: p.title,
    price: Number(p.variants[0]?.price || 0),
    available: p.variants[0]?.available ?? false,
    url: `https://${store}/products/${p.handle}`
  }));
}
