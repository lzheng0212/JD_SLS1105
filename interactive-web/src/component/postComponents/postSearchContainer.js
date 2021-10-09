// import React from "react";
// import { Button } from '../Button';
// import { Radio } from 'antd';
// import {setDocs} from '../../pages/postSection.js'

// function PostSearchContainer() {
//     const [value, setValue] = React.useState(1);
//     const [filterValue, setFilter] = React.useState(1);
//     const [keyword, setKey] = React.useState(1);
//     const onChange = e => {
//         setValue(e.target.value);
//         setFilter(e.target.value);
//       };
//     const search = () => {
//         setKey(document.getElementById("input").value);
//         console.log("changed", filterValue, keyword)
//         document.getElementById("input").value = "";
//       }

//     return (
//         <>
//         <div className='search-container'>
//             <input type="text" id='input' placeholder="Search for a post..."></input>
//             <Button
//                 buttonStyle='btn--black' buttonSize="btn--large" onClick={search}>Search
//             </Button>
//         </div>
//         <Radio.Group onChange={onChange} value={value}>
//             <Radio value={1}>Title</Radio>
//             <Radio value={2}>Author</Radio>
//         </Radio.Group>
//         </>
//     )
// }

// export default PostSearchContainer