const axios = require ("axios")
const { Country, Activity } = require("../db")
const { Op } = require("sequelize");

const getCountryApi = async () => {
    const apiDB = await Country.findAll()
    if (apiDB.length) return apiDB //? di tengo algo, no hago nada

    let apiResponse = await axios.get("https://restcountries.com/v3/all") // ? solicita los datos a la api externa
    const allCountries = await apiResponse.data.map(country => ({ //? trae los datos unificando el formato
        id: country.cca3, 
        name: country.name.common,
        flag: country.flags[1],
        capital: country.capital ? country.capital[0] : "Este paìs no tiene una capital",
        continent: country.region,
        subRegion: country.subregion,
        area: country.area || null, 
        population: country.population || null
    }))

    apiInformation = await Country.bulkCreate(allCountries) //? guardo los datos con el formato unificado en mi db
    return await Country.findAll()

}



const getAllCountry = async () => {
    const countries = await Country.findAll(
        {
            include: {
            model: Activity,
            as: 'activities',
            attributes: ["name", "difficulty", "duration", "season"]
        }
    }
    )
    return countries
}




const getNameCountry = async (name) => {
    const country = await Country.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
          }
        },
        include: {
            model: Activity,
            as: 'activities',
            attributes: ["name", "difficulty", "duration", "season"]
        }
    },
    );
    
    return country;
}


const getIdCountry = async (id) => {
    const countryId = await Country.findByPk(id, {
        include: {
            model: Activity,
            as: 'activities',
            attributes: ["name", "difficulty", "duration", "season"]
        }
        
    })
    return countryId
}




module.exports = {
    getCountryApi,
    getAllCountry,
    getIdCountry,
    getNameCountry,
}
