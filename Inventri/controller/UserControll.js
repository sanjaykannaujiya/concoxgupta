const User=require('../model/User')
const Joi = require("joi")
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
exports.adduser =async(req,res)=>{
    try{
      let {username,name ,email ,password,} = req.body ;  
      const user = Joi.object({
        username:Joi.string().required(),
        name:Joi.string().required(),
        email:Joi.string().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      })  
      let result =user.validate(req.body)
      if(result.error){
          res.status(400).send(result.error.details[0].message)
          return ;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      }else{
        const exist = await User.exists({email:req.body.email});
        if(exist){
            return  res.status(400).json("This email is already taken!");
        
        }else{
          const hashpassword =await bcrypt.hash(password ,10)
         const alluser = new User({
            username,name ,email ,password,
             password: hashpassword          
         })
        const saveuser =await alluser.save();
        res.status(200).json({message:"user is save ",saveuser}) 
      } 
        
    }
        
    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
}

exports.alluser=async(req,res)=>{ 
    try{
        const allfind= await User.find()
        res.status(200).json({message:"this is user",allfind})
    }catch(error){
        res.status(500).json(err)
    }
}
exports.updateuser=async(req,res)=>{
    try{
        const putuser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json({massage:"this is user",putuser})
    }catch(error){
        res.status(500).json(error)
    }
 }
exports.deleteteam=async(req,res)=>{
    try{
        const deltuser= await User.findByIdAndDelete(req.params.id)
        res.status(200).json({massage:"this is user",deltuser})

    }catch(error){
        res.status(500).json(error)
    }
}