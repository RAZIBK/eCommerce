const express = require("express");
const { productCtrl,allproductCtrl } = require("../../controllers/products/products");
const { PhotoUpload, profilePhotoResize } = require("../../middlewares/uploads/imageUpload");
const productRoutes = express.Router();



productRoutes.post('/',PhotoUpload.single("image"),profilePhotoResize,productCtrl)
productRoutes.get('/',allproductCtrl)


module.exports=productRoutes;
