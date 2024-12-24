import React, { useState, useEffect } from "react";
import { CartProvider, useCart } from "react-use-cart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

function AddToCard() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  // console.log("items : ", items);

  let TotalPrice = 0;

  const history = useHistory();

  const [amount, setAmount] = useState(TotalPrice);
  const [order, setOrder] = useState(false);

  const checkout = () => {
    const body = {
      Items: items,
      TotalPrice: TotalPrice,
    };

    axios
      .post("http://localhost:4000/api/v1/NewOrder", body)
      .then((res) => {
        alert("Order Successfully Added");
        history.push("/delivery");
        localStorage.setItem("orderID", res.data.id);
        window.localStorage.removeItem("react-use-cart");
      })
      .catch((err) => {
        alert("Something went wrong...!");
      });
  };

  const handleToken = (token) => {
    fetch("http://localhost:4000/api/v1/Payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, amount }),
    })
      .then((res) => res.json())
      .then((_) => {
        window.alert("Transaction Successful.");
        setOrder(true);
      })
      .catch((_) => window.alert("Transaction Failed."));
  };

  // const handleAmountChange = (e) => {
  //   const value = e.target.value;
  //   setAmount(value);
  //   amount = TotalPrice;
  // };

  useEffect(()=>{
    setAmount(TotalPrice);
  },[TotalPrice])

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <Container style={{ maxWidth: "1150px" }}>
        <h1>Cart ({totalUniqueItems})</h1>

        <ul>
          {items.map((item) => (
            <Row xs={2} md={1} className="g-4" key={item._id}>
              <Col>
                <Card style={{ margin: "20px" }}>
                  <Row>
                    <Col>
                      <img
                        src={item.Image}
                        alt="women"
                        width={200}
                        height={250}
                        style={{ borderRadius: 10, marginLeft: 30 }}
                      />
                    </Col>
                    <Col xs={8}>
                      <Card.Body>
                        <h1 style={{ fontSize: 30 }}>{item.ProductName}</h1>
                        <div style={{ marginTop: 10 }}>
                          <p>IN STOCK</p>
                          <p
                            style={{
                              fontSize: 25,
                              color: "red",
                              fontWeight: "bold",
                            }}
                          >
                            Rs {item.price * item.quantity} /=
                          </p>
                          <span>
                            <span
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              BRAND -{" "}
                            </span>
                            <span>{item.Brand}</span>
                          </span>
                        </div>
                        <Button
                          variant="outline-primary"
                          style={{
                            fontSize: 20,
                            paddingLeft: 20,
                            paddingRight: 20,
                          }}
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </Button>
                        <span
                          style={{
                            padding: "10px",
                            paddingRight: "20px",
                            paddingLeft: "20px",
                            borderRadius: "5px",
                            border: "1px solid black",
                          }}
                        >
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline-primary"
                          style={{
                            fontSize: 20,
                            paddingLeft: 20,
                            paddingRight: 20,
                          }}
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </Button>
                        <Button
                          variant="outline-danger"
                          style={{
                            fontSize: 20,
                            paddingLeft: 20,
                            paddingRight: 20,
                          }}
                          onClick={() => removeItem(item.id)}
                        >
                          &times;
                        </Button>
                      </Card.Body>
                      <p style={{ display: "none" }}>
                        {(TotalPrice = TotalPrice + item.price * item.quantity)}
                      </p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          ))}
        </ul>
        <h1 style={{ textAlign: "right" }}>Total Price - {TotalPrice}</h1>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "auto" }}>
            <StripeCheckout
              name="FT MARKETING"
              description="Have fun with your new things."
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png"
              ComponentClass="div"
              panelLabel="Give Money"
              stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
              token={handleToken}
              currency="USD"
              amount={TotalPrice * 100}
              billingAddress={true}
            ></StripeCheckout>
          </div>
          {order ? (
            <Button
              variant="outline-primary"
              style={{
                fontSize: 20,
                paddingLeft: 20,
                paddingRight: 20,
                marginLeft: "auto",
              }}
              onClick={() => checkout()}
            >
              Check Out
            </Button>
          ) : null}
        </div>
      </Container>
    </>
  );
}

export default AddToCard;
