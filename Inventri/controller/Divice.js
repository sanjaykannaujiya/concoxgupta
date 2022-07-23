const device=require('../model/Divice') 
const Joi = require("joi")
const result=require('date-and-time')
const jwt=require('jsonwebtoken')
const { json } = require('body-parser')
exports.adddevice=async(req,res)=>{
    try{
        let{imei,serial,model,manufacturer}=req.body
        const user = Joi.object({
            imei:Joi.string().required(),
            serial:Joi.string().required(),
            model:Joi.string().required(),
            manufacturer: Joi.string().required(),
           })
           let result =user.validate(req.body)
           if(result.error){
               res.status(400).json(result.error.details[0].message)
               return ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
           }else{
             const exist = await device.exists({imei:req.body.imei});
             if(exist){
                 return  res.status(400).json("This is device ");
             
             }else{
               
              const alluser = new device({
                imei,serial,model,manufacturer 
              })
             const saveuser =await alluser.save();
             res.status(200).json({message:"device is save ",saveuser}) 
           } 
             
         }
             
         }catch(err){
             res.status(500).json(err)
             console.log(err)
         }
     }
     exports.allDivice=async(req,res)=>{ 
         try{
            const {page ,limit} = req.query
            const skip = (page-1)*10
             const allfind= await device.find().skip(skip).limit(limit)
                 res.status(200).json({message:"this is divice",allfind})
         }catch(error){
             res.status(500).json(err)
         }
     }
     exports.updatedevice=async(req,res)=>{
         try{
             const putuser=await device.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
             res.status(200).json({massage:"this is divice",putuser})
         }catch(error){
             res.status(500).json(error)
         }
     
     
     
     }
     exports.deletedevice=async(req,res)=>{
         try{
             const deltuser= await device.findByIdAndDelete(req.params.id)
             res.status(200).json({massage:"this is divice"})
     
         }catch(error){
             res.status(500).json(error)
            
         }
     }
