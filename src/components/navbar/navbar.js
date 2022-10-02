import React, { useState } from "react";
import "./navbar.css";
// import HomeIcon from "@mui/material/Icon";
// import Icon from "@mui/material/Icon";
import NavLink from "../link/link";
import { useDispatch, useSelector } from "react-redux";
import changeLang from "../../store/actions";

function Navbar() {
  const dispatch=useDispatch()
  let [navelements, setnavelements] = useState([
    { data: "/", content: "Home" },
    { data: "/products", content: "Products" },
   
   { data: "/favs", content: "Favorities" },
  ]);
  let lang = useSelector((state) => state.lang);
   let toggleLanguage=()=>{
          dispatch(changeLang(lang=='en-US'?'ar-SA':'en-US'))
   }
  return (
    <>
      <div className="">
        <nav class="navbar navbar-expand-lg p-4 backg" style={{color:"white"}}>
          <a class="navbar-brand np" href="#">
           Products store
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {navelements.map((item) => (
                <NavLink data={item.data} content={item.content} />
              ))}
              
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
