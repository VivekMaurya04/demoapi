const express= require("express");
const { weather } = require("./routes/weatherRoutes");
const { connection } = require("./db");
const { newsRoute } = require("./routes/newsRouter");
const cors=require("cors")
require("dotenv").config()
const app=express()
app.use(express.json())
app.use(cors({
    origin:"*"
}))
app.use("/weather",weather)
app.use("/news",newsRoute)
app.listen(process.env.PORT,async(req,res)=>{
    try {
        await connection
        console.log("DataBase is Ready");
        console.log(`Server is running on port ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
        res.send(error.message)
    }
})