import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <small>{product.category}</small>
    </div>
  );
};

export default ProductCard;
 