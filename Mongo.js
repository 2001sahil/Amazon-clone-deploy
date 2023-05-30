mongoose=require("mongoose")
mongoose.set('strictQuery', true);
const mongoDB="mongodb+srv://shootersahil20:Sahil123@cluster0.td0y3ap.mongodb.net/mernstack?retryWrites=true&w=majority"


const Mongo=()=>{
  return(
mongoose.connect(mongoDB,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(()=>{
  console.log("mongodb successfully connected")
}).catch((err)=>{
  console.log(`Here an error occured ${err}`)
})

)}
module.exports={Mongo}


