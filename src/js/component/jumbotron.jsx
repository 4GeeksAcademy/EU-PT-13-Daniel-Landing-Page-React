import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
	return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Welcome</h1>
        <p className="col-md-8 fs-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, nihil et saepe voluptas quo numquam tenetur? At atque beatae tempora pariatur tempore odit corporis itaque nisi, quos illo! Qui, veniam?</p>
        <button className="btn btn-primary btn-lg" type="button">Call to Action</button>
      </div>
    </div>
	);
};

export default Jumbotron;