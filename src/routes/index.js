const userRoutes = require("./user.routes");
const productsRoutes = require ('./products.routes')
const carRoutes = require ('./cars.routes')
const productsInCar = require('./productsincar.routes')

const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(productsRoutes);
  app.use(carRoutes);
  app.use(productsInCar)
};

module.exports = apiRoutes;
