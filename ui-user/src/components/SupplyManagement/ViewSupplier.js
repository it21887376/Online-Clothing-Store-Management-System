import React from "react";
import { Button } from "@mui/material";

function ViewSupplier() {
  return (
    <div style={{ marginTop: "20%" }}>
      <center>
        <div className="viewsupplier">
          <Button
            variant="outlined"
            style={{
              width: "30%",
              height: "80px",
              borderRadius: "30px",
              backgroundColor: "black",
              color: "white",
              fontSize: "25px",
              marginLeft: "10px",
              marginTop: "10px",
            }}
          >
            View Supplier
          </Button>
        </div>
        <div className="viewsupplier">
          <Button
            variant="outlined"
            style={{
              width: "30%",
              height: "80px",
              borderRadius: "30px",
              backgroundColor: "black",
              color: "white",
              fontSize: "25px",
              marginLeft: "10px",
              marginTop: "10px",
            }}
          >
            Add New Supplier
          </Button>
        </div>
      </center>
      <div className="back">
        <Button
          variant="outlined"
          style={{
            width: "10%",
            height: "60px",
            borderRadius: "30px",
            backgroundColor: "black",
            color: "white",
            fontSize: "25px",
            marginLeft: "85%",
            marginTop: "80px",
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

export default ViewSupplier;
