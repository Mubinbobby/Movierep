const mongoose=require('mongoose'); 
//Creating the schema
const movieSchema=mongoose.Schema({
    movieName:String,
    movieDirector:String,
    movieDescription:String,
    moviePrice:Number
})

const movieData=mongoose.model('movie',movieSchema); //collection name without last 's' and schema name
module.exports=movieData //schema export