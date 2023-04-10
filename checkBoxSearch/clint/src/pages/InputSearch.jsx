import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const InputSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const resultsPerPage = 10;
  const pagesVisited = pageNumber * resultsPerPage;

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/InputSearch?searchTerm=${searchTerm}`);
        setSearchResults(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm.length > 0) {
      fetchSearchResults();
    } else {
      fetchSearchResults(); // fetch all the products again if search term is empty
    }
  }, [searchTerm]);

  const pageCount = Math.ceil(searchResults.length / resultsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchResults.length > 0 ? (
        <div>
          <ul>
            {searchResults
              .slice(pagesVisited, pagesVisited + resultsPerPage)
              .map((result) => (
                <li key={result._id}>{result.ProductName}</li>
              ))}
          </ul>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            onPageChange={changePage}
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
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default InputSearch;
