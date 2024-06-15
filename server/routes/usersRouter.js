const userController = require("./../controller/apis")
const express = require("express")

const router = express.Router()

router.route('/darshboard').post(userController.createUser)

module.exports = router