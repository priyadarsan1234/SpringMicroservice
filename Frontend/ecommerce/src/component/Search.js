import React, { useEffect, useState } from 'react';
import Tshirt from '../image/tshirt1.webp';
import Shoe from '../image/shoe.webp';
import { useNavigate } from 'react-router-dom';
import './ProductList.css'; // Ensure this CSS file is created

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8085/product');
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

  const handleAddToCart = async (product) => {
    try {
      const response = await fetch('http://localhost:8084/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...product,
          userid: "123455",
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

      alert(`Product "${product.name}" added to cart for user 123455!`);
      navigate(`/cart`);
    } catch (err) {
      console.error(err);
      alert('Error adding product to cart');
    }
  };

  const handleBuy = (id) => {
    navigate(`/product/${id}`);
  };

  const categorymove = (category) => {
    navigate(`/category/${category}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(filteredProducts.map(product => product.category))];

  return (
    <div className="product-list-container">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ padding: '10px', marginBottom: '20px', width: '100%' }}
      />
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h2 className="category-header" onClick={() => categorymove(category)}>
            {category}
          </h2>
          <div className="product-grid">
            {filteredProducts
              .filter((product) => product.category === category)
              .slice(0, 5) // Show only 5 products per category
              .map((product) => (
                <div key={product.id} className="product-card">
                  <img
                    src={product.category === 'TShirt' ? Tshirt : Shoe}
                    alt={product.name}
                    style={{ height: '230px' }}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-namep">{product.name}</h3>
                    <div className="product-details">
                      <span className="product-color">Color: {product.color}</span>
                      <span className="product-size">Size: {product.size}</span>
                      <span className="product-brand">Brand: {product.brand}</span>
                    </div>
                    <div className="product-buttons">
                      <button
                        className="buy-button"
                        onClick={() => handleBuy(product.id)}
                      >
                        Buy Now
                      </button>
                      <button
                        className="cart-button"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
