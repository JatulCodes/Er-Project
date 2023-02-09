import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shop.css";
const Shop = () => {
	const [cardData, setCardData] = useState([]);

	const getUser = async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		setCardData(await response.json());
	};

	useEffect(() => {
		getUser();
	}, []);
	return (
		<>
			<div className="cardMain">
				{cardData.map((curreitem) => {
					return (
						<div>
							<div className="container d-flex ">
								<figure className="card card-product-grid card-lg">
									<div href="#" className="img-wrap" data-abc="true">
										<img className="cardImg" src={curreitem.image} />
									</div>
									<figcaption className="info-wrap">
										<div className="row">
											<div className="col-md-9 col-xs-9">
												<a href="#" className="titleClass" data-abc="true">
													{curreitem.title}
												</a>
												<span className="rated">{curreitem.category}</span>
											</div>
											<div className="col-md-3 col-xs-3">
												<div className="rating text-right">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<span className="rated">
														Rating {curreitem.rating.rate}
													</span>
												</div>
											</div>
										</div>
									</figcaption>
									<div className="bottom-wrap-payment">
										<figcaption className="info-wrap">
											<div className="row">
												<div className="col-md-9 col-xs-9">
													<a href="#" className="titleClass" data-abc="true">
														₹{curreitem.price}
													</a>
													<span className="rated">VISA Platinum</span>
												</div>
												<div className="col-md-3 col-xs-3">
													<div className="rating text-right"> </div>
												</div>
											</div>
										</figcaption>
									</div>
									<div className="bottom-wrap">
										<a
											href="#"
											className="btn btn-primary float-right"
											data-abc="true"
										>
											Buy now
										</a>
										<div className="price-wrap">
											<a
												href="#"
												className="btn btn-warning float-left"
												data-abc="true"
											>
												Cancel
											</a>
										</div>
									</div>
								</figure>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Shop;
