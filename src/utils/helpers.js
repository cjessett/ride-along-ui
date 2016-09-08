var axios = require('axios');

var helpers = {
  getTripInfo: function() {
                return axios('http://localhost:3000/trips/available?user_id=1')
                  .then(function(response) {
                    return response.data.data
                  })
                }
}

module.exports = helpers
