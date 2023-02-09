import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import "./logo.scss";

const Headers = () => {
	// Hide Header on on scroll down
	const openNav = () => {
		document.getElementById("mySidebar").style.width = "400px";
		document.getElementById("main").style.marginRight = "400px";
	};

	const closeNav = () => {
		document.getElementById("mySidebar").style.width = "0";
		document.getElementById("main").style.marginRight = "0";
	};
	return (
		<>
			<nav className="Mainnav">
				<div class="navbar">
					<NavLink to="/">
						<div class="title">SQUAD EASY</div>
					</NavLink>

					<ul className="navLinks">
						<li>
							<NavLink to="/Home" className="NavButton">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/shop" className="NavButton">
								Shop
							</NavLink>
						</li>
						<li>
							<NavLink to="/getintouch" className="NavButton">
								GetInTouch
							</NavLink>
						</li>
						<li className="cart">
							<div id="mySidebar" class="sidebar">
								<a href="#" class="closebtn" onClick={closeNav}>
									×
								</a>
								<div className="cartCintainer">
									<h3 className="cartHeading">Shopping cart</h3>
								</div>
							</div>
							<div id="main" className="main">
								<img
									src="/cart-icon.svg"
									className="cartIcon"
									onClick={openNav}
									alt="img"
								></img>
							</div>
							{/* class="openbtn" onclick="openNav()"> */}
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
export default Headers;
