import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider/StateProvider';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { useHistory } from 'react-router-dom';

function CheckoutProduct({price,_id,image,name,discount, shipping,color, size}) {
    const[{basket},dispatch] = useStateValue();
    const history = useHistory();

    const removeFromBasket = () => {
        dispatch({
            type: 'Remove-from-basket',
            id:_id,
        })
    }

    return (
        <div className='checkoutProduct row'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info col-md-3'>
            <p className='checkoutProduct__title'>{name}</p>
                <div className="d-flex">
                <p className='checkoutProduct__title'>Color: {color}</p>
                <p className='checkoutProduct__title'>Size:{size}</p>

                </div>
                
                <div>
                <p className="checkoutProduct__price">
                Product Price:{price}
                </p>
                </div>
                   
                </div>
                <div className='checkoutProduct__info col-md-3'>
                
                <p className='checkoutProduct__title'>Shipping Method :EMS</p>
                <p className='checkoutProduct__title'>Shipping Charge {shipping}</p>

               
                   
                </div>
                <div className='checkoutProduct__info col-md-3'>
               
                <p className='checkoutProduct__title'>quantity</p>
                <p className='checkoutProduct__title'>Total Price:{price}</p>

        
                   
                </div>
                <DeleteForeverOutlinedIcon className='dlt-btn' onClick={removeFromBasket}></DeleteForeverOutlinedIcon>
                <div className="col-md-6">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                    <label class="form-check-label" for="exampleRadios2">
                    I agree to the Terms and Conditions, Privacy Policy & Refund Policy.
                    </label>

                </div>
                <div className="col-md-3">
                <button className='my-4 checkout-btn' onClick={(e) => history.push("/payment")}>
                  Proceed to Checkout
                 </button>
                </div>
            </div>
       
    )
}

export default CheckoutProduct