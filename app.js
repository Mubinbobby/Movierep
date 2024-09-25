const express=require('express');
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));

const movieRoutes=require('./routes/movieroutes')
app.use('/movies',movieRoutes);

require('dotenv').config();  //For requiring env
const PORT=process.env.PORT

require('./db/connection'); //linking mongoose connection






app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})