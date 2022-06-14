const launches = new Map();

let flightNumber = 100;

const getLaunches = ()=>{
    return Array.from(launches.values());
}
const addNewLauch = (launch)=>{
    flightNumber++
    const newLauch = Object.assign(launch,{
        flightNumber,
        customers: ["NASA","SPACEX", "ZTM"],
        upcoming:true,
        success:true
        });
    launches.set(flightNumber,newLauch);
    return newLauch;
}

const existLaunchById = (id)=>{
    const keys = Array.from(launches.keys())
    return keys.includes(parseInt(id));
}
const deleteLaunch = (id)=>{
    const aborted = launches.delete(parseInt(id));
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}


module.exports = {
    getLaunches,
    addNewLauch,
    deleteLaunch,
    existLaunchById
}