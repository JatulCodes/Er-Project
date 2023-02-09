import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./ParralBox.module.css";

export default function App() {
	const alignCenter = { display: "flex", alignItems: "center" };
	return (
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
					<div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
						<h1>
							"Success is often achieved by those who don’t know that failure is
							inevitable." — Coco Chanel, fashion designer
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
	);
}
