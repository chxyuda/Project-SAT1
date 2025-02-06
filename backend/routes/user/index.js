const express = require("express");
const BorrowRoute = require("./borrow");
const { authenticate } = require("../../middlewares/auth.middleware");

const router = express.Router();

router.use("/borrow", authenticate, BorrowRoute);

module.exports = router;
