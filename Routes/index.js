const express = require("express");
const router = new express.Router();
const controller = require("../Controllers/showControllers");

router.get("/", controller.getShows);
router.post("/show/add", controller.createShow);
router.patch("/show/:id", controller.updateShow);
router.delete("/show/:id", controller.deleteShow);

router.get("/user", controller.getUsers);
router.post("/user/add", controller.createUser);
router.patch("/user/:id", controller.updateUser);
router.delete("/user/:id", controller.deleteUser);

module.exports = router;