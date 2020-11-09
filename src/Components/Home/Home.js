import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData'
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import { useStateValue } from '../StateProvider/StateProvider';
const Home = () => {
    const [products, setProducts] = useState([])
    console.log(products)
  
    useEffect( () => {
        fetch('http://localhost:5000/getProducts')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
  
    return (
     
             <div className="row">
                {
                    products.map(product=><Shop product={product} ></Shop> )
                }
               
            </div>
      
    );
};

export default Home;