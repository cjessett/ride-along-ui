var axios = require('axios');

function fetchAvailableRides(id) {
  return axios("http://localhost:3000/trips/available.json");
}

function fetchMyTrips(id) {
  return axios("http://localhost:3000/trips/drives.json");
}

function createTripRequest(id, user) {
  var url = 'http://localhost:3000/trips/' + id + '/requests'
  return axios.post(url, {user_id: user})
}

function tripRequestResponse(id, response) {
  var url = 'http://localhost:3000/requests/' + id
  return axios.put(url, {response: response})
}

var helpers = {
  getAvailableRides: function(id) {
    return fetchAvailableRides(id)
      .then(function(response) {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getMyTrips: function(id) {
    return fetchMyTrips(id)
      .then(function(response) {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  },
  joinTripRequest: function(trip_id, user_id) {
    return createTripRequest(trip_id, user_id)
      .then(function(response) {
        return;
      })
      .catch((error) => {
        console.log(error);
      })
  },
  respondToTripRequest: function(request_id, response) {
    return tripRequestResponse(request_id, response)
      .then(function(response) {
        return;
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

module.exports = helpers;
