import React, { useEffect, useState } from 'react';
import Tshirt from '../image/tshirt1.webp';
import Shoe from '../image/shoe.webp';
import './Cart.css'; // Import the CSS file
import { useParams } from 'react-router-dom';

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8083/product/category/${category}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="product-containercart">
        {products.map((product) => (
          <div key={product.id} className="product-cardcart">
            <img
              src={product.category === 'TShirt' ? Tshirt : Shoe}
              alt={product.name}
              className="image"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <div className="button-container">
                <button className="button buy">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
