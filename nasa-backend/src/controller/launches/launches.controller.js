
const {
    getLaunches,
    addNewLauch,
    deleteLaunch,
    existLaunchById
} = require("../../models/launches.model");

const httpGetAllLaunches = async(req,res)=>{
    try {
        res.status(200).json(getLaunches());
    } catch (error) {
        
    }
}

const httpAddNewLaunche = async(req,res)=>{
    try {
        const launch = req.body;
        launch.launchDate = new Date(launch.launchDate);
        if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
            return res.status(400).json({error: "Al values are required"});
        }
        if(launch.launchDate.toString()==="Invalid Date"){
            return res.status(400).json({error: "Invalid launch date"});
        }

        const newLaunch = addNewLauch(launch);
        res.status(200).json(newLaunch);
    } catch (error) {
        console.log(error);
    }
}

const httpDeleteLaunche = async(req,res)=>{
    try {
        const {id} = req.params;
        if(!existLaunchById(id)){
            return res.status(404).json({error: "This launch doesn't exist"})
        }
        const aborted = deleteLaunch(id);
        return res.status(200).json(aborted)

    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunche,
    httpDeleteLaunche
}