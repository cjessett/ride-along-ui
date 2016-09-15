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

function removeRider(trip_id, user_id) {
  var url = 'http://localhost:3000/trips/' + trip_id
  return axios.patch(url, {user_id: user_id})
}

function postTrips(data) {
  debugger
  var url = 'http://localhost:3000/trips'
  return axios.post(url, {departure_time: data.departure, arrival_time: data.arrival})
}

var helpers = {
  getAvailableRides: function(id) {
    return fetchAvailableRides(id)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      });
  },
  getMyTrips: function(id) {
    return fetchMyTrips(id)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  joinTripRequest: function(trip_id, user_id) {
    return createTripRequest(trip_id, user_id)
      .then((response) => {
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  respondToTripRequest: function(request_id, response) {
    return tripRequestResponse(request_id, response)
      .then((response) => {
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  removeRider: function(trip_id, user_id) {
    return removeRider(trip_id, user_id)
      .then((response) => {
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  createTrip: function(data) {
    return postTrips(data)
      .then((response) => {
        return;
      })
      .catch((error) => {
        console.error(error);
      })
  }
}

module.exports = helpers;
