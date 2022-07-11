const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Get all products" });
});
router.get("/:id", (req, res) => {
  res.json({ msg: "Get one products" });
});
router.post("/", (req, res) => {
  res.json({ msg: "Add new product" });
});
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete product" });
});
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update new product" });
});

module.exports = router;
