mongoose=require('mongoose')
mongoose.set('strictQuery', true);
const mongoDB='mongodb+srv://shootersahil20:sahil093@cluster1.onls5z7.mongodb.net/?retryWrites=true&w=majority'


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
 



