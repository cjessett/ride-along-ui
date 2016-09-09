var axios = require('axios');

function fetchAvailableRides(id) {
  return axios("http://localhost:3000/trips/available?user_id=" + id);
}

function fetchMyTrips(id) {
  return axios("http://localhost:3000/users/" + id + "/trips");
}

function createTripRequest(id, user) {
  var url = 'http://localhost:3000/trips/' + id + '/requests'
  return axios.post(url, {user_id: user})
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
  },
  joinTripRequest: function(id, user) {
    return createTripRequest(id, user)
      .then(function(response) {
        return response.data.pending
      })
    }
}

module.exports = helpers;
