import React, { useState, useEffect } from "react";
import "./Promotion.css";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CartProvider, useCart } from "react-use-cart";
import Button from "@mui/material/Button";

function Promotion() {
  const { addItem } = useCart();

  const [data, setData] = useState([]);
  const getRequest = () => {
    axios
      .get(`http://localhost:4000/api/v1/promotion`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [data]);

  return (
    <div className="newUser">
      <center>
        <h1 className="newUserTitle">All Promotion</h1>
      </center>
      <div>
        {data ? (
          data.map((item) => (
            <Card
              sx={{ maxWidth: 345 }}
              style={{ display: "inline-block", margin: 20 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={300}
                  image={item.Image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h1>{item.ProductName}</h1>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <h3>
                      Promo Type - {item.PromoName}
                      <br />
                    </h3>
                    <h2 style={{ color: "red" }}> Rs : {item.RealPrice}</h2>
                    <h2> Rs : {item.DiscountedPrice}</h2>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button
                  variant="outline-primary"
                  style={{
                    fontSize: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                  onClick={() => (
                    addItem(item), alert("Item has been added your cart")
                  )}
                >
                  Add To Cart
                </Button>
            </Card>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}

export default Promotion;
