import {
  CalendarToday,
  LocationSearching,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./employee.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function User() {

  const [employeeData, setEmployeeData] = useState();

  const employeeID = window.localStorage.getItem("employee-id");

  useEffect(()=>{
    axios.get(`http://localhost:4000/api/v1/employee/${employeeID}`).then((response)=>{
      setEmployeeData(response.data);
    }).catch((err)=>{
      console.log(err);
    })
  })

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [dob, setDob] = useState();
  const [nic, setNic] = useState();
  const [address, setAddress] = useState();

  const UpdateEMployee = () => {
    axios
      .put(`http://localhost:4000/api/v1/employee/${employeeID}`, {
        FirstName:firstName,
        LastName:lastName,
        UserName:userName,
        Email:email,
        NIC:nic,
        DOB:dob,
        Address:address
      })
      .then((response) => {
        console.log("response : ",response);
        toast.success("Employee Details has been Successfully Updated...!");
      })
      .catch((error) => {
        toast.error("Something went wrong, Please try again...!");
        console.log(error);
      });
  }

  return (
    <div className="user">
      <ToastContainer/>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newEmployee">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{employeeData?.FirstName} {employeeData?.LastName}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Employee Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{employeeData?.UserName}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{employeeData?.DOB.substring(0, 10)}</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{employeeData?.NIC}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{employeeData?.Address}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <div className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>FirstName</label>
                <input
                  type="text"
                  placeholder="FirstName"
                  className="userUpdateInput"
                  defaultValue={employeeData?.FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>LastName</label>
                <input
                  type="text"
                  placeholder="LastName"
                  className="userUpdateInput"
                  defaultValue={employeeData?.LastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>UserName</label>
                <input
                  type="text"
                  placeholder="UserName"
                  className="userUpdateInput"
                  defaultValue={employeeData?.UserName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="Email"
                  placeholder="Email"
                  className="userUpdateInput"
                  defaultValue={employeeData?.Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>DOB</label>
                <input
                  type="Date"
                  className="userUpdateInput"
                  defaultValue={employeeData?.DOB.substring(0, 10)}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>NIC</label>
                <input
                  type="text"
                  placeholder="NIC"
                  className="userUpdateInput"
                  defaultValue={employeeData?.NIC}
                  onChange={(e) => setNic(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="userUpdateInput"
                  defaultValue={employeeData?.Address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" onClick={UpdateEMployee}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
