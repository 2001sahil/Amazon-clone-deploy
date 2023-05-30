const express=require("express")
const userschema=require("./CartSchema")
const router=express.Router()
const { fetuser } = require("./middleware/fetuser");
router.get("/getitem",fetuser,async (req,res)=>{
    try {
        const notes=await userschema.find({user:req.id})
        res.send((notes))     
        // console.log(notes)   
    } catch (error) {
        res.send("Here an error occured")  
        console.log("error")      
    }
})
router.post("/additem",fetuser,async (req,res)=>{
    try {
        const Product=req.body.Product;
        // console.log("ok")
        // console.log(req.id)
        const data=new userschema({user:req.id,Product:Product})
        // cons
        data.save()
        res.send(data)        
    } catch (error) {
        console.log("error")
        res.send("Here an unexpected error occured")        
    }
})
router.delete("/deletenote",fetuser,async(req,res)=>{
    try{
        const note=await userschema.findOne({Product:req.body.Product,user:req.id})
        // console.log("Yes" ,note)
        if(!note){res.send("no note exist")}
        
        const data=await userschema.deleteOne({Product:req.body.Product,user:req.id})
        res.send("succesfully deleted")
        

    }catch(error){
        res.send("Here an unexpected error occured")
    }
})
router.put("/update:id",fetuser,async (req,res)=>{
    try {
        const note=await userschema.findById(req.params.id)
        if(!note){
            return res.send("wrong id provided")
        }
        if(note.user.toString()!==req.id){
            return res.send("Not autherised")
        }      
        await userschema.findByIdAndUpdate({_id:req.params.id},{$set:{ Name:req.body.Name}},{new:true})
        res.send("updated successfully")
    } catch (error) {
        console.log("error")      
        res.send("Here an unexpected error occured")        
    }
})


module.exports=router
