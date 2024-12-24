const express = require("express");
const router = express.Router();
const { addSupplier } = require("../controllers/supplier.controller");
const {
  getSupplierById,
  getAllSuppliers,
  deleteSupplier,
  updateSupplier,
} = require("../controllers/supplier.controller");

router.route("/").post(addSupplier);
router.route("/").get(getAllSuppliers);
router.route("/:id").get(getSupplierById);
router.route("/:id").put(updateSupplier);
router.route("/:id").delete(deleteSupplier);

module.exports = router;
