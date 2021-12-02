const request = require('request');

//
const fetchMyIP = function(url, callback) {
  request(url, function(error, response, body) {

    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

//
const fetchCoordsByIP = function(url, callback) {
  request(url, function(error, response, body) {

    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    
    const data = JSON.parse(body);
    let coordinates = {latitude: data['latitude'], longitude: data['longitude']};
    callback(null, coordinates);
  });
};

//
const fetchISSFlyOverTimes = function(url, callback) {
  request(url, function(error, response, body) {
  
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    
    const data = JSON.parse(body);
    let flyOverTimes = data['response'];
    callback(null, flyOverTimes);
  });
};

const nextISSTimesForMyLocation = function(callback) {
  // empty for now
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation};