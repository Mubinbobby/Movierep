const express=require('express');
const router=express.Router();
const movieModel=require('../model/movieData');

router.use(express.json()); //Imp when we use post operation
router.use(express.urlencoded({extended:true})); //using for encode image or url

//Get Operation
router.get('/',async(req,res)=>{
    try {    
        const data=await movieModel.find();
        res.status(200).send(data);
        
    } catch (error) {
        res.status(404).send('Data not found');
    }

}) 

//Post Operatrion
router.post('/addMovies',async(req,res)=>{
    try {
        var item=req.body;
        const data1=new movieModel(item); //need to embed in the model folder
        const saveddata=await data1.save();
        res.status(200).send('Post Successful');
    } catch (error) {
        res.status(404).send('Post Unsuccessful');
    }
})

//Update Operation
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await movieModel.findByIdAndUpdate(id,req.body)
        res.status(200).send('Update successful')
    } catch (error) {
        res.status(404).send('Update unsuccessful')
    }
})

//Delete Operation 
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await movieModel.findByIdAndDelete(id)
        res.status(200).send('Delete successful')
    } catch (error) {
        res.status(404).send('Delete unsuccessful')
    }
})



module.exports=router;