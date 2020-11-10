import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useHistory } from "react-router-dom";

const Checkout = () => {
	const [{ basket }, dispatch] = useStateValue();
	let history = useHistory();

	function handleClick() {
		history.push("/home");
	}
	return (
		<div className="checkout">
			<div className="checkout__left row">
				<div>
					<button
						className="main-btn"
						onClick={handleClick}
						style={{ cursor: "pointer" }}
					>
						Go back
					</button>

					{basket.map((item) => (
						<CheckoutProduct
							id={item._id}
							name={item.name}
							image={item.image}
							price={item.price}
							discount={item.discount}
							shipping={item.shipping}
							color={item.color}
							size={item.size}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Checkout;
