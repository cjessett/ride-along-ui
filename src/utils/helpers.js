var axios = require('axios');

var helpers = {
  getTripInfo: function(id) {
                return axios("http://localhost:3000/trips/available?user_id=" + id)
                  .then(function(response) {
                    return response.data.data
                  })
                }
}

module.exports = helpers
