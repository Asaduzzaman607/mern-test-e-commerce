import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";
import "./Home.css";

const Home = () => {
	const location = useLocation();

	// needed states
	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState("");

	//handle searching operation

	const handleSearch = (event) => {
		setSearch(event.target.value);
	};

	//loading data after each action on search input
	useEffect(() => {
		fetch(
			"https://mern-test-e-commerce.herokuapp.com/searchedProducts?search=" +
				search
		)
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, [search]);

	//loading data from the server side
	useEffect(() => {
		fetch("https://mern-test-e-commerce.herokuapp.com/getProducts")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<>
			{location.pathname === "/products" ? (
				<>
					<Header></Header>
					<div className="btn-position">
						<Link to="/addProduct">
							<button className="add-btn mt-5 mb-5">Add Product</button>
						</Link>
					</div>
					<div className="container-fluid  row">
						<Sidebar></Sidebar>

						{products.map((product) => (
							<Shop product={product}></Shop>
						))}
					</div>
				</>
			) : (
				<>
					<Header handleSearch={handleSearch}></Header>

					<div className="row">
						{products.map((product) => (
							<Shop product={product} key={product._id}></Shop>
						))}
					</div>
				</>
			)}
		</>
	);
};

export default Home;
