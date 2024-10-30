import React, { useEffect, useState } from 'react';
import Tshirt from '../image/tshirt1.webp';
import Shoe from '../image/shoe.webp';
import './Cart.css'; // Import the CSS file

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8085/cart/123455');
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
  }, []);

  const removecart = async (userid, id) => {
    try {
      const response = await fetch(`http://localhost:8084/cart/${userid}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

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
              <p className="product-price">${product.price.toFixed(2)}</p> {/* Assuming price is a number */}
              <div className="button-container">
                <button className="button buy">Buy</button>
                <button className="button remove" onClick={() => removecart(product.userid, product.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
