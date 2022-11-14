const express = require("express");
const { subcategoryCtrl, getsubcategoryCtrl } = require("../../controllers/subcategory/subcategory");

const subcategoryRoutes = express.Router();


subcategoryRoutes.post('/',subcategoryCtrl)
subcategoryRoutes.get('/:id',getsubcategoryCtrl)



module.exports=subcategoryRoutes;
