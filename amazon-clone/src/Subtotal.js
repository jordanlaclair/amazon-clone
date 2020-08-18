import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import { getBasketTotal } from "./reducer";

function Subtotal() {
	const [{ basket }] = useStateValue();
	return (
		<div className="subtotal">
			<CurrencyFormat
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeperator={true}
				prefix={"$"}
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} item(s)): <strong>{`${value}`}</strong>
						</p>
						<small className="subtotal_gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</>
				)}
			/>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
