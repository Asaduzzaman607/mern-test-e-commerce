import React, { useState } from "react";
import "./Orders.css";

const Orders = ({ orders, handleFilteredOrder }) => {
	const [categorizedOrder, setCategorizedOrder] = useState({});

	const handleChange = (id, status, e) => {
		const data = { id: id, status: status };

		fetch(`https://mern-test-e-commerce.herokuapp.com/updateOrder/`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
			});
	};

	return (
		<main>
			<div className="container-fluid row">
				<div onClick={handleFilteredOrder} className="col-xl-3 col-md-3 box ">
					<div className="card-content px-3 mx-3 my-3 py-2">
						<span className="card-title ">All</span>
					</div>
				</div>
				<div
					onClick={() => {
						handleFilteredOrder(1);
					}}
					className="col-xl-3 col-md-3 box"
				>
					<div className="card-content2 px-3 mx-3 my-3 py-2">
						<span className="card-title">Pending</span>
					</div>
				</div>
				<div
					onClick={() => {
						handleFilteredOrder(2);
					}}
					className="col-xl-3 col-md-3 box"
				>
					<div className="card-content1 px-3 mx-3 my-3 py-2">
						<span className="card-title">Confirmed</span>
					</div>
				</div>
				<div
					onClick={() => {
						handleFilteredOrder(3);
					}}
					className="col-xl-3 col-md-3 box"
				>
					<div className="card-content3 px-3 mx-3 my-3 py-2">
						<span className="card-title">Cancelled</span>
					</div>
				</div>
				<div className="col-xl-12 col-md-12">
					<div className="card card-static-2 mb-30">
						<div className="card-body-table">
							<div className="table-responsive">
								<table className="table ucp-table table-hover">
									<thead>
										<tr>
											<th style={{ width: 130 }}>SL</th>
											<th style={{ width: 330 }}>Order No</th>
											<th style={{ width: 200 }}>Item Price</th>
											<th style={{ width: 250 }}>Action</th>
											<th style={{ width: 130 }}>Status</th>
										</tr>
									</thead>
									<tbody>
										{orders.length == 0 ? (
											<div
												className="spinner-border text-success text-center"
												style={{ width: "3rem", height: "3rem" }}
												role="status"
											>
												<span className="sr-only">Loading...</span>
											</div>
										) : (
											orders.map((order) => (
												<tr key={order._id} scope="row">
													<td>1</td>
													<td>123456</td>

													<td>{order.price}</td>
													<td>
														{
															<>
																<button
																	className="main-btn mr-2"
																	onClick={() => handleChange(order._id, 2)}
																>
																	Confirm
																</button>
																<button
																	className="cancel-btn"
																	onClick={() => handleChange(order._id, 3)}
																>
																	Cancel
																</button>
															</>
														}
													</td>
													<td>
														<p>
															{order.status == 1
																? "Pending"
																: order.status == 2
																? "Confirmed"
																: "Cancelled"}
														</p>
													</td>
												</tr>
											))
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Orders;
