import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-na.ssl-images-amazon.com/images/G/01/sm/Evergreen_Shared/RebrandAssets/GW_1500x600_Apex_Roblox_LoL._CB408348441_.jpg"
				alt="banner"
			/>
			{/* PRODUCT ID, TITLE, IMAGE, PRICE, RATING */}
			<div class="home__row">
				<Product
					title="title"
					id="jfklakf"
					price={4}
					image="https://images-na.ssl-images-amazon.com/images/I/71OIpX%2Bvq2L._AC_SL1500_.jpg"
					rating={5}
				/>
				<Product
					title="title"
					id="jfklakf"
					price={4}
					image="https://images-na.ssl-images-amazon.com/images/I/71OIpX%2Bvq2L._AC_SL1500_.jpg"
					rating={5}
				/>
			</div>
			<div class="home__row">
				<Product
					title="title"
					id="jfklakf"
					price={4}
					image="https://images-na.ssl-images-amazon.com/images/I/71OIpX%2Bvq2L._AC_SL1500_.jpg"
					rating={5}
				/>
				<Product
					title="title"
					id="jfklakf"
					price={4}
					image="https://images-na.ssl-images-amazon.com/images/I/71OIpX%2Bvq2L._AC_SL1500_.jpg"
					rating={5}
				/>
				<Product
					title="title"
					id="jfklakf"
					price={4}
					image="https://images-na.ssl-images-amazon.com/images/I/71OIpX%2Bvq2L._AC_SL1500_.jpg"
					rating={5}
				/>
			</div>
		</div>
	);
}

export default Home;
