const {getPlanets} = require("../../models/planets.model");

const getAllPlanets = async(req,res)=>{
    try {
        console.log();
        res.status(200).json(getPlanets());
    } catch (error) {
        
    }
}

module.exports = {
    getAllPlanets
}