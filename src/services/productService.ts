export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/product`);
  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }
  return response.json();
}
