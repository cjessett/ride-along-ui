var axios = require('axios');

export default function(username) {
  return axios('http://localhost:3001/users/1')
};
