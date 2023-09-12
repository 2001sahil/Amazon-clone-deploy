const mongose=require("mongoose")
const data=new mongose.Schema({
    user:{
        type:mongose.Schema.Types.ObjectId,
        ref:"User",
    },
    Orders:{
        type: String,
        req:true
    },
    Paymentid:{
        type:String,
        req:true
    },
    createdAt: {
        type: Date,
        default: Date.now, // Use a function to set the default value to the current timestamp
    },
})
const Ordershema = mongose.model("Orders", data);

module.exports=Ordershema