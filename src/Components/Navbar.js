// import React from 'react'
// import {Link} from "react-router-dom"

// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//         <h1>The Dojo Blogs</h1>
//         <div className='links'>
//             {/* hum anchor tag bhi use kr skty page switch k liay but we will use React ka apna Link tag which is fast
//             <a href='/'>Home</a>
//             <a href='/create'>Create New Blog</a> */}
//             <Link to='/'>Home</Link>
//             <Link to='/create'>Create New Blog</Link>
//         </div>
//     </nav>
//   )
// }

// export default Navbar
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;