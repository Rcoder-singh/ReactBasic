import React from "react";
import ProductCard from "../../Shared/ProductCard";
import { toHaveFormValues } from "@testing-library/jest-dom/matchers";

const Products = () => {
  const productsList = [
    {
      id: 1,
      imaage:
        "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UY327_FMwebp_QL65_.jpg",
      name: "Apple iPhone 14 (128 GB) - Blue",
      price: "10000",
      category: "Mobile",
      discount: "12%",
    },
    {
      id: 2,
      imaage:
        "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Apple iPhone 14 (128 GB) - Black",
      price: "20000",
      category: "Mobile",
      discount: "10%",
    },
    {
      id: 3,
      imaage:
        "https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Apple iPhone 14 (128 GB) - Yellow",
      price: "30000",
      category: "Mobile",
      discount: "15%",
    },
    {
      id: 4,
      imaage:
        "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Apple iPhone 14 (128 GB) - White",
      price: "40000",
      category: "Mobile",
      discount: "20%",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {productsList.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default Products;
