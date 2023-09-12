const express=require("express")
const cartschema=require("./CartSchema")
const router=express.Router()
const { fetuser } = require("./middleware/fetuser");
router.get("/getitem",fetuser,async (req,res)=>{
    try {
        const notes=await cartschema.find({user:req.id})
        res.send((notes))     
    } catch (error) {
        res.send("Here an error occured")     
    }
})
router.delete("/empty",fetuser,async (req,res)=>{
    try {
        await cartschema.deleteMany({user:req.id})
        
        
        res.send("all items deleted")
    } catch (error) {
        res.send("Here an error occured")  
    }
})
router.post("/additem",fetuser,async (req,res)=>{
    try {
        const Product=req.body.Product;
        const data=new cartschema({user:req.id,Product:Product})
        // cons
        data.save()
        res.send(data)        
    } catch (error) {
        res.send("Here an unexpected error occured")        
    }
})
router.delete("/deletenote",fetuser,async(req,res)=>{
    try{
        const note=await cartschema.findOne({Product:req.body.Product,user:req.id})
        if(!note){res.send("no note exist")}
        
        const data=await cartschema.deleteOne({Product:req.body.Product,user:req.id})
        res.send("succesfully deleted")
        

    }catch(error){
        res.send("Here an unexpected error occured")
    }
})
router.put("/update:id",fetuser,async (req,res)=>{
    try {
        const note=await cartschema.findById(req.params.id)
        if(!note){
            return res.send("wrong id provided")
        }
        if(note.user.toString()!==req.id){
            return res.send("Not autherised")
        }      
        await cartschema.findByIdAndUpdate({_id:req.params.id},{$set:{ Name:req.body.Name}},{new:true})
        res.send("updated successfully")
    } catch (error) {      
        res.send("Here an unexpected error occured")        
    }
})



module.exports=router
