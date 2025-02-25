"use client";

import * as React from "react";
import { fetchProducts, Product } from "../../services/productService";
import Grid from "@mui/material/Grid2";
import {
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
} from "@mui/material";
import "./ProductGrid.css";

const ProductGrid: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [isClient, setIsClient] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (isClient) {
      const loadProducts = async () => {
        try {
          const products = await fetchProducts();
          setProducts(products);
        } catch (error) {
          console.error("Erro ao carregar produtos", error);
        } finally {
          setLoading(false);
        }
      };

      loadProducts();
    }
  }, [isClient]);

  if (!isClient || loading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid component="div" key={product.id}>
          <CardMedia
            component="img"
            image={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
          <CardContent className="product-card-content">
            <Typography
              gutterBottom
              variant="h5"
              className="product-title"
              sx={{
                className: "product-title",
                fontFamily: "DM Sans",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {product.name}
            </Typography>
            <Typography
              className="product-price"
              sx={{
                fontFamily: "DM Sans",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              R${product.price.toFixed(2)}
            </Typography>
          </CardContent>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
