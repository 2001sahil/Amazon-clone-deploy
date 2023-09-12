const mongose=require("mongoose")
const data=new mongose.Schema({
    Name:{
        type:String,
        require:true
    },
    PhoneNo:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true

    },
    email:{
        type:String,
        require:true
    }
})
const user = mongose.model("User", data);

module.exports=user