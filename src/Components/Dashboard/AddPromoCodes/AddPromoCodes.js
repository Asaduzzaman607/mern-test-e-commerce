import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Sidebar/Sidebar'
import DatePicker from 'react-date-picker'
 import "react-datepicker/dist/react-datepicker.css";
 import './AddPromoCodes.css'
const AddPromoCodes = () => {

     const [startingDate, setStartingDate] = useState(new Date());
     const [endingDate, setEndingDate] = useState(new Date());
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        const formData = new FormData()
        formData.append('name', data.code)
        formData.append('discount', data.discount)
        formData.append('useTime', data.useTime)
        formData.append('startingDate', startingDate)
        formData.append('endingDate', endingDate)


        fetch('http://localhost:5000/addPromoCode', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Promo code placed Successfully')
                }
            })

           
    }

    return (
        <div className="container-fluid  row">
                
          <Sidebar></Sidebar>
      
        
            <div className="col-md-4 p-4 pr-5 mr-auto mt-3" >
                <form onSubmit={handleSubmit(onSubmit)} className="custom-form form-group pt-3">
                   <p>Promo Code</p>
                    <input required ref={register}   className='form-control mb-3' style={{ textTransform: 'uppercase' }} type="text" name="code" id="" />
                    <p>Start Date</p>
                    <DatePicker
                        onChange={setStartingDate}
                        value={startingDate}
                        name={startingDate}
                        className='date'
                    />
                    <p>End date</p>
                    <DatePicker
                        onChange={setEndingDate}
                        value={endingDate}
                        name={endingDate}
                        className='date'
                    />
                    <p>Discount Rate</p>
                    <input required ref={register} className='form-control mb-3 d-inline mr-4' type="number" name="discount" id="" />
                    <p>Use Time</p>
                    <input required ref={register}   className='form-control mb-3' type="number" name="useTime" id="" />
                    <div>
                    <button className="main-btn mb-4 ">Add</button>
                    </div>
                </form>
            </div>

    </div>
    );
};

export default AddPromoCodes;