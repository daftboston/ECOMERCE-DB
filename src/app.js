const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const multer = require('multer')

const apiRoutes = require("./routes");
const errorRoutes = require("./routes/error.routes");
const path = require ('path')

// creamos una instancia de multer



const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

apiRoutes(app);

app.use ('/avatars', express.static(path.join(__dirname,'../public')))

app.get("/", (req, res) => {
  res.json({
    message: "Bienvenido a mi app",
  });
});

errorRoutes(app);

module.exports = app;

// $2b$10$C/i8/EVDWgZokvsLFtGBi.jv9nT2XrrPX1Z9HtTz5k5eAfcwE17sG
