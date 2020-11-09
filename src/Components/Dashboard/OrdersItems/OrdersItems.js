import React, { useEffect, useState } from 'react';
import Orders from '../Orders/Orders';
import Sidebar from '../Sidebar/Sidebar';

const OrdersItems = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/getProducts/')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "##FAFAFA" }}>
                <Orders orders={orders} />
            </div>
        </div>
    );
};

export default OrdersItems;