const Cities = require("../models/cities.js")

const citiesController =  {
    ObtenerTodosLosDatos:async(req,res)=>{
        let cities
        let error = null
        try {
            cities = await Cities.find()
        } catch (err) {
            error = err
            console.log(error)
        }

        res.json({
            response:error?"ERROR":{cities},
            success:error?false:true,
            error:error
        })
    },
    obtenerUnaCiudad: async (req, res) => {
        const id = req.params.id
        console.log(req.params)
        try {
            const city = await Cities.findOne({_id:id})
            res.json({success:true, response:{city}})
        }catch (error){console.log (error)}
    }
} 

module.exports = citiesController