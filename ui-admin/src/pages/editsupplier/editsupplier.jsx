import "./editsupplier.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditSupplier() {
  const [supply, setSupply] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [item, setItem] = useState("");
  const [number, setNumber] = useState("");

  const id = window.sessionStorage.getItem("supplierID");

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/supply/${id}`).then((response) => {
      setName(response.data.SupplierName);
      setAddress(response.data.Address);
      setEmail(response.data.Email);
      setItem(response.data.SupplyItem);
      setNumber(response.data.ContactNumber);

      setSupply(response.data);
      console.log(response.data);
    });
  }, []);

  function updateSupplier() {
    axios
      .put(`http://localhost:4000/api/v1/supply/${id}`, {
        SupplierName: name,
        Address: address,
        SupplyItem: item,

        ContactNumber: number,
        Email: email,
      })
      .then((response) => {
        window.location.reload();
        alert("successfull updated");
      })
      .catch((error) => {
        alert("Sorry, Something Error...");
      });
  }
  return (
    <div className="newUser">
      <ToastContainer />
      <h1 className="newUserTitle">Edit Supplier</h1>
      <div className="newUserForm">
        <div className="newUserItem">
          <label> Name</label>
          <input
            defaultValue={supply.SupplierName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            defaultValue={supply.Address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            defaultValue={supply.Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Item</label>
          <input
            defaultValue={supply.SupplyItem}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Number</label>
          <input
            defaultValue={supply.ContactNumber}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <button className="newUserButton" onClick={updateSupplier}>
          Update
        </button>
      </div>
    </div>
  );
}
