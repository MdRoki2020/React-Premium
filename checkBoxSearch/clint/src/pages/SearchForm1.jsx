import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function SearchForm1() {
    const [pageNumber, setPageNumber] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [categories, setCategories] = useState([]);
    const [productBrands, setProductBrands] = useState([]);
    const [productColors, setProductColors] = useState([]);
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

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    if (productBrands.includes(brand)) {
      setProductBrands(productBrands.filter((b) => b !== brand));
    } else {
      setProductBrands([...productBrands, brand]);
    }
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    if (productColors.includes(color)) {
      setProductColors(productColors.filter((c) => c !== color));
    } else {
      setProductColors([...productColors, color]);
    }
  };

  const handlePageClick = (data) => {
    setPageNumber(data.selected);
  };

  const searchProducts = async () => {
    const queryString = `search=${searchTerm}&categories=${categories.join()}&productBrands=${productBrands.join()}&productColors=${productColors.join()}`;
    const response = await fetch(`http://localhost:5000/api/v1/searchProducts?${queryString}`);
    const data = await response.json();
    setProducts(data.data);
    setPageNumber(0);
  };

  useEffect(() => {
    searchProducts();
  }, [categories, productBrands, productColors]);

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

        <h6>Brand</h6>
        <div>
          <label htmlFor="productBrand">xiomi</label>
          <input type="checkbox" id="xiomi" value="xiomi" onChange={handleBrandChange} checked={productBrands.includes("xiomi")} />
        </div>

        <div>
          <label htmlFor="productBrand">Walton</label>
          <input type="checkbox" id="Walton" value="Walton" onChange={handleBrandChange} checked={productBrands.includes("Walton")} />
        </div>

        <div>
          <label htmlFor="productBrand">Samsung</label>
          <input type="checkbox" id="Samsung" value="Samsung" onChange={handleBrandChange} checked={productBrands.includes("Samsung")} />
        </div>

        <div>
          <label htmlFor="productBrand">Asus</label>
          <input type="checkbox" id="Asus" value="Asus" onChange={handleBrandChange} checked={productBrands.includes("Asus")} />
        </div>

        <div>
          <label htmlFor="productBrand">walton</label>
          <input type="checkbox" id="walton" value="walton" onChange={handleBrandChange} checked={productBrands.includes("walton")} />
        </div>


        <h6>Color</h6>
        <div>
          <label htmlFor="productBrand">blue</label>
          <input type="checkbox" id="blue" value="blue" onChange={handleColorChange} checked={productColors.includes("blue")} />
        </div>

        <div>
          <label htmlFor="productBrand">silver</label>
          <input type="checkbox" id="silver" value="silver" onChange={handleColorChange} checked={productColors.includes("silver")} />
        </div>

        <div>
          <label htmlFor="productBrand">black</label>
          <input type="checkbox" id="black" value="black" onChange={handleColorChange} checked={productColors.includes("black")} />
        </div>

        <div>
          <label htmlFor="productBrand">red</label>
          <input type="checkbox" id="red" value="red" onChange={handleColorChange} checked={productColors.includes("red")} />
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

export default SearchForm1;