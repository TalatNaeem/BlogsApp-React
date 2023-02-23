// import React from 'react'
// import { useState , useEffect } from 'react';
// import Blogslist from './Blogslist';
// import useFetch from './useFetch';

// // const Home = () => {
// //   const [name, setName] = useState("Talat");
// //   const [age, setAge] = useState(23);
// //   const HandleClick = () => {
// //     // console.log ("Hello, Talat" , event);
// //     setName('Naeem');
// //     setAge(55);
// //   }

// //   const HandleClickAgain = (name , event) => {
// //     console.log ('Hello ' + name , event.target);
// //   }

// //   return (
// //     <div className='home'>
// //         <h2>HomePage</h2>
// //         <p>{name} is {age} years old</p>
// //         <button onClick={HandleClick}>Click Me</button>
// //         {/* // agar hum directly 'HandleClickAgain' function ko invoke krty to yeah app chlty he call ho jata. to avoid that we wrap it up in another one */}
// //         {/* <button onClick={(event) => HandleClickAgain('Naeem' , event)}>Click Me</button> */}
// //     </div>
// //   )
// // }
// const Home  = ()=> {
//   // const [blogs, setBlogs] = useState([
//   //   { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//   //   { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//   //   { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//   // ])

//   // const handleDelete = (id)=> {
//   //   const newBloglist = blogs.filter((blog) => blog.id !== id);
//   //   setBlogs(newBloglist);
//   // }
//   // useEffect (() => {
//   //   // useEffect execute when page load and whenever the page re-render
//   //   // generally useEffect used to fetch data
//   //   // we added '[name]' dependency k ab jab name change hoga to useEffect re-execute ho
//   //   // har bar page reload ya re-render hony pay execute na ho
//   //   console.log("useEffect ran");
//   //   console.log(name);
//   // } , [name]);
//   const {data: blogs , IsPending , error} = useFetch ('http://localhost:8000/blogs');

//   return (
//     <div className="home">
//       {error && <div>{error}</div>}
//       {IsPending && <div>Loading...........!</div>}
//       {/* {blogs && <Blogslist blogs = {blogs} handleDelete = {handleDelete}/>} */}
//       {blogs && <Blogslist blogs = {blogs} />}
//       {/* <button onClick={() => setName("lunigi")}>Click to change Name</button> */}
//       {/* <p>{name}</p> */}
//       {/* <Blogslist blogs = {blogs.filter((blog) => blog.author === "mario")} title = "All Blogs" /> */}
//     </div>
//   )

// }
// export default Home;

import React from 'react'
import { useState , useEffect } from 'react';
import Blogslist from './Blogslist';
import useFetch from './useFetch';

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <Blogslist blogs={blogs} /> }
    </div>
  );
}
 
export default Home;