import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = ()=> {
  return (
    <div>
        <h2>Sorry</h2>
        <p>Page you are searching for, Not Found</p>
        <Link to="/">Go to home page</Link>
    </div>
  )
}

export default NotFound;
