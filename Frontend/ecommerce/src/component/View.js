import React, { useEffect, useState } from 'react';
import Tshirt from '../image/tshirt1.webp';
import Shoe from '../image/shoe.webp';
import { useParams } from 'react-router-dom';
import './View.css'; // Ensure this CSS file is created

const View = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8085/product/id/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="view-container">
      {product ? (
        <div className="product-layout">
          <div className="product-image-container">
            <img
              src={product.category === 'TShirt' ? Tshirt : Shoe}
              alt={product.name}
              className="product-image"
              style={{height:'60vh'}}
            />
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <div className="product-details">
              <p><strong>Color:</strong> {product.color}</p>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Size:</strong> {product.size}</p>
              <div className="product-rating">
                <span>⭐⭐⭐⭐⭐</span> {/* Placeholder for star rating */}
              </div>
              <div className="product-price">{product.price}.00 $</div> {/* Placeholder for price */}
            </div>
            <button className="buy-button1">Buy Now</button>
          </div>
        </div>
      ) : (
        <p>No product found.</p>
      )}
    </div>
  );
};

export default View;
