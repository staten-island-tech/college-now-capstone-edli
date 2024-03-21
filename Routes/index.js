const express = require("express");
const router = new express.Router();
const showController = require("../Controllers/showControllers");
const userController = require("../Controllers/userControllers");

router.get("/", showController.homePage);
router.post("/add", showController.upload,showController.createShow);
router.patch("/show/:id", showController.updateShow);
router.delete("/show/:id", showController.deleteShow);

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/protected", userController.authCheck, userController.protected);
router.post("/uploadTest", showController.upload, showController.homePage);

module.exports = router;