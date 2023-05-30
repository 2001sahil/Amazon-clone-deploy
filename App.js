const express=require("express")
const app=express()
var cors = require('cors')
const path=require('path')
const port=8000
app.use(express.json())
app.use(cors())
// static files////////////////////
app.use(express.static(path.join(__dirname,'./amazon-clone/build')))

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,'./amazon-clone/build/index.html'))
})





app.get('/',(req,res)=>{
    res.send("App is live")
})



app.use("/Account",require("./LoginANdCreateaccount"))
app.use("/Cart",require("./Cart"))
app.listen(port,()=>{
    console.log("app started")
})
const Mongo=require('./Mongo');
Mongo.Mongo()