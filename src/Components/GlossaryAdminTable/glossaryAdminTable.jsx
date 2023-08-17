// import React from 'react'
// import "./glossaryAdminTable.css";
// function glossaryAdminTable({ glossaryArr }) {

//     // function deleteElement({ setGlossaryArr }) {

//     // }
//     const deleteElement = (id) => {
//         const newlist = glossaryArr.filter((task) => {
//             if (task.id === id) {
//                 return false;
//             } else {
//                 return true;
//             }
//         })
//         // setGlossaryArr(newlist);
//     }

//     return (
//         <div className='glossary-admin-Table'>
//             <div className='gTable-header'>
//                 <div className='title term'>
//                     <h2>Term</h2>
//                 </div>
//                 <div className='title desc'>
//                     <h2>Description</h2>

//                 </div>


//             </div>

//             {
//                 glossaryArr.map((item, index) => (
//                     <div className='gTable-row' key={item._id}>
//                         <div className='term'>
//                             <div className='term-wrapper' >
//                                 <p>{item.term}</p>
//                             </div>
//                         </div>
//                         <div className='desc'>
//                             <div className='desc-wrapper'>
//                                 <p>{item.desc}</p>
//                                 <button onClick={() => deleteElement(item.id)}> delete </button>

//                             </div>
//                         </div>
//                     </div>
//                 ))
//             }

//         </div>
//     )
// }

// export default glossaryAdminTable

import React from 'react';
import "./glossaryAdminTable.css";

function GlossaryAdminTable({ glossaryArr, setGlossaryArr }) {

    const deleteElement = (id) => {
        const updatedArr = glossaryArr.filter((item) => item._id !== id);
        setGlossaryArr(updatedArr);
        // console.log(updatedArr);
        console.log(updatedArr)
    };

    return (
        <div className='glossary-admin-Table'>
            <div className='gTable-header'>
                <div className='title term'>
                    <h2>Term</h2>
                </div>
                <div className='title desc'>
                    <h2>Description</h2>
                </div>
            </div>

            {glossaryArr.map((item, index) => (
                <div className='gTable-row' key={item._id}>
                    <div className='term'>
                        <div className='term-wrapper'>
                            <p>{item.term}</p>
                        </div>
                    </div>
                    <div className='desc'>
                        <div className='desc-wrapper'>
                            <p>{item.desc}</p>
                            <button onClick={() => deleteElement(item._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GlossaryAdminTable;
