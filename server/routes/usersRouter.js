import express from "express";
import userController from "../controller/apis";

const router = express.Router();

router.route("/darshboard").post(userController.createUser);

module.exports = router;
