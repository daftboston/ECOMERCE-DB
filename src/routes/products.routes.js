const { Router } = require("express");
const { getAllProducts, createProduct, uploadProductImage, updateProductDescription } = require("../controllers/products.controllers");
const upload = require("../middlewares/upload.middleware");

const router = Router();





router
   .route("/products")
   .get(getAllProducts)
   .post(createProduct)
   .put(upload.single("productImage"),uploadProductImage)

router.put("/products/description/:id", updateProductDescription)
   
   

module.exports = router;