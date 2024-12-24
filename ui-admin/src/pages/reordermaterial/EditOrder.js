import "./editsupplier.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditOrder() {
  const [supplier, setSupplier] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderdate, setOrderdate] = useState("");
  const [requiredate, setRequiredate] = useState("");
  const [order, setOrder] = useState([]);

  const id = window.sessionStorage.getItem("OrderID");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/supplierorder/${id}`)
      .then((response) => {
        setSupplier(response.data.Supplier);
        setItem(response.data.Item);
        setQuantity(response.data.Quantity);
        setOrderdate(response.data.OrderDate);
        setRequiredate(response.data.RequiredDate);

        setOrder(response.data);
        console.log(response.data);
      });
  }, []);

  function updateSupplier() {
    axios
      .put(`http://localhost:4000/api/v1/supplierorder/${id}`, {
        Supplier: supplier,
        Item: item,
        Quantity: quantity,
        OrderDate: orderdate,
        RequiredDate: requiredate,
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
      <h1 className="newUserTitle">Edit Re-Order</h1>
      <div className="newUserForm">
        <div className="newUserItem">
          <label> Name</label>
          <input
            defaultValue={order.Supplier}
            onChange={(e) => setSupplier(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Item</label>
          <input
            defaultValue={order.Item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Quantity</label>
          <input
            defaultValue={order.Quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Order Date</label>
          <input
            defaultValue={order.OrderDate}
            onChange={(e) => setOrderdate(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Required Date</label>
          <input
            defaultValue={order.RequiredDate}
            onChange={(e) => setRequiredate(e.target.value)}
          />
        </div>

        <button className="newUserButton" onClick={updateSupplier}>
          Update
        </button>
      </div>
    </div>
  );
}
