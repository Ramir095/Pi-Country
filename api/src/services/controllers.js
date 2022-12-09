const axios = require("axios");
const { Op } = require("sequelize");
const { conn } = require("../db");
const { Country, Activity } = conn.models;

const getCountries = async () => {
  try {
    let countriesApi = await axios.get('https://restcountries.com/v3/all');
    countriesApi = countriesApi.data.map (c => {
      return {
        id: c.cca3,
        name: c.name.common,
        flag: c.flags[1],
        continent: c.continents[0],
        capital: c.capital ? c.capital[0] : 'the country does not have capital', 
        subregion: c.subregion,
        area: c.area,
        population: c.population
      };
    })
    await Country.bulkCreate(countriesApi)
    // if(!countriesApi) thow new Error('El usuario no existe')
  } catch (error) {
    console.log("Error mais grande do controllers", error)
    //return res.status(404).send(error.message);
  }
}; 

const getAll = async (name) => {
  const where = {};
  if (name) {
    where[name] = { [Op.iLike]: name };
  };
  let countries = await Country.findAll({
    where: where,
    include: {
      model: Activity,
      attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
      through: {
        attributes: [],
      },
    },
  });
  if(!name && !countries.length) {
    // const countriesFound = await Country.findAll({ })
    // console.log(countriesFound.length)
    await getCountries();
    countries = await Country.findAll({
      where: where,
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: {
          attributes: [], 
        },
      },
    });
  }
  return countries;
  };
  // REVISAR!!!!!!!!!!!!!!!!!!!!!!! <<<<
const getById = async (id) => {
  const idM = id.toUpperCase()
  try {
    await getAll();
    let  countryFound = await Country.findByPk(
      idM,
      /// include: {
     //  model. Activity,
    //   atributes: ["name", "etc"] atributos que quiero que incluyta al traer la info
    //   through: {
        //   attributes: []
    //    }
      //}
      { include: Activity },
    )
    return countryFound;
  } catch (error) {
    console.log("Error en byId", error)
  }
};
//---------------------------------------------------------

module.exports = {
  //getCountries,
  getAll,
  getById,
};
// countriesApi.destroy()