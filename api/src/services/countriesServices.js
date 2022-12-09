const { conn } = require("../db");
const { Country } = conn.models;
const { getAll, getById } = require("./controllers");

const getAllCountries = async (req, res) => {
  try {
    const { name } = req.query;

    if (name) {
      const AllCountries = await getAll();
      const countryName = AllCountries.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      if (countryName && countryName.length) {
        res.status(200).json(countryName);
      } else {
        res.status(404).send({message: "No se encontró el país"});
      }
    } else {
      const AllCountries = await getAll();
      return res.status(200).send(AllCountries);
    }
  } catch (error) {
      return res.status(404).send({message: error.message});
  }
};

const getCountryId = async (req, res) => {
    const { id } = req.params;
    try {
        const countryFound = await getById(id);
        if(countryFound) res.status(200).json(countryFound)
        else throw new Error('No se encontro el pais con el id indicado')
    } catch (error) {
        //console.log("Error en getCountryId", error)
        return res.status(404).send(error.message);
    }
};

module.exports = {
  getAllCountries,
  getCountryId
};


// const countryFound = await getById(id);
// if(countryFound) res.status(200).json(countryFound)
// else throw new Error('No se encontro el pais con el id indicado')