import React, { useEffect, useState } from "react";
import "./products.css";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../../store/actions";


function Products() {
  let [moviesList, setmoviesList] = useState([]);
 
  const dispatch=useDispatch()

  const store=async()=>{
    const res= await fetch ('https://fakestoreapi.com/products');
    console.log(res);
    const resdata= await res.json();
    console.log(resdata);
    setmoviesList(resdata);
  }
  // store();
  useEffect(()=>
  {store()},[]);

  return (
    <>
      <div className="container">
        {/* <button className="btn btn-success" onClick={goPrev}>Prev</button>
        <button className="btn btn-success" onClick={goNext}>Next</button> */}
        <div className="row ">
          {moviesList.map((movie) => (
            <div
              className="card col-3 mt-5"
              // style={{ width: 300, marginLeft: 10, marginBottom: 10 }}
            >
              <img
                class="card-img-top mt-3"
                src={movie.image}
                alt="Card image"
              />
           
              <div class="card-body ">
                <Link to={`/products/${movie.id}`}>{movie.title}</Link>
                {/* <h4 class="card-title">{movie.title}</h4>
                    </Link> */}
                    
               <div className="d-flex justify-content-center ">  
                <button  class=" special" onClick={()=>dispatch(setFavorite(movie))}>
                 Add to Favorites
                </button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
