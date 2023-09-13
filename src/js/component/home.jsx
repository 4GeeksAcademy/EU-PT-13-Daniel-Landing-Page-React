import React from "react";

//include images into your bundle
import Footer from './footer';
import Navbar from './navbar';
import Jumbotron from './jumbotron'
import Card from './card'

//create your first component
const Home = () => {
	return (
		<div className="container-fluid" >
			<div className="col mx-auto">
				<Navbar/>
			</div>
			
			<div className="col-10 mx-auto">
				<div className="container-fluid ">
					
					<Jumbotron />
					<div className="row d-flex gap-5 my-5">
						<Card title="Card Tittle1" text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quia quo a sed ad fugit ipsa dignissimos. Neque commodi repudiandae beatae, impedit aliquid magnam, ipsam nulla nemo itaque voluptas obcaecati?'/>
						<Card title="Card Tittle2" text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quia quo a sed ad fugit ipsa dignissimos. Neque commodi repudiandae beatae, impedit aliquid magnam, ipsam nulla nemo itaque voluptas obcaecati?'/>
						<Card title="Card Tittle3" text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quia quo a sed ad fugit ipsa dignissimos. Neque commodi repudiandae beatae, impedit aliquid magnam, ipsam nulla nemo itaque voluptas obcaecati?'/>
						<Card title="Card Tittle4" text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quia quo a sed ad fugit ipsa dignissimos. Neque commodi repudiandae beatae, impedit aliquid magnam, ipsam nulla nemo itaque voluptas obcaecati?'/>
						
					</div>
				</div>
			</div>
			
			<div className="container-fluid">
				<Footer/>
			</div>
		</div>



	);
};

export default Home;
