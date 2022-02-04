const Router = require("express").Router();
const citiesController = require("../controllers/dataController")
const {ObtenerTodosLosDatos} = citiesController //extrayendo la constante

Router.route("/datos") //url de la ruta de consulta
.get(ObtenerTodosLosDatos)

module.exports = Router