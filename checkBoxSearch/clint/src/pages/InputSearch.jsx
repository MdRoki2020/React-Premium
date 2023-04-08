import React, { useState, useEffect } from "react";
import axios from "axios";

const InputSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
      setSearchResults([]);
    }
  }, [searchTerm]);

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
        <ul>
          {searchResults.map((result) => (
            <li key={result._id}>{result.ProductName}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>

  )
}

export default InputSearch