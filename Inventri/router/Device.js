const express =  require("express");
const router = express.Router();

const {adddevice,allDivice,updatedevice,deletedevice}=require('../controller/Divice')
router.post('/device',adddevice); 
router.get('/device',allDivice);
router.put('/device/:id',updatedevice)
router.delete('/device/:id',deletedevice)

module.exports=router