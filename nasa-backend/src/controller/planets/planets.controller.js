const {getPlanets} = require("../../models/planets.model");

const getAllPlanets = async(req,res)=>{
    try {
        res.status(200).json(getPlanets());
    } catch (error) {
        
    }
}

module.exports = {
    getAllPlanets
}