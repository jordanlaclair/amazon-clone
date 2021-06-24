import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
	//^^^destructuring products props so it can called on directly^^^^
	const [, dispatch] = useStateValue();
	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id,
				title,
				image,
				price,
				rating,
			},
		});
	};

	return (
		<div className="product">
			<div class="product__info">
				<p>{title}</p>
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
				<p class="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
			</div>
			<div class="product__image-button-wrap">
				<img src={image} alt="product" />
				<button onClick={addToBasket} className="product__button">
					Add to Cart
				</button>
			</div>
		</div>
	);
}

export default Product;
