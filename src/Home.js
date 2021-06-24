import React from "react";
import "./Home.css";
import Product from "./Product";
import { v4 as uuidv4 } from "uuid";
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
					title="Logitech C920S HD Pro - Privacy Shutter Webcam (Widescreen Video Calls and Recordings, 1080p Streaming Camera, Desktop or Laptop Webcam)"
					id={uuidv4}
					price={99.99}
					image="https://images-na.ssl-images-amazon.com/images/I/61-6uAf8soL._AC_SL1500_.jpg"
					rating={4}
				/>
				<Product
					title="Logitech C920S HD Pro - Privacy Shutter Webcam (Widescreen Video Calls and Recordings, 1080p Streaming Camera, Desktop or Laptop Webcam)"
					id={uuidv4}
					price={99.99}
					image="https://images-na.ssl-images-amazon.com/images/I/61-6uAf8soL._AC_SL1500_.jpg"
					rating={4}
				/>
				<Product
					title="Scepter E275W-19203R - 27 '' Ultra Slim 1080P LED Monitor, 2 HDMI VGA Integrated Speakers, 2018 Metallic Black, Metallic Black"
					id={uuidv4}
					price={109.99}
					image="https://images-na.ssl-images-amazon.com/images/I/81MdHBuHZEL._AC_SL1500_.jpg"
					rating={4}
				/>
			</div>
			<div class="home__row">
				<Product
					title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers (Black)
					"
					id={uuidv4}
					price={39.98}
					image="https://images-na.ssl-images-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg"
					rating={3}
				/>
				<Product
					title="Sony RX100 VII Premium Compact Camera with 1.0-Type Stacked CMOS Sensor (DSCRX100M7)"
					id={uuidv4}
					price={1198.99}
					image="https://images-na.ssl-images-amazon.com/images/I/718DfOPtpqL._AC_SL1320_.jpg"
					rating={5}
				/>
				<Product
					title="Logitech G Pro Wireless Gaming Mouse with Esports Grade Performance"
					id={uuidv4}
					price={119.99}
					image="https://images-na.ssl-images-amazon.com/images/I/41tJa8DO8SL._AC_SL1000_.jpg"
					rating={5}
				/>
			</div>
		</div>
	);
}

export default Home;
