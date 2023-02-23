// import React from 'react'
// import {Link} from "react-router-dom"

// const Blogslist = (props) => {

//   const blogs = props.blogs;
//   const title = props.title;
//   // const handleDelete = props.handleDelete;
//   return (
//     <div>
//         <h1 className='khitaab'>{title}</h1>
//         {blogs.map( (blog) => (
//         <div className='blog-preview' key = {blog.id}>
//           <Link to = '/blogs/${blog.id}' >
//           <h2>{blog.title}</h2>
//           <p>Written By: {blog.author}</p>
//           <p>{blog.body}</p>
//           </Link>
//           {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Blogslist


import { Link } from 'react-router-dom';

const Blogslist = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>{blog.body}</p>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default Blogslist;