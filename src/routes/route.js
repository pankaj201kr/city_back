const express = require("express");
const router = express.Router();

const cityController = require("../controller/cityController");
const axiosData = require("../controller/axois");
const userController = require("../controller/userController");


router.post("/create", cityController.createcity);
router.get("/findCity", cityController.findcity);
router.get("/axios", axiosData.axoisData)

router.post("/createUser", userController.createUser);
router.get("/findUser", userController.findUser);
router.patch("/:userId", userController.updateUser);
module.exports = router