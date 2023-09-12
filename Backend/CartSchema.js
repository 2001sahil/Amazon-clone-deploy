const mongose=require("mongoose")

const data=new mongose.Schema({
    user:{
        type:mongose.Schema.Types.ObjectId,
        ref:"User",
    },
    Product:{
        type:String,
        require:true
    }
})
const cartschema = mongose.model("Cart", data);

module.exports=cartschema