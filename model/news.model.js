const mongoose=require("mongoose")
const newsSchema=mongoose.Schema({
    status:String,
    totalResults:Number,
    articles:Array,

})
const NewsModel=mongoose.model("new",newsSchema)

module.exports={
    NewsModel
}