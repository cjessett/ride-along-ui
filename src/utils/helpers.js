var axios = require('axios');

function fetchAvailableRides(id) {
  return axios("http://localhost:3000/trips/available?user_id=" + id);
}

function fetchMyTrips(id) {
  return axios("http://localhost:3000/users/" + id + "/trips");
}

var helpers = {
  getAvailableRides: function(id) {
                return fetchAvailableRides(id)
                  .then(function(response) {
                    return response.data.data
                  })
                },
  getMyTrips: function(id) {
    return fetchMyTrips(id)
      .then(function(response) {
        return response.data.data
      })
  }
}

module.exports = helpers;
