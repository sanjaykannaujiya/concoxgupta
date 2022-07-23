const express =  require("express");
const router = express.Router();
const{user}=require('../../Middleware/auth')
const {adduser,alluser,updateuser,deleteteam}=require('../controller/UserControll') 
router.post('/user',adduser); 
router.get('/user',alluser);
router.put('/user/:id',updateuser)
router.delete('/user/:id',deleteteam)
module.exports = router