import "./newEmployee.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function NewUser() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [nic, setNIC] = useState('');
  const [dob, setDOB] = useState('');
  const [address, setAddress] = useState('');

  const createEmployee = () => {
    if(firstName === '' || lastName === '' || userName === '' || email === '' || nic === '' || dob === '' || address === ''){
      toast.warn("Please fill all required fields...!");
    }else{
      axios.post('http://localhost:4000/api/v1/employee',{
        FirstName:firstName,
        LastName:lastName,
        UserName:userName,
        Email:email,
        NIC:nic,
        DOB:dob,
        Address:address
      }).then((res)=>{
        toast.success("New Employee Successfully Created...!");
        setFirstName('');
        setLastName('');
        setUserName('');
        setEmail('');
        setNIC('');
        setDOB('');
        setAddress('');
      }).catch((err)=>{
        console.log(err);
        toast.error("Something went wrong, Please try again...!");
      })
    }
  }

  return (
    <div className="newUser">
      <ToastContainer/>
      <h1 className="newUserTitle">New Employee</h1>
      <div className="newUserForm">
        <div className="newUserItem">
          <label>First Name</label>
          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>User Name</label>
          <input type="test" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>NIC</label>
          <input type="text" placeholder="NIC" value={nic} onChange={(e) => setNIC(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>DOB</label>
          <input type="date" placeholder="DOB" value={dob} onChange={(e) => setDOB(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <button className="newUserButton" onClick={createEmployee}>Create</button>
      </div>
    </div>
  );
}
