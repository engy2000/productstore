import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Favs() {
    let favList=useSelector((state)=>state.favorties)
  return (
    <>
      <div className="container">
        <div className="row">
          {favList.map((movie) => (
            <div
              className="card col-3 mt-5"
              // style={{ width: 300, marginLeft: 10, marginBottom: 10 }}
            >
              <img
                class="card-img-top"
                src={movie.image}
                alt="Card image"
              />
              <div class="card-body">
                <Link to={`/products/${movie.id}`}>{movie.title}</Link>
               
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favs;
