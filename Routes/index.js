const express = require("express");
const router = new express.Router();
const showController = require("../Controllers/showControllers");
const userController = require("../Controllers/userControllers");

router.get("/", showController.homePage);
router.get("/fetch", showController.getShows)
router.post("/add", showController.createShow);
router.patch("/show/update/:id", showController.updateShow);
router.delete("/show/delete/:id", showController.deleteShow);

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/protected", userController.authCheck, userController.protected);
router.post("/uploadTest", showController.upload, showController.homePage);

module.exports = router;