import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";
function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const login = (e) => {
		e.preventDefault(); //stops the refresh
		//login logic
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				//logged in, redirect to homepage
				history.push("/");
			})
			.catch((e) => {
				alert(e.message);
			});
	};
	const register = (e) => {
		e.preventDefault(); //stops the refresh
		//register logic
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				//created a user and logged in succesfully^..
				history.push("/");
			})
			.catch((e) => {
				alert(e.message);
			});
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
					alt=""
					className="login__logo"
				/>
			</Link>

			<div class="login__container">
				<h1>Sign in</h1>
				<form action="">
					<h5>Email</h5>
					<input
						value={email}
						onChange={(e) => {
							//on change triggers an event
							setEmail(e.target.value);
						}}
						type="email"
					/>
					<h5>Password</h5>
					<input
						value={password}
						onChange={(e) => {
							//on change triggers an event
							setPassword(e.target.value);
						}}
						type="password"
					/>
					<button onClick={login} type="submit" className="login__signInButton">
						Sign in
					</button>
				</form>
				<p>
					You may need your own Amazon account to use certain Amazon Services,
					and you may be required to be logged in to the account and have a
					valid payment method associated with it.
				</p>
				<button onClick={register} className="login__registerButton">
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
