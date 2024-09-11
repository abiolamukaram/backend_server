const user =require("../models/userModel.js")
const generateToken = require("../utils/generatetoken.js")

const registerUser = async (req,res) => {
    const {firstName, lastName, email, phone, password} = req.body
    const userExist = await User.findOne({email})
    if(userExist){
        return res.status(400).json({message: "user already exist"})
    }
    const user = await User.create({firstName, lastName, email, phone, password})
    if(User){
        // return res.status(201).json({message: "user registered successfully"})
        const token = generateToken(user._id)
        res.cookies("jwt", token, {
            httponly: true,
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000
        })
        res.status(201).json({
            message: "user registered successfully",
            user,
            token
        })
    } else{
        res.status(400).json({error: "invalid user data"})
    }
}
const registerAdmin = async (req,res) => {
    const {firstName, lastName, email, phone, password} = req.body
    const userExist = await User.findOne({email})
    if(userExist){
        return res.status(400).json({message: "user already exist"})
    }
    const user = await User.create({firstName, lastName, email, phone, password})
    if(User){
        return res.status(201).json({message: "user registered successfully"})
    } else{
        res.status(400).json({error: "invalid user data"})
    }
}

module.exports = {
    registerUser,
    registerAdmin
}