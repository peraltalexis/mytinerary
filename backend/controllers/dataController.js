const Cities = require("../models/cities")

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
    } //(require and response)
} 

module.exports = citiesController