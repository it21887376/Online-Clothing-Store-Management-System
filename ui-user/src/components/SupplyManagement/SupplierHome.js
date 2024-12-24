import { Button } from "@mui/material";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function SupplierHome() {
  return (
    <div style={{ marginTop: "0%" }}>
      <Container>
        <Row>
          <Col>
            <center>
              <div className="supplier">
                <div>
                  <img src="./supplier.png" style={{ marginLeft: "0%" }} />
                </div>

                <div style={{ paddingTop: "0%" }}>
                  <Button
                    variant="outlined"
                    style={{
                      width: "50%",
                      height: "80px",
                      borderRadius: "0px",
                      backgroundColor: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Suppliers
                  </Button>
                </div>
              </div>
            </center>
          </Col>
          <Col>
            <center>
              <div className="re order materials">
                <div>
                  <img src="./reorder.png" style={{ marginLeft: "0%" }} />
                </div>
                <Button
                  variant="outlined"
                  style={{
                    width: "50%",
                    height: "80px",
                    borderRadius: "0px",
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "25px",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  Re-Order Materials
                </Button>
              </div>
            </center>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SupplierHome;
