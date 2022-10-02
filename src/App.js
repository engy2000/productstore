import "./App.css";

import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";

import Home from "./components/home/home";
import GetProductById from "./components/getProductById/GetProductById";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Favs from "./components/favs/favs";



function App() {
  var title = "Movies";

  return (
    <>
     
      <Router>
      <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" exact component={GetProductById} />
        <Route path="/home" component={Home} />
        <Route path="/favs" component={Favs} />
        
      </Router>
    </>
  );
}

export default App;
