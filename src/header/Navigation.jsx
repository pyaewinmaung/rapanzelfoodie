import React from 'react'
import Navitem from './Navitem'
import userimage from '../assets/img/users/user1.jpg'

const Navigation = () => {
	return (
		<>
			<header>

				{/* Start nav bar  */}
				<div className="container">
					<nav className="navbar navbar-expand-lg fixed-top shadow">

						<a href="index.html" className="navbar-brand">
							<span className="text-uppercase fw-bold h4 mx-2">Foodie  <span className="h5">Panzel</span></span>
						</a>

						<button type="button" className="navbar-toggler navbuttons " data-bs-toggle="collapse" data-bs-target="#nav">
							<div className="bg-light lines1"></div>
							<div className="bg-light lines2"></div>
							<div className="bg-light lines3"></div>
						</button>

						<div id="nav" className="navbar-collapse collapse justify-content-end text-uppercase gap-3 spa fw-bold">
							<ul className="navbar-nav">
								<Navitem navname="Home" navlink="home" />
								<Navitem navname="Recipes"  navlink="recipes" />
								<Navitem navname="About Us"  navlink="about" />
								<Navitem navname="Contact"  navlink="contact" />
							</ul>

							<div className="d-flex">
								<form action="" class="me-md-3">
									<input type="text" className="form-control-sm navsearchs" />
								</form>


								<div>
									<a href="#" className="btn btn-primary">Register</a>
								</div>

								{/* <div>
									<a href="register" target="_blank">
										<img src={userimage} alt="user1" className="userimgs" />
									</a>
								</div> */}
							</div>


						</div>



					</nav>
				</div>
				{/* End nav bar  */}


			</header>
		</>
	)
}

export default Navigation