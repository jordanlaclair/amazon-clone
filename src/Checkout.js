import React from "react";

import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";

function Checkout() {
	const [{ basket }] = useStateValue();

	return (
		<div className="checkout">
			<div class="checkout__left">
				<img
					src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primeday/PD18/AAFeedback/Bruno/1500x300_Starts_Banner_v2._CB474351192_.gif"
					className="checkout__ad"
					alt="advertisement"
				/>
				{basket?.length === 0 ? (
					<div>
						<h2>Your Shopping Basket is empty</h2>
						<p>
							You have no items in your basket. To buy one or more items, click
							"Add to basket!" next to the item.
						</p>
					</div>
				) : (
					<div>
						<h2 className="checkout__title">Your Shopping Basket</h2>
						{basket?.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				)}
			</div>
			{basket.length > 0 && (
				<div className="checkout__right">
					<Subtotal />
				</div>
			)}
		</div>
	);
}

export default Checkout;
