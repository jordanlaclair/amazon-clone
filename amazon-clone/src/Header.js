import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
	const [{ basket, user }] = useStateValue();
	console.log(basket);
	const login = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<nav className="header">
			{/* logo */}
			<Link to="/">
				<img
					className="header__logo"
					src="https://jordantravers.com/wp-content/uploads/2018/10/Amazon-Logo-1024x373.png"
					alt="amazon-logo"
				/>
			</Link>
			{/* searchbar */}
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			{/* links */}
			<div className="headerNav">
				{/* if the user doesnt exist, then show login page */}
				<Link to={!user && "/login"} className="header__link">
					{/* These Link components allow for SPA Single Page Application rendering */}
					<div onClick={login} className="header__option">
						<span className="header__option__line1">Hello, {user?.email}</span>
						<span className="header__option__line2">
							<strong>{user ? "Sign Out" : "Sign In"}</strong>
						</span>
					</div>
				</Link>
				<Link to="/" className="header__link">
					{/* These Link components allow for Single Page Application rendering */}
					<div className="header__option">
						<span className="header__option__line1">Returns</span>
						<span className="header__option__line2">
							<strong>& Orders</strong>
						</span>
					</div>
				</Link>
				<Link to="/" className="header__link">
					{/* These Link components allow for Single Page Application rendering */}
					<div className="header__option">
						<span className="header__option__line1">Your</span>
						<span>
							<strong>Prime</strong>
						</span>
					</div>
				</Link>

				{/* cart with number */}
				<Link to="/checkout" className="header__link">
					{/* These Link components allow for Single Page Application rendering */}
					<div className="header__optionBasket">
						<ShoppingCartIcon />
						<span className="basketCount">{basket?.length}</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
