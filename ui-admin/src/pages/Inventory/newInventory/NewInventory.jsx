import "./newInventory.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewDelivery() {
  const [productName, setProductName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [Brand, setBrand] = useState("");
  const [Image, setImage] = useState("");
  const [InventoryType, setInventoryType] = useState("");
  const [ProductFor, setProductFor] = useState("");
  const [isAvailable, setisAvailable] = useState("");

  const createEmployee = () => {
    if (
      productName === "" ||
      Description === "" ||
      Price === 0 ||
      Brand === "" ||
      Image === "" ||
      InventoryType === "" ||
      ProductFor === "" ||
      isAvailable === ""
    ) {
      toast.warn("Please fill all required fields...!");
    } else {
      const body = {
        ProductName: productName,
        Description: Description,
        price: Price,
        Brand: Brand,
        Image: Image,
        InventoryType: InventoryType,
        ProductFor: ProductFor,
        isAvailable: isAvailable
      }

      console.log("data : ", body);
      axios
        .post("http://localhost:4000/api/v1/Inventory", body)
        .then((res) => {
          toast.success("New Inventory Successfully Created...!");
          setProductName("");
          setDescription("");
          setPrice(0);
          setBrand("");
          setImage("");
          setInventoryType("");
          setProductFor("");
          setisAvailable("");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong, Please try again...!");
        });
    }
  };

  const [product_for, setProduct_For] = useState();
  const [Inventory_Type, setInventory_Type] = useState();

  if(!product_for){
    axios
    .get("http://localhost:4000/api/v1/Product-For")
    .then((res) => {
      setProduct_For(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  if(!Inventory_Type){
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
    <div className="newUser">
      <ToastContainer />
      <h1 className="newUserTitle">New Inventory</h1>
      <div className="newUserForm">
        <div className="newUserItem">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Promo Name"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Price</label>
          <input
            type="number"
            placeholder="Price"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Brand</label>
          <input
            type="text"
            placeholder="Brand"
            value={Brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>InventoryType</label>
          <select
            id="cars"
            name="cars"
            onChange={(e) => setInventoryType(e.target.value)}
          >
            <option value="InventoryType">InventoryType</option>
            {Inventory_Type?.map((item) => (
              <option value={item.InventoryType}>{item.InventoryType}</option>
            ))}
          </select>
        </div>
        <div className="newUserItem">
          <label>ProductFor</label>
          <select
            id="cars"
            name="cars"
            onChange={(e) => setProductFor(e.target.value)}
          >
            <option value="InventoryType">Select Product For</option>
            {product_for?.map((item) => (
              <option value={item.ProductFor}>{item.ProductFor}</option>
            ))}
          </select>
        </div>
        <div className="newUserItem">
          <label>isAvailable</label>
          <select
            id="cars"
            name="cars"
            onChange={(e) => setisAvailable(e.target.value)}
          >
            <option value="isAvailable">Select Available Type</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Image URL</label>
          <input
            type="url"
            placeholder="Image URL"
            value={Image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <button className="newUserButton01" onClick={createEmployee}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
