const express = require("express");
const router = new express.Router();
const showController = require("../Controllers/showControllers");
const userController = require("../Controllers/userControllers");

router.get("/", controller.getShows);
router.post("/show/add", controller.createShow);
router.patch("/show/:id", controller.updateShow);
router.delete("/show/:id", controller.deleteShow);

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/protected", userController.authCheck, userController.protected);
router.post("/uploadTest", showController.upload, showController.homePage);

module.exports = router;