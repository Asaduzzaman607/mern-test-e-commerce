import React, { createContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import Checkout from "./Components/Checkout/Checkout";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import OrdersItems from "./Components/Dashboard/OrdersItems/OrdersItems";
import AddProducts from "./Components/Dashboard/AddProducts/AddProducts";
import PromoCodes from "./Components/Dashboard/PromoCodes/PromoCodes";
import AddPromoCodes from "./Components/Dashboard/AddPromoCodes/AddPromoCodes";
import Products from "./Components/Dashboard/Products/Products";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState([]);

	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Router>
				<div>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route path="/home">
							<Home></Home>
						</Route>
						<Route path="/checkout">
							<Checkout></Checkout>
						</Route>
						<Route path="/login">
							<Login></Login>
						</Route>
						<PrivateRoute path="/dashboard">
							<Dashboard></Dashboard>
						</PrivateRoute>
						<PrivateRoute path="/promoCodes">
							<PromoCodes></PromoCodes>
						</PrivateRoute>
						<PrivateRoute path="/addPromoCodes">
							<AddPromoCodes></AddPromoCodes>
						</PrivateRoute>
						<PrivateRoute path="/orders">
							<OrdersItems></OrdersItems>
						</PrivateRoute>
						<PrivateRoute path="/products">
							<Products></Products>
						</PrivateRoute>
						<PrivateRoute path="/addProduct">
							<AddProducts></AddProducts>
						</PrivateRoute>
						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
				</div>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
