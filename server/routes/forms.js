const express = require("express");
const router = express.Router();
const customMailer = require("../middleware/CustomMailer");
const standardMailer = require("../middleware/StandardMailer");

// @route   Post forms/custom-mailer
// @desc    Post custom form
// @access  Private

router.post("/custom-mailer", async (req, res) => {
  try {
    const resEmail = customMailer(req.body.gmail, req.body.form);
    await resEmail.then((value) => {
      return value;
    });
    return res.json({ msg: "Message Send" });
  } catch (err) {
    return res.status(400).json({ errors: [{ msg: "Invalid  Email" }] });
  }
});

// @route   Post forms/standard-mailer
// @desc    Post standard form
// @access  Private

router.post("/standard-mailer", async (req, res) => {
  try {
    const resEmail = standardMailer(req.body);
    await resEmail.then((value) => {
      return value;
    });
    return res.json({ msg: "Message Send" });
  } catch (err) {
    return res.status(400).json({ errors: [{ msg: "Invalid  Email" }] });
  }
});

module.exports = router;
