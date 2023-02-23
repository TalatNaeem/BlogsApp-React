// import { useState , useEffect, useSyncExternalStore } from "react";

// const useFetch = (url) => {
//       // ab hum blogs ko fetch kr k layn gy to initially 'blogs' ka object null rakha hy 
//     const [data, setData] = useState(null);
//     const [IsPending , setIsPending] = useState(true);
//     const [error , setError] = useState(null);
//     // agar hum jaldi jaldi page switch kryn & during that hamar fetch ki call chl rhi ho fazool ma to usy avoid krny k liay abortController
//     // use krty hain jo us call ko interrupt kr k time save krta hy & error ya warning say bachata hy
//     const abortConst = new AbortController();

//     useEffect (() => {
//         fetch(url , {signal: abortConst.signal})
//         .then(res => {
//           if (!res.ok){
//             throw Error("Server tak request gai but ya server exist ni krta ya response khali hy")
//           }
//           return res.json();
//         })
//         .then(data =>{
//           setData(data);
//           setIsPending(false);
//           setError(null);
//         })
//         .catch((err) => {
//           // if (err.name === "AbortError"){
//           //   console.log("fetch aborted");
//           // }
//           // else
//             setIsPending(false);
//             setError(err.message);
//         });
//         // return () => abortConst.abort();
//       } , [url])

//     return {data , IsPending , error};
// }

// export default useFetch;

import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;