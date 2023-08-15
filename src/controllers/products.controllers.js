const {Products}= require('../models/')
const { Op } = require("sequelize");

const getAllProducts=async(req, res,next)=>{ 
try {
    //pedir todos los productos al modelo 
    const products = await Products.findAll(
        {
            where: {availableQty:{
                [Op.gt]:0
            }}
        }
    )
 res.json (products);
 } catch (error){
 next(error)
 }
}


const createProduct=async(req, res, next)=>{ 
try {
 const {name,description,price,availableQty,userId,productImage}= req.body

  await Products.create({
    name,description,price,availableQty,userId,productImage,
 })

 createProduct
 res.json ({});
 } catch (error){
 next(error)
 }
}

const updateProductDescription= async(req, res, next)=>{
    try {
        const {id}=req.params
        const{description}=req.body
        await Products.update(
            {description},{where:{id}})
        res.json({})
    } catch (error) {
        next(error)
    }
}

const uploadProductImage=async(req, res, next)=>{ 
try {
    const {file,body}=req

    const url =
    process.env.NODE_ENV === "production"
      ? `${process.env.URL}/avatars/${file.filename}`
      : `${process.env.URL}:${process.env.PORT}/avatars/${file.filename}`;


    console.log(body);
    await Products.update(
        {productImage:url},{
            where:{id:Number(body.id)}
        }
        )

 res.json ({});
 } catch (error){
 next(error)
 }
}


module.exports={
 getAllProducts,
 createProduct,
 uploadProductImage,
 updateProductDescription
}