const express = require("express");
const router = express.Router();

const {
  addSupplierOrder,
  getSupplierOrderById,
  getAllSuppliersOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/supply.order.controller");

router.route("/").post(addSupplierOrder);
router.route("/").get(getAllSuppliersOrder);
router.route("/:id").get(getSupplierOrderById);
router.route("/:id").put(updateOrder);
router.route("/:id").delete(deleteOrder);

module.exports = router;
