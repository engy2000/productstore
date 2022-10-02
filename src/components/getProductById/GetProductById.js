import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import "./GetProductById.css"

function GetProductById() {
  let params = useParams();

  let [movie, setMovie] = useState({});
  let lang = useSelector((state) => state.lang);

 
  
  const store=async()=>{
    let newid=parseInt(params.id)
    const res= await fetch ('https://fakestoreapi.com/products/'+newid);
    // console.log(res);
    const resdata= await res.json();
    console.log(resdata);
   
    
    // console.log(newid);
    // let selectedfilm=await resdata.filter((item)=>item.id===newid);
    // let film=await selectedfilm.json();
    setMovie(resdata);
    // console.log(params.id)
    // console.log(typeof(res));

    // console.log(selectedfilm);
    console.log(movie);
    
  }
  // store();
  useEffect(()=>
  {store()},[]);
  return (
    <>
    <div className="container">
      <div class="wrapper">
        <div class="main_card">
          <div class="card_left">
            <div class="card_datails">
              <h2>{movie.title}</h2>
              <div class="card_cat">
                <h5 class="price">price: {movie.price}</h5>
                
                
              </div>
              <h4 class="disc">{movie.description}</h4>
              
            </div>
          </div>
          <div class="card_right">
            <div class="img_container">
              <img 
                src={movie.image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default GetProductById;
