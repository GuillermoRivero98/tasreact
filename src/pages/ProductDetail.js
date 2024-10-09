import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>TA 17: Producto {id}</h1>
      <p>Detalles del producto con ID: {id}</p>
    </div>
  );
};

export default ProductDetail;
