import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Col, Form, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import './Products.css'
const Products = () => {
    const [email,setEmail] = useState('')
    const[name,setName] = useState('');
    const { register, handleSubmit } = useForm()
    const [file, setFile] = useState(null)
    const [previewSource, setPreviewSource] =useState(null)
    const previewFile=(file)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
            setPreviewSource(reader.result)
        }
    }
    const handleFileInput = e =>{
        const file = e.target.files[0];
        setFile(file)
        previewFile(file)
    }
    // const handleFile = e =>{
    //     const file = e.target.files[0];
    //     setFile(file)
    // }
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', data.name)
        formData.append('shipping', data.shipping)
        formData.append('size', data.size)
        formData.append('color', data.color)
        formData.append('discount', data.discount)
        formData.append('price', data.price)
        formData.append('status', "Pending")

        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Order placed Successfully')
                }
            })

           
    }

    return (
        <div className="container-fluid  row">
                
          <Sidebar></Sidebar>
      
        
            <div className="col-md-4 p-4 pr-5 mr-auto mt-3" >
                <form onSubmit={handleSubmit(onSubmit)} className="custom-form form-group pt-3">
                <div className='file-container'>
                   <input  onChange={(handleFileInput)} ref={register} className='upload-file-inp' type="file" name="file" id="uploadImg" />
                    <label  htmlFor="uploadImg" id='upload-label' className='upload-file-btn text-center'>  {previewSource &&
                (
                    <img src={previewSource} alt="chosen" style={{ height:'500px', width:'500px' }}/>
                )}</label>
                   </div>
                   <p>Product name</p>
                    <input required ref={register}   className='form-control mb-3' type="text" name="name" id="" />
                    <p>Product Price( Before Discount)</p>
                    <input required ref={register}  className='form-control mb-3 d-inline mr-4' type="number" name="price" id="" />
                    <p>Discount Rate</p>
                    <input required ref={register}  className='form-control mb-3 d-inline mr-4' type="number" name="discount" id="" />
                    <p>Shipping Charge</p>
                    <input required ref={register} className='form-control mb-3 d-inline mr-4' type="number" name="shipping" id="" />
                    <p>Color</p>
                    <input required ref={register}   className='form-control mb-3' type="text" name="color" id="" />
                    <p>Size</p>
                    <input required ref={register}  className='form-control mb-3' type="text" name="size" id="" />
                    <div>
                    <button className="main-btn mb-4">Add Product</button>
                    </div>
                </form>
            </div>

    </div>
    );
};

export default Products;