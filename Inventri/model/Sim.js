const mongoose =require('mongoose')
const Schema =mongoose.Schema
const simSchema =new Schema({
    serial:{
        type:String,
        require:true,
       
    },
    phone:{
        type:String,
        require:true,
       
    },
    seller:{
        type:String,
        require:true,
       
    },
    operator:{
         type:String,
         require:true,
        
    },
    providedBy:{
        type:String,
        require:true,
       
   }

})
module.exports=mongoose.model("Sim",simSchema)