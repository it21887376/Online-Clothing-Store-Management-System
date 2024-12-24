import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../../assets/images/Inventory/product.png";
import Material from "../../assets/images/Inventory/material.png"

function index() {
  return (
    <>
      <Container style={{ maxWidth: "1150px" }}>
        <center>
          <h1 style={{ fontSize: "50px", margin: "10px" }}>Product</h1>
        </center>
        <Row className="text-justify" style={{paddingTop:"20px", paddingBottom:"30px"}}>
          <Col style={{ textAlign: "center" }}>
            <a href="Product">
              <img src={Product} alt="product"/>
              <h1 style={{padding:"20px", textDecoration:"none", color:"black"}}>ReadyMade</h1>
            </a>
          </Col>
          <Col style={{ textAlign: "center" }}>
            {" "}
            <a href="Material">
              <img src={Material} alt="material"/>
              <h1 style={{padding:"20px", textDecoration:"none", color:"black"}}>Material</h1>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default index;
