import "./newPromotion.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function NewPromotion() {

  const [productName, setProductName] = useState('');
  const [promoName, setPromoName] = useState('');
  const [realPrice, setRealPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [image, setImage] = useState('');

  const createEmployee = () => {
    if(productName === '' || promoName === '' || realPrice === 0 || discountedPrice === 0 ){
      toast.warn("Please fill all required fields...!");
    }else{
      axios.post('http://localhost:4000/api/v1/promotion',{
        ProductName: productName,
        PromoName : promoName,
        RealPrice : realPrice,
        DiscountedPrice : discountedPrice,
        Image: image
      }).then((res)=>{
        toast.success("New Promotion Successfully Created...!");
        setProductName('');
        setPromoName('');
        setRealPrice(0);
        setDiscountedPrice(0);
        setImage('');
      }).catch((err)=>{
        console.log(err);
        toast.error("Something went wrong, Please try again...!");
      })
    }
  }

  return (
    <div className="newUser">
      <ToastContainer/>
      <h1 className="newUserTitle">New Promotion</h1>
      <div className="newUserForm">
        <div className="newUserItem">
          <label>Product Name</label>
          <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Promo Name</label>
          <input type="text" placeholder="Promo Name" value={promoName} onChange={(e) => setPromoName(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Real Price</label>
          <input type="number" placeholder="Real Price" value={realPrice} onChange={(e) => setRealPrice(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Discounted Price</label>
          <input type="number" placeholder="Discounted Price" value={discountedPrice} onChange={(e) => setDiscountedPrice(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Image</label>
          <input type="url" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <button className="newUserButton" onClick={createEmployee}>Create</button>
      </div>
    </div>
  );
}
