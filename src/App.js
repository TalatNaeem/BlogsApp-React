// import logo from './logo.svg';
// import './index.css'; // here we will use 'index.css' instead of 'app.css'
// import React , {Component} from 'react';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import { dblClick } from '@testing-library/user-event/dist/click';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; // to switch among pages
// import Create from './Components/Create';
// import BlogDetails from './Components/BlogDetails';

// // we made data folder with 'db.json' file in it to treat it like local DB and perform CRUD
// // (nechy wali line alag terminal ma run kryn gy to run local db server)
// // npx json-server --watch data/db.json --port 8000
// // Pages ma route/switch krny k liay router package install krna hy with following commands
// // npm install react-router-dom@5 //latest ghaliban 6. something aa gya hy but we will use 5 for this tutorial

// function App() {
//   const title = "I started React"; // we can make string, numbers but not boolean and object 
//   const likes = 50;
//   // const person = {name: "Talat", age: 23}; not allowed to make objects or boolean like that
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <div className='content'>
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/">
//               <Create />
//             </Route>
//             <Route path="/blogs/:id">
//             {/* <Route path="/blogs/:id" element={<BlogDetails />} > */}
//               <BlogDetails />
//             </Route>
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }
// export default App

import logo from './logo.svg';
import './index.css'; // here we will use 'index.css' instead of 'app.css'
import React , {Component} from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { dblClick } from '@testing-library/user-event/dist/click';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; // to switch among pages
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;