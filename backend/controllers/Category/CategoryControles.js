const Category = require("../../model/category/category");



const categoryCtrl =(async (req,res)=>{ 
    try {
        const category =await Category.create({

            category:req?.body?.category,
        });
        res.json(category)
    } catch (error) {
        res.json(error)
    }
})

const getallcategoryCtrl =(async (req,res)=>{ 
    try {
        const category =await Category.find({});
        res.json({category})
    } catch (error) {
        res.json(error)
    }
})

module.exports = {categoryCtrl,getallcategoryCtrl}
