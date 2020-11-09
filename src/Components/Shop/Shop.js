import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import './Shop.css'

const Shop = (props) => {
    
    const {price,_id,image,name,discount, shipping,color, size} = props.product;
    const[{basket},dispatch] = useStateValue();
    const location = useLocation();
    const addToBasket =()=>{
        dispatch({
            type:"Add-to-basket",
            item:{
                id:_id,
                name:name,
                image:image.img,
                price:price,
                discount:discount,
                shipping: shipping,
                color:color,
                size:size

            }
        })
        
    }
    const removeFromBasket = () => {
        dispatch({
            type: 'Remove-from-basket',
            id:_id,
        })
    }
    return (  
  
        <div className="wrapper m-3 px-2 mx-5">
        <div className="card custom-card">
          <img src={`data:image/png;base64,${image.img}`} style={{ width: "192px", height: "210px" }} />
          <div className="titles">
            <h6>{name}</h6>
          </div>
          <div className="footers d-flex justify-content-between">
            <h6>BDT. {price}</h6>
            <span class="badge badge-warning">{discount}%</span>
          </div>
          
        </div>
      <button onClick={addToBasket} className="btn btn-warning btn-cust">Add to cart</button>
      </div>



    );
};

export default Shop;