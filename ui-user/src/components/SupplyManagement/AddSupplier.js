import { TextField } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";

function AddSupplier() {
  return (
    <div>
      <div>
        <center>
          <h1 style={{}}> ADD Supplier</h1>
        </center>
        <center>
          <div style={{ marginLeft: "-10%" }}>
            <TextField
              fullWidth
              label="Supplier Name"
              id="fullWidth"
              style={{ width: "50%", marginLeft: "10%", marginTop: "5%" }}
            />
            <TextField
              fullWidth
              label="Address"
              id="fullWidth"
              style={{ width: "50%", marginLeft: "10%", marginTop: "2%" }}
            />
            <TextField
              fullWidth
              label="Supply item"
              id="fullWidth"
              style={{ width: "50%", marginLeft: "10%", marginTop: "2%" }}
            />
            <TextField
              fullWidth
              label="Email"
              id="fullWidth"
              style={{ width: "50%", marginLeft: "10%", marginTop: "2%" }}
            />
            <TextField
              fullWidth
              label="Contact Number"
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
                marginLeft: "0",
                marginTop: "10px",
              }}
            >
              Save
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
              Save & another
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
              Clear
            </Button>
          </div>
        </center>
      </div>
    </div>
  );
}

export default AddSupplier;
