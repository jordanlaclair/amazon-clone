import React from "react";
import "./Product.css";
function Product({ id, title, image, price, rating }) {
	//^^^destructuring products props so it can called on directly^^^^
	return (
		<div className="product">
			<div class="product__infoo">
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
			<img src={image} alt="product" />
			<button className="product__button">Add to Cart</button>
		</div>
	);
}

export default Product;
