import { TextField } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";

function SupplyOrder() {
  return (
    <div>
      <div>
        <center>
          <div style={{ marginLeft: "-10%" }}>
            <TextField
              fullWidth
              label="Supplier "
              id="fullWidth"
              style={{ width: "50%", marginLeft: "10%", marginTop: "5%" }}
            />
            <TextField
              fullWidth
              label="Item"
              id="fullWidth"
              style={{ width: "50%", marginLeft: "10%", marginTop: "2%" }}
            />
            <TextField
              fullWidth
              label="Quantity"
              id="fullWidth"
              style={{ width: "50%", marginLeft: "10%", marginTop: "2%" }}
            />
            <TextField
              fullWidth
              label="Order Date"
              id="fullWidth"
              style={{ width: "50%", marginLeft: "10%", marginTop: "2%" }}
            />
            <TextField
              fullWidth
              label="Required Date"
              id="fullWidth"
              style={{ width: "50%", marginLeft: "10%", marginTop: "2%" }}
            />
          </div>
        </center>
        <center>
          <div className="viewsupplier" style={{ marginTop: "5%" }}>
            <Button
              variant="outlined"
              style={{
                width: "10%",
                height: "80px",
                borderRadius: "30px",
                backgroundColor: "black",
                color: "white",
                fontSize: "25px",
                marginLeft: "220px",
                marginTop: "10px",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              style={{
                width: "10%",
                height: "80px",
                borderRadius: "30px",
                backgroundColor: "black",
                color: "white",
                fontSize: "25px",
                marginLeft: "220px",
                marginTop: "10px",
              }}
            >
              Order Now
            </Button>
          </div>
        </center>
      </div>
    </div>
  );
}

export default SupplyOrder;
