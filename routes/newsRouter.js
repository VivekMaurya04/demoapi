const express=require("express")
const { default: fetch } = require("node-fetch")
const {  NewsModel } = require("../model/news.model")
require("dotenv").config()
const newsRoute=express.Router()

newsRoute.post("/",async(req,res)=>{
try {
    let pre=await fetch(`https://newsapi.org/v2/top-headlines?q=${req.body.city}&apiKey=${process.env.NEWS_API_KEY}`)
    let data=await pre.json()
    let newData=new NewsModel(data)
    newData.save()
    res.send(data)

} catch (error) {
    res.send(error.message)
}
})

module.exports={
    newsRoute
}