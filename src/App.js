import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import GetInTouch from "./components/GetInTouch";
import Cart from "./components/Cart";
import Headers from "./components/Header/Headers";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Headers />
				<Routes>
					<Route exact path="" element={<Home />} />
					<Route exact path="/home" element={<Home />} />
					<Route exact path="/shop" element={<Shop />} />
					<Route exact path="/getintouch" element={<GetInTouch />} />
					<Route exact path="/cart:id" element={<Cart />} />
					<Route exact path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
