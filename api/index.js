const axios = require('axios');

module.exports = {
  getBrastlewarkGnomes: () => axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
    .then(({ data }) => data.Brastlewark),
};
