import "./index.css";
import React from 'react'
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";

function Delivery() {

  const orderId = localStorage.getItem("orderID");

  console.log("orderId L:",orderId);

  const history = useHistory();


  function handleClickDelivery() {
    history.push("/DeliveryList");
  }


    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Address, setAddress] = useState('');
    const [ShippingAddress, setShippingAddress] = useState('');
  
    const createDelivery = () => {
      if(FirstName === '' || LastName === '' || Email === '' || PhoneNumber === '' || Address ==='' || ShippingAddress === ''){
        toast.warn("Please fill all required fields...!");
      }else{
        axios.post('http://localhost:4000/api/v1/delivery',{
            OrderID : orderId,
            FirstName : FirstName,
            LastName : LastName,
            Email : Email,
            PhoneNumber: PhoneNumber,
            Address: Address,
            ShippingAddress: ShippingAddress
        }).then((res)=>{
          toast.success("Delivery has been Successfully Created...!");
          setFirstName('');
          setLastName('');
          setEmail('');
          setPhoneNumber('');
          setAddress('');
          setShippingAddress('');
        }).catch((err)=>{
          console.log(err);
          toast.error("Something went wrong, Please try again...!");
        })
      }
    }  

  return (
    <div className="newUser">
        <ToastContainer/>
        <center>
            <h1 className="newUserTitle">Delivery</h1>
            <div className="newUserForm">
                <div className="newUserItem">
                    <label>First Name</label>
                    <input type="text" placeholder="FirstName" value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="newUserItem">
                    <label>Last Name</label>
                    <input type="text" placeholder="LastName" value={LastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="newUserItem">
                    <label>Phone Number</label>
                    <input type="text" placeholder="PhoneNumber" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>
                <div className="newUserItem">
                    <label>Country</label>
                    <input type="text" placeholder="Address" value={Address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className="newUserItem">
                    <label>Shipping Address</label>
                    <input type="text" placeholder="ShippingAddress" value={ShippingAddress} onChange={(e) => setShippingAddress(e.target.value)}/>
                </div>
                <div className="newUserItem">
                    <button className="newUserButton" onClick={createDelivery}>Create</button>
                </div>
                <div className="newUserItem">
                    {/* <button className="newUserButton" onClick={createDelivery}>Create</button> */}
                </div>
                <div className="newUserItem">
                    <button className="newUserButton" onClick={handleClickDelivery}>View All My Delivery Details</button>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Delivery