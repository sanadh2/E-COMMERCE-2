import { Link } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router-dom";
import './pages/styles/Navbar.css'
const Navbar = () => {
  return (
    <>
    
      <div className="main">
        <a className="name" href="#">Shopify</a>
        <div className="nav">
          
          <Link to="/about"> About</Link>
          <Link to="/home">Home</Link>
          <Link to="/">Login</Link>
          <Link to="/signup">SignUp</Link>
        </div>
      </div>
      <Outlet/>
    </>
  );
};
export default Navbar;