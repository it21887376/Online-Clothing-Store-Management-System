import {
  CalendarToday,
  LocationSearching,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./delivery.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Delivery() {

  const [promotionData, setPromotionData] = useState();

  const deliveryID = window.localStorage.getItem("delivery-id");

  useEffect(()=>{
    axios.get(`http://localhost:4000/api/v1/delivery/${deliveryID}`)
    .then((response)=>{
      setPromotionData(response.data);
    }).catch((err)=>{
      console.log(err);
    })
  })

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [shippingAddress, setShippingAddress] = useState();
  const [deliveryStatus, setDeliveryStatus] = useState(promotionData?.DeliveryStatus);

  const UpdatePromotion = () => {
    axios
      .put(`http://localhost:4000/api/v1/delivery/${deliveryID}`, {
        FirstName : firstName,
        LastName : lastName,
        Email : email,
        PhoneNumber : phoneNumber,
        Address : address,
        ShippingAddress : shippingAddress,
        DeliveryStatus : deliveryStatus
      })
      .then((response) => {
        console.log("response : ",response);
        toast.success("Delivery Details has been Successfully Updated...!");
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
        <h1 className="userTitle">Edit Delivery</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{promotionData?.FirstName}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Delivery Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{promotionData?.LastName}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{promotionData?.Email}</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{promotionData?.PhoneNumber}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{promotionData?.Address}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{promotionData?.ShippingAddress}</span>
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
                  defaultValue={promotionData?.FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled
                />
              </div>
              <div className="userUpdateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="userUpdateInput"
                  defaultValue={promotionData?.LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="userUpdateInput"
                  defaultValue={promotionData?.Email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="userUpdateInput"
                  defaultValue={promotionData?.PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  disabled
                />
              </div>
              <div className="userUpdateItem">
                <label>Country</label>
                <input
                  type="text"
                  placeholder="Country"
                  className="userUpdateInput"
                  defaultValue={promotionData?.Address}
                  onChange={(e) => setAddress(e.target.value)}
                  disabled
                />
              </div>
              <div className="userUpdateItem">
                <label>Shipping Address</label>
                <input
                  type="text"
                  placeholder="ShippingAddress"
                  className="userUpdateInput"
                  defaultValue={promotionData?.ShippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  disabled
                />
              </div>
              <div className="userUpdateItem">
                <label>DeliveryStatus</label>
                <select value={deliveryStatus?deliveryStatus:promotionData?.DeliveryStatus} onChange={(e) => setDeliveryStatus(e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Complete">Complete</option>
                  <option value="Canceled">Canceled</option>
                </select>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" onClick={UpdatePromotion}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
