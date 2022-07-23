const Joi = require("joi")
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
   }    

 module.exports={user} 