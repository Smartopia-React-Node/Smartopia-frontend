// import React, { useEffect, useState } from 'react'
// import "./learn.css";
// import NavBar from '../../Components/Navbar/NavBar'
// import Smalltag from '../../Components/SmallTag/smalltag';
// import LearnCard from '../../Components/LearnCard/learnCard';
// import Footer from '../../Components/Footer/footer';
// import axios from 'axios';
// function learn() {
//     const [tutorialArr, settutorialArr] = useState([])
//     useEffect(() => {
//         axios.get("https://ttool-test.onrender.com/api/tutorial/alltutorial").then((response) => {
//             settutorialArr(response.data);
//           });
//     }, [])
//   return (
//     <div className='learn-page'>
//         <NavBar />
//         <div className='learn-section'>
//         <div className='middle-body'>
//                 <div className='header'>
//                     <h1 className='title'>Learn</h1>
//                     <div className='sort-section'>

//                     </div>
//                 </div>
//                 <div className='content-container'>
//                     {/* <LearnCard 
//                         title={"AI News is Getting Out of Hand!"}
//                         type={"Paid"}
//                     /> */}
//                     {
//                         tutorialArr.map((item, index)=>(
//                             <LearnCard key={item._id}
//                                 item={item}
//                             /> 
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//         <Footer />
//     </div>
//   )
// }

// export default learn 
import React, { useEffect, useState } from 'react';
import "./learn.css";
import NavBar from '../../Components/Navbar/NavBar';
import Smalltag from '../../Components/SmallTag/smalltag';
import LearnCard from '../../Components/LearnCard/learnCard';
import Footer from '../../Components/Footer/footer';
import axios from 'axios';

function Learn() {
    const [tutorialArr, setTutorialArr] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get("https://ttool-test.onrender.com/api/tutorial/alltutorial")
            .then((response) => {
                setTutorialArr(response.data);
            });
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredTutorials = tutorialArr.filter((item) => {
        if (searchTerm == "") {
            return item;
        } else if (item.videoTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        }
    }
    )

    return (
        <div className='learn-page'>
            <NavBar />
            <div className='learn-section'>
                <div className='middle-body'>
                    <div className='header'>
                        <h1 className='title'>Learn</h1>
                        <div className='sort-section'>
                            <input
                                type='text'
                                placeholder='Search...'
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                    <div className='content-container'>
                        {filteredTutorials.map((item, index) => (
                            <LearnCard key={item._id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Learn;

// import React, { useState } from 'react';
// import './resultsSection.css';
// import Product from '../Product/product';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import SearchBar from '../SearchBar/searchBar';

// function ResultsSection({ resultsArr, productsArr }) {
//   const navigate = useNavigate();
//   const [search, setSearch] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const filteredResults = resultsArr.filter((res) => {
//     const searchContent = res.toolName.toString() + res.toolDesc.toString() + res.priceModle.toString();
//     return searchContent.toLowerCase().includes(search.toLowerCase());
//   });
  
//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8800/api/tool/search/${search}`
//       );
//       const data = response.data;
//       setSearchResults(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className='resultsSection  border-bottom'>
//       {/* <SearchBar
//         setSearch={setSearch}
//         search={search}
//         // handleSearch={handleSearch}
//       /> */}

//       <div className='results'>
//         {filteredResults.map((res) => (
//           <Product
//             name={res.toolName}
//             key={res._id}
//             description={res.toolDesc}
//             pricingModel={res.priceModle}
//             imageURL={res.toolImageURL}
//             onClick={() =>
//               navigate(`/productdetail/${res._id}`, {
//                 state: { productsArr, selectedTags: [] },
//               })
//             }
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ResultsSection;
