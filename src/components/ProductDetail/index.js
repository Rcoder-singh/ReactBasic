import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id, category } = useParams();
  const { state } = useLocation();

  console.log(id, "id", category, "category");
  return (
    <div>
      <div className="flex gap-5">
        <img src={state.image} alt="" /> <p>{state.name}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
