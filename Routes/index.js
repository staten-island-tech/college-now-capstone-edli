const express = require("express");
const router = new express.Router();
const controller = require("../Controllers/showControllers");
const userController = require("../Controllers/userControllers");

router.get("/show/get", controller.getShow);
router.post("/show/add", controller.createShow);
router.patch("/show/:id", controller.updateShow);
router.delete("/show/:id", controller.deleteShow);

router.post("/register", userController.register);
router.post("/login", userController.login);
module.exports = router;