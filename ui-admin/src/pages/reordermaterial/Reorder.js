import "./newsupplier.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Reorder() {
  const [supplier, setSupplier] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderdate, setOrderdate] = useState("");
  const [requiredate, setRequiredate] = useState("");
  const createSupplier = () => {
    if (
      supplier === "" ||
      item === "" ||
      quantity === "" ||
      item === "" ||
      orderdate === "" ||
      requiredate === ""
    ) {
      toast.warn("Please fill all required fields...!");
    } else {
      axios
        .post("http://localhost:4000/api/v1/supplierorder", {
          Supplier: supplier,
          Item: item,
          Quantity: quantity,
          OrderDate: orderdate,
          RequiredDate: requiredate,
        })
        .then((res) => {
          toast.success("New Re-Order Successfully Created...!");
          setSupplier("");
          setItem("");
          setQuantity("");
          setOrderdate("");
          setRequiredate("");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong, Please try again...!");
        });
    }
  };

  return (
    <div className="newUser">
      <ToastContainer />
      <h1 className="newUserTitle">New Re-Order</h1>
      <div className="newUserForm">
        <div className="newUserItem">
          <label> Name</label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setSupplier(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Item</label>
          <input
            type="text"
            placeholder="Item"
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Quantity</label>
          <input
            type="number"
            placeholder="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Order Date</label>
          <input
            type="date"
            placeholder="Item"
            onChange={(e) => setOrderdate(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Required Date</label>
          <input
            type="date"
            placeholder="NIC"
            onChange={(e) => setRequiredate(e.target.value)}
          />
        </div>

        <button className="newUserButton" onClick={createSupplier}>
          Create
        </button>
      </div>
    </div>
  );
}
