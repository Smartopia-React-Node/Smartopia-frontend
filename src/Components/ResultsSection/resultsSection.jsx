import React, { useState } from 'react';
import './resultsSection.css';
import Product from '../Product/product';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function ResultsSection({ resultsArr, productsArr,onSearch }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  
  const filteredResults = resultsArr.filter((res) => {
    if (!res.toolName) {
      return false;
    } else if (search === '') {
      return true;
    } else if (res.toolName.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    return false;
  });
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://smartopia-backend.onrender.com/api/tool/search/${search}`
      );
      const data = response.data;
      setSearchResults(data);
      onSearch(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='resultsSection  border-bottom'>
      {/* <SearchBar
        setSearch={setSearch}
        search={search}
        // handleSearch={handleSearch}
      /> */}

      <div className='results'>
        {filteredResults.map((res) => (
          <Product
            name={res.toolName}
            key={res._id}
            description={res.toolDesc}
            pricingModel={res.priceModle}
            imageURL={res.toolImageURL}
            onClick={() =>
              navigate(`/productdetail/${res._id}`, {
                state: { productsArr, selectedTags: [] },
              })
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ResultsSection;