import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import "./AddProducts.css";
import Header from "../../Header/Header";
const AddProducts = () => {
	const { register, handleSubmit } = useForm();

	// needed states
	const [file, setFile] = useState(null);
	const [previewSource, setPreviewSource] = useState(null);
	const [condition, setCondition] = useState(true);

	// to preview to image
	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};

	// to handle to file
	const handleFileInput = (e) => {
		const file = e.target.files[0];
		setFile(file);
		previewFile(file);
	};
	// to handle to toggole function
	const handleToggle = () => {
		setCondition(!condition);
	};

	// to submit data from the input form
	const onSubmit = (data, e) => {
		const discountAmount = data.price / data.discount;
		const afterDiscount = data.price - discountAmount;

		const formData = new FormData();
		formData.append("file", file);
		formData.append("name", data.name);
		formData.append("shipping", data.shipping);
		formData.append("size", data.size);
		formData.append("color", data.color);
		formData.append("discount", data.discount);
		formData.append("price", data.price);
		formData.append("status", 1);
		formData.append("condition", condition);
		formData.append("discountAmount", discountAmount);
		formData.append("afterDiscount", afterDiscount);

		console.log(formData);

		fetch("https://mern-test-e-commerce.herokuapp.com/addProduct", {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((result) => {
				if (result) {
					alert("Order placed Successfully");
				}
			});
		e.preventDefault();
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
						<div className="file-container">
							<input
								onChange={handleFileInput}
								ref={register}
								className="upload-file-inp"
								type="file"
								name="file"
								id="uploadImg"
							/>
							<label
								htmlFor="uploadImg"
								id="upload-label"
								className="upload-file-btn text-center"
							>
								{" "}
								{previewSource && (
									<img
										src={previewSource}
										alt="chosen"
										style={{ height: "500px", width: "500px" }}
									/>
								)}
							</label>
						</div>
						<p>Product name</p>
						<input
							required
							ref={register}
							className="form-control mb-3"
							type="text"
							name="name"
							id=""
						/>
						<p>Product Price( Before Discount)</p>
						<input
							required
							ref={register}
							className="form-control mb-3 d-inline mr-4"
							type="number"
							name="price"
							id=""
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
						<p>Shipping Charge</p>
						<input
							required
							ref={register}
							className="form-control mb-3 d-inline mr-4"
							type="number"
							name="shipping"
							id=""
						/>
						<p>Color</p>
						<input
							required
							ref={register}
							className="form-control mb-3"
							type="text"
							name="color"
							id=""
						/>
						<p>Size</p>
						<input
							required
							ref={register}
							className="form-control mb-3"
							type="text"
							name="size"
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
										onChange={handleToggle}
									/>
									<span class="slider round"></span>
								</label>
							</div>
						</div>
						<div>
							<button className="main-btn mb-4">Add Product</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddProducts;
