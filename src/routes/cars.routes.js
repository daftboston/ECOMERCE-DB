const {Router}= require('express')
const { addProductToCar, buyProductsInCar,getProductsInCar } = require('../controllers/car.controllers')

const router = Router()

router.post ('/products/car/:id', addProductToCar)
router.post("/products/order/", buyProductsInCar);
router.get('/products/car/:id', getProductsInCar)

module.exports=router