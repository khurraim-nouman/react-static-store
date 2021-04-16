import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
   return (
      <nav class="navbar navbar-expand-md bg-light navbar-light">
        <Link to="/">
          <img class="navbar-brand" src="https://cdn.shopify.com/s/files/1/0268/1454/6031/files/Boosted-Boards-Scooters-Logo_200x.png?v=1586529318" />
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item mx-2">
              <Link to='/electric-skateboards'>
                <a class="nav-link" href="#">Electric Skateboards</a>
              </Link>
            </li>
            <li class="nav-item mx-2">
              <Link to="/electric-scooters">
                <a class="nav-link" href="#">Electric Scooters</a>
              </Link>
            </li>
            <li class="nav-item mx-2">
              <Link to="/accessories">
                <a class="nav-link" href="#">Accessories</a>
              </Link>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">Gift Card</a>
            </li>
            <li class="nav-item mx-2">
              <Link to="/contact">
                <a class="nav-link" href="#">Contact</a>
              </Link>
            </li>                
          </ul>
        </div>  
      </nav>
  );
}

export default Navbar;