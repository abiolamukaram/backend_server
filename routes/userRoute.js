const express = require("express")
const { registerUser, registerAdmin} = require("../controllers/userController")

const router = express.Router()

router.post("/register", registerUser)
router.post("Admin", registerAdmin)


module.exports = router