const express=require("express")
const app=express()
var cors = require('cors')
const path=require('path')
const stripe=require('stripe')
("rk_test_51NmLV0SAPwCq4NmNxLO1w1DqK5xEREBZqFCeqQLxkysSm9TH9QOv79cQswoGEDMhMXQungjrwQ19YrZw85RqFfAk00Tck1oT2q")
const port=8000
app.use(express.json())
app.use(cors())
// static files////////////////////
// app.use(express.static(path.join(__dirname,'./amazon-clone/build')))

// app.get("*", (req,res)=>{
//     res.sendFile(path.join(__dirname,'./amazon-clone/build/index.html'))
// })

app.get('/',(req,res)=>{
    res.send("App is live")
})

app.use("/Account",require("./LoginANdCreateaccount"))
app.use("/Orders",require("./HandleOrder"))
app.use("/Cart",require("./Cart"))
app.post("/payments/create",async (req,res)=>{
    const total=req.query.total;
    // console.log("payment recieved",total)
    try{
        const paymentIntent=await stripe.paymentIntents.create({
            amount:total,
            currency:"usd",
            description: 'Description of the transaction', 
            receipt_email: 'customer@example.com', // Add customer's email
            // customer: 'CUSTOMER_ID', // Replace 'CUSTOMER_ID' with an existing customer's ID or create a new customer
            shipping: {
                name: 'Customer Name', // Add customer's name
                address: {
                line1: '123 Main Street', // Add customer's address details
                city: 'City',
                postal_code: '12345',
                state: 'State',
                country: 'US', // Country code for India
                },
            },  
        })
        // console.log("pp",paymentIntent)
        res.send({
            clientSecret:paymentIntent.client_secret,
        })
    }
    catch (error) {
        // console.log("cc",error)
        res.status(500).json({ error: error.message });

      }
})




app.listen(port,()=>{
    console.log("app started")
})
const Mongo=require('./Mongo');
Mongo.Mongo()


