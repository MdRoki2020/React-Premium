import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function SearchForm() {
  const [pageNumber, setPageNumber] = useState(0); //
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);


  const usersPerPage = 7;
  const pagesVisited = pageNumber * usersPerPage;
  const displayProducts = products.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(products.length / usersPerPage);


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

  const handlePageClick = (data) => {
    setPageNumber(data.selected);
  };

  const searchProducts = async () => {
    const queryString = `search=${searchTerm}&categories=${categories.join()}`;
    const response = await fetch(`http://localhost:5000/api/v1/searchProducts?${queryString}`);
    const data = await response.json();
    setProducts(data.data);
    setPageNumber(0);
  };

  useEffect(() => {
    searchProducts();
  }, [categories]);

  return (
    <div>
      <form>
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
      </form>
      {displayProducts.length > 0 && (
        <div>
          <h2>Search Results</h2>
          {displayProducts.map((product) => (
            <div key={product._id}>
              <h3>{product.ProductName}</h3>
              <p>Brand: {product.ProductBrand}</p>
              <p>Price: {product.ProductPrice}</p>
              <p>Color: {product.ProductColor}</p>
              <p>Categories: {product.ProductCategories}</p>
            </div>
          ))}

<ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />


        </div>
      )}
    </div>
  );
}

export default SearchForm;
