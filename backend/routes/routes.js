const Router = require("express").Router();
const citiesController = require("../controllers/dataController")
const {ObtenerTodosLosDatos, obtenerUnaCiudad} = citiesController //extrayendo la constante
const userController = require("../controllers/usersController")
const {nuevoUsuario} = userController
const validator = require("../controllers/validator")

Router.route("/datos") //url de la ruta de consulta
.get(ObtenerTodosLosDatos)

Router.route("/unaCiudad/:id") //url de la ruta de consulta
.get(obtenerUnaCiudad)

Router.route("/signup")
.post(validator, nuevoUsuario)

module.exports = Router