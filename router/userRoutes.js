const express = require("express");
const router = express.Router();
const Contact = require("../model/Contact");
router.post("/contact", async (req, res) => {
  const body = req.body;
  await Contact.create({ ...body });
  return res.json({ success: true });
});

module.exports = router;
