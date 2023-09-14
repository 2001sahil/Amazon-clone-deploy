mongoose=require('mongoose')
mongoose.set('strictQuery', true);

const mongoDB=process.env.MONGODB_URI


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
 



