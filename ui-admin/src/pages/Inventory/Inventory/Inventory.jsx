import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Inventory.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Delivery() {
  const [InventoryData, setInventoryData] = useState();

  const Inventoryid = window.localStorage.getItem("Inventory-id");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/Inventory/${Inventoryid}`)
      .then((response) => {
        setInventoryData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const [productName, setProductName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [Brand, setBrand] = useState("");
  const [Image, setImage] = useState("");
  const [InventoryType, setInventoryType] = useState(InventoryData?.InventoryType);
  const [ProductFor, setProductFor] = useState(InventoryData?.ProductFor);
  const [isAvailable, setisAvailable] = useState(InventoryData?.isAvailable);

  const UpdatePromotion = () => {
    axios
      .put(`http://localhost:4000/api/v1/Inventory/${Inventoryid}`, {
        ProductName: productName ? productName : InventoryData?.ProductName,
        Description: Description ? Description : InventoryData?.Description,
        price: Price ? Price : InventoryData?.price,
        Brand: Brand ? Brand : InventoryData?.Brand,
        Image: Image ? Image : InventoryData?.Image,
        InventoryType: InventoryType ? InventoryType : InventoryData?.InventoryType.InventoryType,
        ProductFor: ProductFor ? ProductFor : InventoryData?.ProductFor.ProductFor,
        isAvailable: isAvailable ? isAvailable : InventoryData?.isAvailable,
      })
      .then((response) => {
        console.log("response : ", response);
        toast.success("Delivery Details has been Successfully Updated...!");
      })
      .catch((error) => {
        toast.error("Something went wrong, Please try again...!");
        console.log(error);
      });
  };

  const [product_for, setProduct_For] = useState();
  const [Inventory_Type, setInventory_Type] = useState();

  if (!product_for) {
    axios
      .get("http://localhost:4000/api/v1/Product-For")
      .then((res) => {
        setProduct_For(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (!Inventory_Type) {
    axios
      .get("http://localhost:4000/api/v1/Inventory-Type")
      .then((res) => {
        setInventory_Type(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="user">
      <ToastContainer />
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Inventory</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={InventoryData?.Image} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">
                {InventoryData?.ProductName}
              </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Product Details</span>
            <div className="userShowInfo">
              <span>P.Name - </span>
              <span className="userShowInfoTitle">
                {InventoryData?.ProductName}
              </span>
            </div>
            <div className="userShowInfo">
              <span>Des - </span>
              <span className="userShowInfoTitle">
                {InventoryData?.Description}
              </span>
            </div>
            <div className="userShowInfo">
              <span>Price - </span>
              <span className="userShowInfoTitle">{InventoryData?.price}</span>
            </div>
            <div className="userShowInfo">
              <span>Brand - </span>
              <span className="userShowInfoTitle">{InventoryData?.Brand}</span>
            </div>
            <div className="userShowInfo">
              <span>I.Type - </span>
              <span className="userShowInfoTitle">
                {InventoryData?.InventoryType}
              </span>
            </div>
            <div className="userShowInfo">
              <span>ProductFor - </span>
              <span className="userShowInfoTitle">
                {InventoryData?.ProductFor}
              </span>
            </div>
            <div className="userShowInfo">
              <span>isAvailable - </span>
              <span className="userShowInfoTitle">
                {InventoryData?.isAvailable}
              </span>
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
                  className="userUpdateInput"
                  type="text"
                  placeholder="Product Name"
                  defaultValue={InventoryData?.ProductName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Description</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Promo Name"
                  defaultValue={InventoryData?.Description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Price</label>
                <input
                  type="number"
                  className="userUpdateInput"
                  placeholder="Price"
                  defaultValue={InventoryData?.price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Brand</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Brand"
                  defaultValue={InventoryData?.Brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>InventoryType</label>
                <select
                  className="userUpdateInput"
                  id="cars"
                  name="cars"
                  value={InventoryType ? InventoryType : InventoryData?.InventoryType}
                  onChange={(e) => setInventoryType(e.target.value)}
                >
                  <option value="InventoryType">InventoryType</option>
                  {Inventory_Type?.map((item) => (
                    <option value={item.InventoryType}>{item.InventoryType}</option>
                  ))}
                </select>
              </div>
              <div className="userUpdateItem">
                <label>ProductFor</label>
                <select
                  id="cars"
                  name="cars"
                  className="userUpdateInput"
                  value={ProductFor ? ProductFor : InventoryData?.ProductFor}
                  onChange={(e) => setProductFor(e.target.value)}
                >
                  <option value="Product For">Select Product For</option>
                  {product_for?.map((item) => (
                    <option value={item.ProductFor}>{item.ProductFor}</option>
                  ))}
                </select>
              </div>
              <div className="userUpdateItem">
                <label>isAvailable</label>
                <select
                  id="cars"
                  name="cars"
                  className="userUpdateInput"
                  value={isAvailable ? isAvailable : InventoryData?.isAvailable}
                  onChange={(e) => setisAvailable(e.target.value)}
                >
                  <option value="isAvailable">Select Available Type</option>
                  <option value="True">True</option>
                  <option value="False">False</option>
                </select>
              </div>
              <div className="userUpdateItem">
                <label>Image URL</label>
                <input
                  type="url"
                  className="userUpdateInput"
                  placeholder="Image URL"
                  defaultValue={InventoryData?.Image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" onClick={UpdatePromotion}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
