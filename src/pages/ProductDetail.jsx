import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch product details');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p style={{ textAlign: 'center' }}>{error}</p>;

  return (
    <div className="container">
      <button onClick={() => navigate('/')}>Back to Products</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '1rem' }}>
        <img src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
        <div>
          <h2>{product.title}</h2>
          <h3>${product.price}</h3>
          <p>{product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
