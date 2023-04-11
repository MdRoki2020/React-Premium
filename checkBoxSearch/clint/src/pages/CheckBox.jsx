import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CheckBox() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState(false);
  const [productBrand, setProductBrand] = useState(false);
  const [productCategory, setProductCategory] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      let queryString = "";
      if (productName) {
        queryString += `ProductName=${encodeURIComponent(productName)}&`;
      }
      if (productBrand) {
        queryString += `ProductBrand=${encodeURIComponent(productBrand)}&`;
      }
      if (productCategory) {
        queryString += `ProductCategories=${encodeURIComponent(productCategory)}&`;
      }

      const response = await axios.get(`http://localhost:5000/api/v1/search?${queryString}`);
      setProducts(response.data.data);
    };
    fetchProducts();
  }, [productName, productBrand, productCategory]);

  const handleProductNameChange = (event) => {
    setProductName(event.target.checked ? 'Band-5' : '');
  };

  const handleProductBrandChange = (event) => {
    setProductBrand(event.target.checked ? 'Walton' : '');
  };

  const handleProductCategoryChange = (event) => {
    setProductCategory(event.target.checked ? 'Watch' : '');
  };

  return (
    <div>
      <h1>Search Products</h1>
      <div>
        <label htmlFor="productName">Product Name</label>
        <input type="checkbox" id="productName" name="productName" onChange={handleProductNameChange} />
      </div>
      <div>
        <label htmlFor="productBrand">Product Brand</label>
        <input type="checkbox" id="productBrand" name="productBrand" onChange={handleProductBrandChange}  />
      </div>
      <div>
        <label htmlFor="productCategory">Product Category</label>
        <input type="checkbox" id="productCategory" name="productCategory" onChange={handleProductCategoryChange} />
      </div>
      <div>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product._id}>{product.ProductName} - {product.ProductBrand} - {product.ProductCategories}</li>
            ))}
          </ul>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default CheckBox;
