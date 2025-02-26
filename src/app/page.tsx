"use client";

import React, { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { fetchProducts, Product } from "../services/productService";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setLoading(false);
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Produtos</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default HomePage;
