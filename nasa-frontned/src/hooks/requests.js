const API_URL = "http://localhost:3001"

async function httpGetPlanets() {
  try {
    const response = await fetch(`${API_URL}/planets`);
    return await response.json();
  } catch (error) {
    
  }
}

async function httpGetLaunches() {
  try {
    const response = await fetch(`${API_URL}/launches`);
    const launches = await response.json();
    return launches.sort((a,b)=>{
      return a.flightNumber-b.flightNumber
    })
  } catch (error) {
    
  }
}

async function httpSubmitLaunch(launch) {
  try {
    var config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(launch)
    }
    const response = await fetch(`${API_URL}/launches`,config)
    return await response.json();
  } catch (error) {
    
  }
}

async function httpAbortLaunch(id) {
  try {
    const respnse = await fetch(`${API_URL}/launches/${id}`,{
      method: "delete"
    });
    return await respnse;

  } catch (error) {
    
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};