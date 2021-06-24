import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import { useEffect } from "react";
//firebase is for the authentication and the hosting
function App() {
	const [{ user }, dispatch] = useStateValue();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				//the user logged in..
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				//the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
		return () => {
			//any cleanup operations go here
			unsubscribe();
		};
	}, []);
	console.log("USER IS:", user);
	// if {basket} was in the brackets, useEffect would run
	//onece on page load and everytime basket changes
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						{/*  default route */}
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
