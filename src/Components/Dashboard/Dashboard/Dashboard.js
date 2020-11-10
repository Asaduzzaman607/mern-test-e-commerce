import React from "react";
import "react-calendar/dist/Calendar.css";
import OrdersItems from "../OrdersItems/OrdersItems";

const containerStyle = {
	backgroundColor: "#ffffff",
};

const Dashboard = () => {
	return (
		<section>
			<div style={containerStyle} className="container-fluid row custom-dash">
				<div className="col-md-10 p-4 pr-5">
					<OrdersItems></OrdersItems>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
