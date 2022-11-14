const Subcategory = require("../../model/subcategory/subcategory");

const subcategoryCtrl = async (req, res) => {
  console.log(req.body);
  try {
    const subcategory = await Subcategory.create({
      category: req?.body?.category,
      subcategory: req?.body?.subcategory,
    });
    res.json(subcategory);
  } catch (error) {
    res.json(error);
  }
};

const getsubcategoryCtrl = async (req, res) => {
  console.log(req.params.id);
  try {
    const subcategory = await Subcategory.find({
      category: req.params.id,
    });
    res.json(subcategory);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { subcategoryCtrl, getsubcategoryCtrl };
