import React from "react";
import "./Home.css";
import ParralBox from "./ParralBox";
import { NavLink } from "react-router-dom";
import Swipper from "./Swipper";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./ParralBox.module.css";
const Home = () => {
	const alignCenter = { display: "flex", alignItems: "center" };
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			console.log(entry);
			if (entry.isIntersecting) {
				entry.target.classList.add("show");
			} else {
				entry.target.classList.remove("show");
			}
		});
	});
	const hiddenElements = document.querySelectorAll(".hidden");
	hiddenElements.forEach((el) => observer.observe(el));
	return (
		<>
			<div className="home">
				{/* <img className="homeImg" src="/bg-1.jpg" alt="img" /> */}

				<h1 className="FrontText">
					<span>Move</span>for your<span>well being</span>
				</h1>
			</div>
			<section className="swiper">
				<Swipper />
			</section>
			<section className="hidden">
				<h1 className="paragrap">
					Our application increases engagement of your employees and reduces
					your carbon footprint. All this... while having fun.
				</h1>
			</section>
			<section className="hidden">
				<h1 className="paragrap1">
					It’s high time for all of us to think about our impression and
					capacity to lessen the waste and its impacts on the climate. This must
					be finished by settling on a responsible choice of utilizing
					eco-friendly products.
				</h1>
			</section>
			<div className="logos">
				<div className="logo hidden">
					<img className="imgIcons" src="/icon1.png" alt="img" />
					<img className="imgIcons" src="/icon2.png" alt="img" />
					<img className="imgIcons" src="/icon3.png" alt="img" />
					<img className="imgIcons" src="/icon4.png" alt="img" />
					<img className="imgIcons" src="/icon5.png" alt="img" />
					<br />
					<div className="wrapper">
						<div className="link_wrapper">
							<NavLink to="/" className="anchortag">
								Contact Us
							</NavLink>
							<div className="icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 268.832 268.832"
								>
									<path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mainAminamtion">
				<div className={styles.background} />

				<Parallax pages={5}>
					<ParallaxLayer
						offset={0}
						speed={0.5}
						style={{ ...alignCenter, justifyContent: "center" }}
					>
						<h1 className={styles.scrollText}>
							what are the quatified benefits for my company
						</h1>
						<img className={styles.ImageInScroll} src="/bg-3.jpg" alt="img" />
					</ParallaxLayer>

					<ParallaxLayer
						sticky={{ start: 1, end: 3 }}
						style={{ ...alignCenter, justifyContent: "flex-start" }}
					>
						<div className={` ${styles.sticky}`}>
							<img className={styles.leftImg} src="/bg-5.jpg" alt="img" />
						</div>
					</ParallaxLayer>

					<ParallaxLayer
						offset={1.5}
						speed={1.5}
						style={{ ...alignCenter, justifyContent: "flex-end" }}
					>
						<div
							className={`${styles.card} ${styles.parallax} ${styles.purple}`}
						>
							<h1>
								"Success is often achieved by those who don’t know that failure
								is inevitable." — Coco Chanel, fashion designer
							</h1>
						</div>
					</ParallaxLayer>

					<ParallaxLayer
						offset={2.5}
						speed={1.5}
						style={{ ...alignCenter, justifyContent: "flex-end" }}
					>
						<div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
							<h1>
								"Do the best you can until you know better. Then when you know
								better, do better." — Maya Angelou
							</h1>
						</div>
					</ParallaxLayer>
				</Parallax>
			</div>
			<h1>footer</h1>
		</>
	);
};

export default Home;
