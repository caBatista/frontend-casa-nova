import * as React from "react";
import Grid from "@mui/material/Grid2";
import { CardContent, CardMedia, Typography } from "@mui/material";
import "./ProductGrid.css";
import { Product } from "@/services/productService";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
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
                wordWrap: "break-word",
                overflowWrap: "break-word",
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
