const model=require("../../models/models");

const homePage=async(req, res) => {
 
    const modelData=await model.find();
    // console.log(modelData)
    res.render("index",{
        model:modelData
    })
  }


  module.exports=homePage;