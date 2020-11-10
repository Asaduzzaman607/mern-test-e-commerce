import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Orders from "../Orders/Orders";
import Sidebar from "../Sidebar/Sidebar";

const OrdersItems = () => {
	const [orders, setOrders] = useState([]);
	const [status, setStatus] = useState("");

	useEffect(() => {
		fetch("https://mern-test-e-commerce.herokuapp.com/getCondProduct" + status)
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, [status]);

	const handleFilteredOrder = (filteredOrder) => {
		if (filteredOrder) {
			setStatus("?status=" + filteredOrder);
		}
	};

	return (
		<>
			<Header></Header>
			<div className="container-fluid row">
				<Sidebar></Sidebar>
				<div
					className="col-md-10 p-4 pr-5"
					style={{
						position: "absolute",
						right: 0,
						backgroundColor: "##FAFAFA",
					}}
				>
					<Orders orders={orders} handleFilteredOrder={handleFilteredOrder} />
				</div>
			</div>
		</>
	);
};

export default OrdersItems;
