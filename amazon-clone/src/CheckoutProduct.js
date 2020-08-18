import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ title, id, rating, image, price }) {
	const [, dispatch] = useStateValue();
	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id,
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__picture" src={image} alt="product" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div class="product__rating">
					{Array(rating)
						.fill()
						.map(() => (
							<p>
								<img
									src="https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/rating-star-icon-11-256.png"
									alt="star-rating"
								/>
							</p>
						))}
				</div>

				<button onClick={removeFromBasket}>Remove from basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
