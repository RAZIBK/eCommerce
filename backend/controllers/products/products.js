const Product = require("../../model/product/product");
const cloudinaryUploadImg = require("../../utils/cloudinary");
const fs = require("fs");

const productCtrl = async (req, res) => {
    
    console.log(req.file);
  try {
    const localPath = `public/images/product/${req.file.filename}`;
    const imaggeUpload = await cloudinaryUploadImg(localPath);
    console.log(imaggeUpload);
    console.log(req.body.productName);

    const product = await Product.create({
      productName: req?.body?.productName,
      price: req?.body?.price,
      image: imaggeUpload.url,
      category: req?.body?.category,
      subcategory: req?.body?.subcategory,
    });
    console.log(product);
    fs.unlinkSync(localPath);
    res.json( product );
  } catch (error) {
    res.json(error);
  }
};

const allproductCtrl = async (req, res) => {

    try {
      const hasCategory = req.query.subcategory;
      console.log(hasCategory);
    if (hasCategory) {
      const posts = await Product.find({ subcategory: hasCategory })
        .populate("category")
        .populate("subcategory")
      res.json(posts);
    } else {
      const posts = await Product.find({})
      .populate("category")
      .populate("subcategory")
      res.json(posts);
    }
    } catch (error) {
      res.json(error);
    }
  };



module.exports = { productCtrl,allproductCtrl };
