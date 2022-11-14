const express = require("express");
const { categoryCtrl, getallcategoryCtrl } = require("../../controllers/Category/CategoryControles");
const categoryRoutes = express.Router();


categoryRoutes.post('/',categoryCtrl)
categoryRoutes.get('/',getallcategoryCtrl)


module.exports=categoryRoutes;