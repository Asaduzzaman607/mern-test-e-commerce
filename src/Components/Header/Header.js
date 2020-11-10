import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link, useLocation } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import "./Header.css";
import logo from "../../images/logo.png";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import { UserContext } from "../../App";

const Header = (props) => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	const handleSearch = props.handleSearch;
	const location = useLocation();
	const [{ basket }, basketDispatch] = useStateValue();

	return (
		<nav className="pt-4 container nav-text">
			<Navbar bg="white" expand="lg">
				<Navbar.Brand href="/home">
					<img className="header-logo" width="200" src={logo} alt="" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{(location.pathname === "/" || location.pathname === "/home") && (
						<>
							<div className="header-search">
								<SearchSharpIcon className="header-search-icon"></SearchSharpIcon>
								<input
									className="header-search-input"
									onChange={handleSearch}
									type="text"
								/>
							</div>
						</>
					)}

					{location.pathname === "/" || location.pathname === "/home" ? (
						<>
							<Nav className="ml-auto align-items-center">
								<ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
								<Link to="/checkout" className="mr-3 ml-3 align-items-center">
									<h4 className="text-dark">Cart</h4>{" "}
								</Link>
								<Link to="/checkout">
									<span className="header-optionLineTwo header-basketCount warning text-dark">
										{basket?.length}
									</span>
								</Link>
								<Nav.Link to="/login" className="mr-5 align-items-center">
									<PermIdentityIcon></PermIdentityIcon>
								</Nav.Link>
							</Nav>
						</>
					) : (
						<>
							<Nav className="ml-auto align-items-center">
								<Nav.Link className="mr-5 align-items-center text-dark">
									{loggedInUser.name}
								</Nav.Link>
							</Nav>
						</>
					)}
				</Navbar.Collapse>
			</Navbar>
		</nav>
	);
};

export default Header;
