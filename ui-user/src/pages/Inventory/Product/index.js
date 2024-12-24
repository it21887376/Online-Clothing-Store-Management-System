import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Women from "../../../assets/images/Inventory/women.png";
import Men from "../../../assets/images/Inventory/men.png";
import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <Container style={{ maxWidth: "1150px" }}>
        <center>
          <h1 style={{ fontSize: "50px", margin: "10px" }}>
            Product Inventory
          </h1>
        </center>
        <Row
          className="text-justify"
          style={{ paddingTop: "20px", paddingBottom: "30px" }}
        >
          <Col style={{ textAlign: "center" }}>
            <Link to={"/ProductType/Women"}>
              <img src={Women} alt="product" width={300} height={200}/>
              <h1
                style={{
                  padding: "20px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Women Section
              </h1>
            </Link>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <Link to={"/ProductType/Men"}>
              <a href="Material">
                <img src={Men} alt="material" width={300} height={200}/>
                <h1
                  style={{
                    padding: "20px",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Men Section
                </h1>
              </a>
            </Link>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <Link to={"/ProductType/Kids"}>
              <a href="Material">
                <img src={Men} alt="material" width={300} height={200}/>
                <h1
                  style={{
                    padding: "20px",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Kids Section
                </h1>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Product;
