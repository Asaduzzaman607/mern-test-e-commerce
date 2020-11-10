import React, { useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider/StateProvider";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { useHistory } from "react-router-dom";

function CheckoutProduct({
	price,
	_id,
	image,
	name,
	shipping,
	color,
	size,
	discount,
}) {
	const history = useHistory();

	// needed states

	const [{ basket }, dispatch] = useStateValue();
	const [count, setCount] = useState(1);

	const removeFromBasket = () => {
		dispatch({
			type: "Remove-from-basket",
			id: _id,
		});
	};

	// handle amount
	const handleCount = (q) => {
		if (price * count > 0) {
			setCount(count + q);
		}
	};

	// basket length
	const items = basket.length;

	// amount counting
	let total = (price * count).toFixed(2);

	const discountAmount = price / discount;

	const totalDiscount = parseFloat(discountAmount.toFixed(2));

	const afterDiscount = total - totalDiscount;

	const priceAfterDiscount = parseFloat(afterDiscount.toFixed(2));
	const shippingCharge = parseInt(shipping);
	const grandTotal = priceAfterDiscount + shippingCharge;

	return (
		<>
			<div>
				<div className="checkoutProduct row m-5">
					<img className="checkoutProduct__image" src={image.img} />

					<div className="checkoutProduct__info col-md-3">
						<p className="checkoutProduct__title">{name}</p>
						<div className="d-flex">
							<p className="checkoutProduct__title">Color: {color}</p>
							<p className="checkoutProduct__title ml-3">Size:{size}</p>
						</div>

						<div>
							<p className="checkoutProduct__price">
								Product Price:BDT.{(price * count).toFixed(2)}
							</p>
						</div>
					</div>
					<div className="checkoutProduct__info col-md-3">
						<p className="checkoutProduct__title">Shipping Method :EMS</p>
						<p className="checkoutProduct__title">
							Shipping Charge: :BDT. {shipping}
						</p>
					</div>
					<div className="price-quantity">
						<div className="quantity-container d-flex">
							<p className="minus" onClick={() => handleCount(-1)}>
								-
							</p>
							<p className="quantity">{count}</p>
							<p className="plus" onClick={() => handleCount(+1)}>
								+
							</p>
						</div>
						<div>
							<p>Total Price:{grandTotal}</p>
						</div>
					</div>
					<DeleteForeverOutlinedIcon
						className="dlt-btn"
						onClick={removeFromBasket}
					></DeleteForeverOutlinedIcon>
				</div>
				<form className="row m-5 custom-form2">
					<div className="col-md-6">
						<input
							class="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios2"
							required="required"
							value="option2"
						/>
						<label>
							I agree to the Terms and Conditions, Privacy Policy & Refund
							Policy.
						</label>
					</div>
					<div className="col-md-3">
						<button
							type="submit"
							className="my-4 checkout-btn"
							onClick={(e) => history.push("/dashboard")}
						>
							Proceed to Checkout
						</button>
					</div>
				</form>
				<div>
					<div className="col-md-3 custom-cart">
						<p>
							Subtotal ({items} items): <strong>{total}</strong>
							<br />
							Discount: {totalDiscount}
							<br />
							Shipping Charge:{shipping}
							<br />
							Wallet Debit: 0
							<div className="d-flex custom-btn">
								<input
									type="text"
									name="code"
									placeholder="Type your code"
									className="mr-1 promo"
								/>
								<button className="apply-btn">Apply</button>
							</div>
							<br />
							Total Payable: {grandTotal}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default CheckoutProduct;
