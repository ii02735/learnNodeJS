const express = require("express");
const router = express.Router();
const controllerUser = require("../controllers/userManagement");
router.get("/showUsers", controllerUser.showUsers);
router.post("/submitForm", controllerUser.submitForm);
router.get("/userForm", controllerUser.createForm);
module.exports = router;