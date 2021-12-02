const { fetchMyIP, fetchISSFlyOverTimes, fetchCoordsByIP, nextISSTimesForMyLocation } = require('./iss');

fetchMyIP('https://api.ipify.org?format=json', (error, ip) => {
  if (error) {
    console.log("IP fetch didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('https://api.freegeoip.app/json/?apikey=294d03c0-53b9-11ec-ae4a-81dbbdb16072', (error, data) => {
  if (error) {
    console.log("Coordinates fetch didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coordinates:' , data);
});

fetchISSFlyOverTimes('https://iss-pass.herokuapp.com/json/?lat=45.2722&lon=-75.7522', (error, data) => {
  if (error) {
    console.log("flyover" , error);
    return;
  }
  console.log('It worked! Flyover times:', data);
});