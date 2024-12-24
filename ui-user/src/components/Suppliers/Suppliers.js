import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

// const card = (

// );

export default function OutlinedCard() {
  const [suppliers, setSuppliers] = useState([]);

  const getRequest = () => {
    axios
      .get(`http://localhost:4000/api/v1/supply`)
      .then((res) => {
        setSuppliers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [suppliers]);

  return (
    <Box
      style={{
        paddingTop: "30px",
        paddingBottom: "20%",
        paddingLeft: "50px",
      }}
    >
      {suppliers.map((item) => (
        <Card
          variant="outlined"
          style={{
            width: "300px",
            height: "200px",
            display: "inline-block",
            marginRight: "10px",
            fontSize: "80px",
          }}
        >
          <React.Fragment>
            <CardContent>
              <Typography
                color="text.secondary"
                gutterBottom
                style={{ fontSize: "20px" }}
              >
                {item.SupplierName}
              </Typography>
              <Typography variant="h5" component="div">
                {item.Email}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.Address}
              </Typography>
              <Typography variant="body2">
                {item.ContactNumber}
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Contact</Button>
            </CardActions>
          </React.Fragment>
        </Card>
      ))}
    </Box>
  );
}
