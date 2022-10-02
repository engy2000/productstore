
import React from "react";

import { useHistory } from "react-router-dom";
import "./home.css"
export default function Home(props) {

  let history=useHistory()
  // console.log(props);
let goTop=()=>{
     history.push('/products')
}
    //  props.history.push('/movies')
//     let goTofavs=()=>{
//       history.push('/favs') 

// }

  return (
  <> 
  
  <div className="wall col-12"><h1>Welcome to our project</h1>
 
  <button className="btn btn-dark col-2 h-10" onClick={goTop}>go to products</button>
  {/* <button className="btn btn-dark col-4" >go to favs</button> */}
</div>
  
  
  </>
  );
}
