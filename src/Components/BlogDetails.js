// // import React from 'react'
// // import { useParams } from 'react-router-dom'

// // const BlogDetails = () => {
// //   const { id } = useParams();
// //   return (
// //     <div>
// //         <h1>BlogDetails - { id }</h1>
// //     </div>
// //   )
// // }
// // export default BlogDetails;

// import { useParams } from "react-router-dom";

// const BlogDetails = () => {
//   const { id } = useParams();

//   return (
//     <div className="blog-details">
//       <h2>Blog details - { id }</h2>
//     </div>
//   );
// }
 
// export default BlogDetails;

import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const deleteBlog = ()=>{
    fetch('http://localhost:8000/blogs/' + blog.id , {
      method: 'DELETE'
    }).then(()=> {
      history.push('/');
    })
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={deleteBlog}>Delete Blog</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;