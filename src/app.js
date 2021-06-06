
const express = require("express");

const filmesRotas = require("./Routes/filmesRouters")

const db = require("./data/dataBase")
const app = express();
app.use(express.json());
db.connect()


app.use( "/movies", filmesRotas )




module.exports = app