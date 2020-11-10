import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import DatePicker from "react-date-picker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddPromoCodes.css";
import Header from "../../Header/Header";
const AddPromoCodes = () => {
	const { register, handleSubmit } = useForm();

	// needed states
	const [startingDate, setStartingDate] = useState(new Date());
	const [endingDate, setEndingDate] = useState(new Date());
	const [condition, setCondition] = useState(true);

	// getting input data using useForm
	const onSubmit = (data) => {
		const formData = new FormData();
		formData.append("name", data.code);
		formData.append("discount", data.discount);
		formData.append("useTime", data.useTime);
		formData.append("startingDate", startingDate);
		formData.append("endingDate", endingDate);
		formData.append("condition", condition);

		fetch("https://mern-test-e-commerce.herokuapp.com/addPromoCode", {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((result) => {
				if (result) {
					alert("Promo code placed Successfully");
				}
			});
	};

	// to handle to PromoCode conditionally
	const handlePromoCode = () => {
		setCondition(!condition);
	};

	return (
		<>
			<Header></Header>
			<div className="container-fluid  row">
				<Sidebar></Sidebar>

				<div className="col-md-4 p-4 pr-5 mr-auto mt-3">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="custom-form form-group pt-3"
					>
						<p>Promo Code</p>
						<input
							required
							ref={register}
							className="form-control mb-3"
							style={{ textTransform: "uppercase" }}
							type="text"
							name="code"
							id=""
						/>
						<p>Start Date</p>
						<DatePicker
							onChange={setStartingDate}
							value={startingDate}
							startingDate={startingDate}
							className="date"
						/>
						<p>End date</p>
						<DatePicker
							onChange={setEndingDate}
							value={endingDate}
							endingDate={endingDate}
							className="date"
						/>
						<p>Discount Rate</p>
						<input
							required
							ref={register}
							className="form-control mb-3 d-inline mr-4"
							type="number"
							name="discount"
							id=""
						/>
						<p>Use Time</p>
						<input
							required
							ref={register}
							className="form-control mb-3"
							type="number"
							name="useTime"
							id=""
						/>
						<div className="d-flex justify-space-between">
							<div>
								<p>Active</p>
							</div>
							<div>
								<label class="switch">
									<input
										type="checkbox"
										id="togBtn"
										name="condition"
										onChange={handlePromoCode}
									/>
									<span class="slider round"></span>
								</label>
							</div>
						</div>
						<div>
							<button className="main-btn mb-4 ">Add</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddPromoCodes;
