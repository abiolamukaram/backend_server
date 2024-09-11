const express = require("express")

const app = express()


// port
// const port = 5000
require("dotenv").config()
const PORT = process.env.PORT || 5000


const connectDB = require("./database/db")
connectDB()

const userRoute = require("./routes/userRoute")


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/api", (req,res) => {
    res.json({message: "welcome to my server"})
})


app.listen(PORT, () => {
    console.log("server started  successfully");
})