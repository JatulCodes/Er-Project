import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

const Swipper = () => {
	return (
		<div className="Homaswipper">
			<Swiper
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#fff",
				}}
				speed={600}
				parallax={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Parallax, Pagination, Navigation]}
				className="mySwiper"
			>
				<div
					slot="container-start"
					className="parallax-bg"
					style={{
						"background-image":
							"url(https://source.unsplash.com/random/1920x1080/?wallpaper,landscape)",
					}}
					data-swiper-parallax="-23%"
				></div>
				<SwiperSlide>
					<div className="titleClass" data-swiper-parallax="-300">
						Hello!
					</div>
					<div className="subtitle" data-swiper-parallax="-200">
						Good Moring!
					</div>
					<div className="text" data-swiper-parallax="-100">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
							laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
							Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
							Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
							ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
							tincidunt ut libero. Aenean feugiat non eros quis feugiat.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="titleClass" data-swiper-parallax="-300">
						Hi
					</div>
					<div className="subtitle" data-swiper-parallax="-200">
						I'am Jatul
					</div>
					<div className="text" data-swiper-parallax="-100">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
							laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
							Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
							Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
							ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
							tincidunt ut libero. Aenean feugiat non eros quis feugiat.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="titleClass" data-swiper-parallax="-300">
						How are You
					</div>
					<div className="subtitle" data-swiper-parallax="-200">
						Hope All Good
					</div>
					<div className="text" data-swiper-parallax="-100">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
							laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
							Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
							Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
							ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
							tincidunt ut libero. Aenean feugiat non eros quis feugiat.
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Swipper;
