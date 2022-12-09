const { conn } = require("../db");
const { Country, Activity } = conn.models;

const postActivities = async (req, res) => {
    const { name, difficulty, duration, season, country } = req.body;
    //console.log(req.body)
    try {
        if (!name || !difficulty || !duration || !season || !country) {
            throw new Error('Falta  completar datos')
            
        };
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });
        //console.log(newActivity)
        const countryDb = await Country.findAll({ where: { name: country }}); /// me tiene que llegar contry por body y luego lo buscamos en el la tabla de country
        //console.log("CountyDb", countryDb)
        newActivity.addCountries(countryDb); // a activity agregale el country. addCountries me trae de la tabla countries el countryDB 
        return res.status(200).json(newActivity)   

    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
};

module.exports = {
  postActivities,
};
