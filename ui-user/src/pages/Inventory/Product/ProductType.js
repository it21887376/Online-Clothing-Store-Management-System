import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { CartProvider, useCart } from "react-use-cart";


function ProductType(props) {
  const { addItem } = useCart();

  const [data, setData] = useState([]);
  const getRequest = () => {
    axios
      .get(`http://localhost:4000/api/v1/Inventory`)
      .then((response) => {
        setData(response.data);
        // console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [data]);

  const [searchTerm, setSearchTerm] = useState(props.match.params.id);

  return (
    <>
      <Container style={{ maxWidth: "1150px" }}>
        <center>
          <h1 style={{ fontSize: "50px", margin: "10px" }}>
            {props.match.params.id}
          </h1>
        </center>
        {data ? (
          data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (val.ProductFor.includes(searchTerm)) {
                return val;
              }
            })
            .map((row) => (
              <Row xs={2} md={1} className="g-4" key={row._id}>
                <Col>
                  <Card style={{ margin: "20px" }}>
                    <Row>
                      <Col>
                        <img
                          src={row.Image}
                          alt="women"
                          width={300}
                          height={350}
                          style={{ borderRadius: 10, marginLeft: 30 }}
                        />
                      </Col>
                      <Col xs={8}>
                        <Card.Body>
                          <h1 style={{ fontSize: 30 }}>
                            {row.ProductName}
                          </h1>
                          <div style={{ marginTop: 10 }}>
                            <p>IN STOCK</p>
                            <p
                              style={{
                                fontSize: 25,
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              Rs {row.price} /=
                            </p>
                            <span
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              PRODUCT DETAILS
                            </span>
                            <p>
                              {row.Description}
                            </p>
                            <span>
                              <span
                                style={{
                                  fontWeight: "bold",
                                }}
                              >
                                BRAND -{" "}
                              </span>
                              <span>{row.Brand}</span>
                            </span>
                          </div>
                          <Button
                            variant="outline-primary"
                            style={{
                              fontSize: 20,
                              paddingLeft: 20,
                              paddingRight: 20,
                            }}
                            onClick={() => (addItem(row), alert("Item has been added your cart"))}
                          >
                            Add To Cart
                          </Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            ))
        ) : (
          <p>Loading</p>
        )}

      </Container>
    </>
  );
}

export default ProductType;
