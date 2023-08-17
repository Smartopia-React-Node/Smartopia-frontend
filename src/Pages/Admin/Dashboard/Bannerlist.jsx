import axios from "axios";
import React, { useState, useEffect } from "react";


// import "./glossaryAdminTable.css";
// function Bannerlist() {
//     const [bannerlist, setbannerlist] = useState([]);
//     useEffect(() => {
//         fetchbanner()
//     }, [])
//     const fetchbanner = async () => {
//         await axios({
//             method: 'GET',
//             // url: 'https://ttool-test.onrender.com/api/banner/get',
//             url: 'https://smartopia-backend.onrender.com/api/banner/get/all',
//         }).then((res) => {
//             setbannerlist(res.data)
//             console.log(res)
//         })
//     }
//     const Handeledit = (id) => {
//         localStorage.setItem("bannerId", id);

//     }
//     return (


//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>
//                             Description
//                         </th>
//                         <th>
//                             create Time
//                         </th>
//                         <th>
//                             Update time
//                         </th>
//                         <th>
//                             Action
//                         </th>

//                     </tr>
//                 </thead>
//                 <tbody>
//                     {bannerlist.map((item) => {
//                         return (
//                             <tr>
//                                 <td >{item.text}</td>
//                                 <td>{item.createdAt}</td>
//                                 <td>{item.updatedAt}</td>
//                                 <td> <button onClick={() => Handeledit(item._id)}> edit  </button></td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>

//         </div>
//     )
// }

// export default Bannerlist




// <div className='glossary-admin-Table'>
//     <div className='gTable-header'>

//         <div className='title desc'>
//             <h2>Description</h2>
//         </div>
//     </div>

//     {

//         <div className='gTable-row' >



//             <div className='desc'>
//                 <div className='desc-wrapper'>
//                     {bannerlist.map((item,i)=>{
//                         return (
//                             <p>{item.text}</p>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>

//     }

// </div>

function Bannerlist() {
    const [bannerlist, setBannerlist] = useState([]);

    useEffect(() => {
        fetchBanner();
    }, []);

    const fetchBanner = async () => {
        try {
            const response = await axios.get('https://smartopia-backend.onrender.com/api/banner/get/all');
            setBannerlist(response.data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id) => {
        localStorage.setItem('bannerId', id);
    };

    return (
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={styles.tableHeader}>Description</th>
                        <th style={styles.tableHeader}>Create Time</th>
                        <th style={styles.tableHeader}>Update Time</th>
                        <th style={styles.tableHeader}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bannerlist.map((item) => (
                        <tr key={item._id}>
                            <td style={styles.tableData}>{item.text}</td>
                            <td style={styles.tableData}>{item.createdAt}</td>
                            <td style={styles.tableData}>{item.updatedAt}</td>
                            <td style={styles.tableData}>
                                <button style={styles.editButton} onClick={() => handleEdit(item._id)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    tableHeader: {
        background: '#f2f2f2',
        padding: '10px',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    tableData: {
        padding: '10px',
        borderBottom: '1px solid #ccc',
    },
    editButton: {
        background: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default Bannerlist;
