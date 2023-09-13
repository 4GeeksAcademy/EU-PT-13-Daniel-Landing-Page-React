import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Card = (props) => {
	return (
        <div className="col">
            <div className="card text-center">
                <div className="card text-center">
                    <div className="card-header bg-white">
                        <img src={rigoImage} className="card-img-top" alt="..."/> 
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>                      
                    </div>
                    <div className="card-footer text-body-secondary">
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
		    </div>	
		</div>
	);
};

export default Card;