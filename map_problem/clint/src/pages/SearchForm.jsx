import React, { useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    const categoryName = event.target.value;
    if (event.target.checked) {
      setCategoryFilters([...categoryFilters, categoryName]);
    } else {
      setCategoryFilters(categoryFilters.filter((name) => name !== categoryName));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.get(`/api/v1/searchProducts`, {
      params: {
        search: searchQuery,
        categories: categoryFilters,
      },
    });

    setSearchResults(response.data.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="searchQuery">Search:</label>
          <input type="text" id="searchQuery" value={searchQuery} onChange={handleSearchQueryChange} />
        </div>
        <div>
          <label>Categories:</label>
          <div>
            <label>
              <input type="checkbox" value="Mobile" onChange={handleCategoryFilterChange} />
              Mobile
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" value="Laptop" onChange={handleCategoryFilterChange} />
              Laptop
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" value="Fashion" onChange={handleCategoryFilterChange} />
              Fashion
            </label>
          </div>
        </div>
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 ? (
        <div>
          {searchResults.map((result) => (
            <div key={result._id}>
              <h3>{result.ProductName}</h3>
              <p>Brand: {result.ProductBrand}</p>
              <p>Price: {result.ProductPrice}</p>
              <p>Color: {result.ProductColor}</p>
              <p>Categories: {result.ProductCategories.join(", ")}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchForm;
