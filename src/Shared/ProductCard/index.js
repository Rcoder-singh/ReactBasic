import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ productData }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col gap-3 p-3 border-2"
      onClick={() =>
        navigate(`/products/${productData.id}/${productData.category}`, {
          state: { image: productData.imaage, name: productData.name },
        })
      }
    >
      <img src={productData.imaage} alt="" className="p-5" />
      <p>{productData.name}</p>
      <p className="">{productData.price}</p>
      <p>{productData.category}</p>
      <p>{productData.discount}</p>
    </div>
  );
};

export default ProductCard;
