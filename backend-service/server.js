const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const colors = require("colors");

//Import Routes
const promotionRoutes = require("./routes/promotion.route");
const deliveryRoutes = require("./routes/delivery.route");
const InventoryRoutes = require("./routes/Inventory.route");
const RefDataRoutes = require("./routes/ref_data.route");
const Filter_InventoryRoutes = require("./controllers/filter_inventory.controller");
const newOrderRoutes = require("./routes/NewOrder.route");
const paymentRoutes = require("./routes/payment.route");
const productionRoutes = require("./routes/production.route");
const employeeRoutes = require("./routes/employee.route");
const supplyRoutes = require("./routes/supplier.route");
const supplierOrder = require("./routes/supplier.order.route");
const usermanagement = require("./controllers/user.controller");
const adminmanagement = require("./controllers/admin.controller");

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(cors());

connectDB();

//Route Middlewares
app.use("/api/v1/promotion", promotionRoutes);
app.use("/api/v1/delivery", deliveryRoutes);
app.use("/api/v1/Inventory", InventoryRoutes);
app.use("/api/v1/Filter-Inventory", Filter_InventoryRoutes);
app.use("/api/v1", RefDataRoutes);
app.use("/api/v1/NewOrder", newOrderRoutes);
app.use("/api/v1/Payment", paymentRoutes);
app.use("/api/v1/Production", productionRoutes);
app.use("/api/v1/employee", employeeRoutes);
app.use("/api/v1/supply", supplyRoutes);
app.use("/api/v1/supplierorder", supplierOrder);
app.use("/api/v1/user", usermanagement);
app.use("/api/v1/adminuser", adminmanagement);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());


const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue
      .underline.bold
  )
);
