import { v4 as uuidv4 } from "uuid";
export const initialState = {
	basket: [
		{
			title:
				"Logitech C920S HD Pro - Privacy Shutter Webcam (Widescreen Video Calls and Recordings, 1080p Streaming Camera, Desktop or Laptop Webcam)",
			id: uuidv4(),
			price: 99.99,
			image:
				"https://images-na.ssl-images-amazon.com/images/I/61-6uAf8soL._AC_SL1500_.jpg",
			rating: 4,
		},
	],
	user: null,
};

export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			//LOGIC FOR ADDING ITEM TO BASKET
			return { ...state, basket: [...state.basket, action.item] };
		case "REMOVE_FROM_BASKET":
			//LOGIC FOR REMOVING ITEM FOR BASKET
			//here we clone the basket
			let newBasket = [...state.basket];
			// finds the index of the id that matches
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			//if the index exists, cut it out
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Can't remove product (id: ${action.id} as its not in basket.)`
				);
			}
			return { ...state, basket: newBasket };
		default:
			return state;
	}
};
export default reducer;
//pass in types to your dispatches so
//you can use them as cases inside your reducer
//ex: {type: "increment"} if you were adding something

//useReducer
//1.reducer is the function that gets called to get new state.
//2.the initial value
//the dispatch function calls the reducer method based on
//certain parameters/types.
//dispatch gets set equal to action.

//useContext
