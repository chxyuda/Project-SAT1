const express = require("express");
const BorrowController = require("../../src/controllers/user/borrow.controller");
const router = express.Router();

router.get("/", BorrowController.listAllBorrow);
// router.post('/', );
// router.put('/', );
// router.delete('/', );

module.exports = router;
