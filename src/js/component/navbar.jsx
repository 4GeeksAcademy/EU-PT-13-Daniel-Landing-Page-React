import React from "react";

//include images into your bundle


//create your first component
const Navbar = () => {
	return (

	<nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid ">
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand text-white" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav ">
              <li className="nav-item">
                  <a className="nav-link active text-white" >Home</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link active text-white-50" >About</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link active text-white-50" >Services</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link active text-white-50" >Contact</a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

	);
};

export default Navbar;