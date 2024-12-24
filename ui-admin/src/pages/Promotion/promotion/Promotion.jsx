import {
  CalendarToday,
  LocationSearching,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./promotion.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Promotion() {

  const [promotionData, setPromotionData] = useState();

  const promotionID = window.localStorage.getItem("promotion-id");

  useEffect(()=>{
    axios.get(`http://localhost:4000/api/v1/promotion/${promotionID}`).then((response)=>{
      setPromotionData(response.data);
    }).catch((err)=>{
      console.log(err);
    })
  })

  const [productName, setProductName] = useState();
  const [promoName, setPromoName] = useState();
  const [realPrice, setRealPrice] = useState();
  const [discountedPrice, setDiscountedPrice] = useState();
  const [image, setImage] = useState();

  const UpdatePromotion = () => {
    axios
      .put(`http://localhost:4000/api/v1/promotion/${promotionID}`, {
        ProductName: productName?productName : promotionData?.ProductName,
        PromoName : promoName?promoName:promotionData?.PromoName,
        RealPrice : realPrice?realPrice:promotionData?.RealPrice,
        DiscountedPrice : discountedPrice?discountedPrice:promotionData?.DiscountedPrice,
        Image: image?image:promotionData?.Image
      })
      .then((response) => {
        console.log("response : ",response);
        toast.success("Promotion Details has been Successfully Updated...!");
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
        <h1 className="userTitle">Edit Promotion</h1>
        <Link to="/newPromotion">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={promotionData?.Image}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{promotionData?.ProductName}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Product Name</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{promotionData?.ProductName}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{promotionData?.PromoName}</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{promotionData?.RealPrice}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{promotionData?.DiscountedPrice}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <div className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Product Name</label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="userUpdateInput"
                  defaultValue={promotionData?.ProductName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>PromoName</label>
                <input
                  type="text"
                  placeholder="Promo Name"
                  className="userUpdateInput"
                  defaultValue={promotionData?.PromoName}
                  onChange={(e) => setPromoName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Real Price</label>
                <input
                  type="number"
                  placeholder="Real Price"
                  className="userUpdateInput"
                  defaultValue={promotionData?.RealPrice}
                  onChange={(e) => setRealPrice(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>DiscountedPrice</label>
                <input
                  type="number"
                  placeholder="Discounted Price"
                  className="userUpdateInput"
                  defaultValue={promotionData?.DiscountedPrice}
                  onChange={(e) => setDiscountedPrice(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Image URL</label>
                <input
                  type="url"
                  placeholder="Image URL"
                  className="userUpdateInput"
                  defaultValue={promotionData?.Image}
                  onChange={(e) => setImage(e.target.value)}
                />
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
