const mongoose=require("mongoose")

const weatherSchema=mongoose.Schema({

coord:Object,
Weather:Array,
base:String,
main:Object,
visibility:Number,
wind:Object,
clouds:Object,
dt:Number,
sys:Object,
timezone:Number,
id:Number,
name:String,
cod:Number
})

const WeatherModel=mongoose.model("weather",weatherSchema)


module.exports = {
    WeatherModel
}