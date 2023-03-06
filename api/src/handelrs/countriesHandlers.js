
const { getIdCountry , getAllCountry, getNameCountry, getCountryApi } = require ("../controllers/countriesControllers")
const Country = require("../models/Country")


const getCountriesHandler = async (req, res) => { 
    getCountryApi()
    const { name } = req.query
    try{
        const countries = await getAllCountry()
        if (name) {
     
            const country = await getNameCountry(name)
            if (country.length) {
                return res.status(200).json(country)
            }
            return res.status(400).json(`No se encontraron paises con el nombre ${name}`)
        }
        return res.status(200).json(countries)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}



const getCountryHandler = async (req, res) => {
    const { id } = req.params
    console.log(id)
    try{
        const countryId = await getIdCountry(id)
        if(countryId) return res.status(200).json (countryId)
        else return res.status(400).json(`No hay paises con el Id: ${id}`)     
    } catch (error) {
        res.status(400).json({error: error.message})
    }
      
}


module.exports = { getCountriesHandler, getCountryHandler}
