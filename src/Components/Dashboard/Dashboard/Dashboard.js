import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useStateValue } from '../../../Components/StateProvider/StateProvider';
import OrdersItems from '../OrdersItems/OrdersItems';
const containerStyle = {
    backgroundColor: "#ffffff",
}

const Dashboard = () => {
    const [email,setEmail] = useState('')
 
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://mern-doctors-portal-sajeeb.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="container-fluid row custom-dash">
                <div className="col-md-10 p-4 pr-5">
                <OrdersItems></OrdersItems>
                </div>
                
            </div>
        </section>
    );
};

export default Dashboard;