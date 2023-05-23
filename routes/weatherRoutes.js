const express=require("express")
const { default: fetch } = require("node-fetch")
const { WeatherModel } = require("../model/weather.model")


const weather=express.Router()


weather.post("/",async(req,res)=>{
    try {
        let pre=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${process.env.API_KEY}`)
        let data=await pre.json()
        let newData=new  WeatherModel(data)
        newData.save()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }

    //res.send("Temp. Get")
})

module.exports={
    weather
}