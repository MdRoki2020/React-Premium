import { useState } from "react";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const queryString = `search=${searchTerm}&categories=${categories.join()}`;
    const response = await fetch(`http://localhost:5000/api/v1/searchProducts?${queryString}`);
    const data = await response.json();
    setProducts(data.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="searchTerm">Search:</label>
          <input type="text" id="searchTerm" value={searchTerm} onChange={handleSearchTermChange} />
        </div>
        <div>
          <label htmlFor="mobile">Mobile</label>
          <input type="checkbox" id="mobile" value="Mobile" onChange={handleCategoryChange} checked={categories.includes("Mobile")} />
        </div>
        <div>
          <label htmlFor="laptop">Laptop</label>
          <input type="checkbox" id="laptop" value="Laptop" onChange={handleCategoryChange} checked={categories.includes("Laptop")} />
        </div>
        <div>
          <label htmlFor="fashion">Fashion</label>
          <input type="checkbox" id="fashion" value="Fashion" onChange={handleCategoryChange} checked={categories.includes("Fashion")} />
        </div>
        <button type="submit">Search</button>
      </form>
      {products.length > 0 && (
        <div>
          <h2>Search Results</h2>
          {products.map((product) => (
            <div key={product._id}>
              <h3>{product.ProductName}</h3>
              <p>Brand: {product.ProductBrand}</p>
              <p>Price: {product.ProductPrice}</p>
              <p>Color: {product.ProductColor}</p>
              <p>Categories: {product.ProductCategories}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchForm;
