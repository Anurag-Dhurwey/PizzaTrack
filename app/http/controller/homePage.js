const model=require("../../models/items/models_Items");

const homePage=async(req, res) => {
 
    const modelData=await model.find();
    // console.log(modelData)
    res.render("index",{
        model:modelData
    })
  }


  module.exports=homePage;