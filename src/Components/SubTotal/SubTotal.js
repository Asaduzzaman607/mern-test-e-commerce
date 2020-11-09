import React from "react";
import { useStateValue } from '../StateProvider/StateProvider';
import { getBasketTotal } from '../Reducer/Reducer';
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import "./SubTotal.css";

function Subtotal() {
  
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal col-md-4">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
              <br/>
              Discount:
              <br/>
              Shipping Charge:
              <br/>
              Wallet Debit:
              <input type="text"  name="code" placeholder="Type your code" className="mr-1 promo" />
              <button className="apply-btn">Apply</button>
              <br/>
              Total Payable:
            </p>
            
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"৳"}
      />
      

    </div>
  );
}

export default Subtotal;
