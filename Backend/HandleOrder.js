const express=require("express")
const Ordershema=require("./Orders")
const router=express.Router()
const { fetuser } = require("./middleware/fetuser");
router.get("/getitem",fetuser,async (req,res)=>{
    try {
        const orders=await Ordershema.find({user:req.id}).sort({ createdAt: -1 })
        res.send((orders))     
    } catch (error) {
        res.send("Here an error occured")     
    }
})

router.post("/additem",fetuser,async (req,res)=>{
    try {
        const Basket=req.body.Basket;
        const data=new Ordershema({user:req.id,Orders:req.body.Basket,Paymentid:req.body.Paymentid,createdAt:new Date()})
        data.save()
        // console.log("data is added")
        res.status(201).send(data)        
    } catch (error) {
        console.log("some error is tehre",error)
        res.send("Here an unexpected error occured")        
    }
})










module.exports=router
