import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { useStateValue } from '../../../Components/StateProvider/StateProvider';
import { Container } from 'react-bootstrap';
const Sidebar = () => {
    const[{user},dispatch] = useStateValue();
    const [email,setEmail] = useState('')
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('https://mern-doctors-portal-sajeeb.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])

    return (

<Container className="ml-5 mt-5 custom-sidebar">
 <div>
        <h6 className="activeColor"> Promotion</h6>
        <ul>
            <li ><Link to='/promoCodes' className="activeColor">Promo Codes</Link></li>
            <li ><Link to='/addPromoCodes' className="activeColor">Add Promo Code</Link></li>
          </ul> <br /> <br />
        <Link to="/orders" className="activeColor"> Orders</Link> <br /> <br />
        <Link to="/products" className="activeColor"> Products</Link> <br /> <br />
    </div>

</Container>
    );
};

export default Sidebar;