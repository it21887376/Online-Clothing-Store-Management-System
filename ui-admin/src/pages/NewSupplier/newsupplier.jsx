import "./newsupplier.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewSupplier() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [item, setItem] = useState("");
  const [number, setNumber] = useState("");
  const createSupplier = () => {
    if (
      name === "" ||
      address === "" ||
      email === "" ||
      item === "" ||
      number === "" ||
      address === ""
    ) {
      toast.warn("Please fill all required fields...!");
    } else {
      axios
        .post("http://localhost:4000/api/v1/supply/", {
          SupplierName: name,
          Address: address,
          Email: email,
          SupplyItem: item,
          ContactNumber: number,
        })
        .then((res) => {
          toast.success("New Supplier Successfully Created...!");
          setName("");
          setAddress("");
          setEmail("");
          setEmail("");
          setItem("");
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
      <h1 className="newUserTitle">New Supplier</h1>
      <div className="newUserForm">
        <div className="newUserItem">
          <label> Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Item</label>
          <input
            type="text"
            placeholder="Item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Number</label>
          <input
            type="text"
            placeholder="NIC"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <button className="newUserButton" onClick={createSupplier}>
          Create
        </button>
      </div>
    </div>
  );
}
