const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/searchAll", userController.searchAll);
router.post("/create", userController.create);
module.exports = router;
