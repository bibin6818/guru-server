const products = require('../models/productModel')
// get all products
exports.getAllProductsController = async (req,res)=>{
    console.log("inside getAllProductsController");
    try{
        const allProducts = await products.find();
        res.status(200).json(allProducts)
    }catch(err){
        res.status(401).json(err)
    }
}

// view products
exports.getAProductController = async (req,res)=>{
    console.log("inside getAProductController");
    const {id} = req.params
    try{
        const singleproduct = await products.findOne({id})
        res.status(200).json(singleproduct)
    }catch(err){
        res.status(401).json(err)
    }
}






