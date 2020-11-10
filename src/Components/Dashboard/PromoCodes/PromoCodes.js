import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./PromoCodes.css";

const PromoCodes = () => {
	const [promoCodes, setPromoCodes] = useState([]);
	const [promoCode, setPromoCode] = useState([]);

	// fetching promo codes from the server side
	useEffect(() => {
		fetch("https://mern-test-e-commerce.herokuapp.com/getPromoCodes")
			.then((res) => res.json())
			.then((data) => setPromoCodes(data));
	}, []);

	// filtering promo code
	// const promo = promoCodes.filter((promoCode) => promoCode.name == "test2020");
	// setPromoCode(promo);

	return (
		<>
			<Header></Header>
			<div className="container-fluid  row">
				<Sidebar></Sidebar>

				<div className="col-md-8 p-4 pr-5 mr-auto mt-4">
					<div className="card-body-table">
						<div className="table-responsive">
							<table className="table ucp-table table-hover">
								<thead>
									<tr>
										<th style={{ width: 330 }}>1</th>
										<th style={{ width: 330 }}>TEST2020</th>
										<th style={{ width: 250 }}>
											{" "}
											<button className="main-btn">Edit</button>
										</th>
										<th style={{ width: 250 }}>
											{" "}
											<button className="act-btn">Activate</button>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Created at: 10.09AM, 3/11/2020</td>
										<td>Usages: 0</td>
										<td>Discount Rate: 3%</td>
										<td>Start Date: 4/11/2020</td>
										<td>End Date: 6/11/2020</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PromoCodes;
