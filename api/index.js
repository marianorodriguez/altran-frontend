import Axios from 'axios';

export default {
  getBrastlewarkGnomes: () => Axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
    .then(({ data }) => data.Brastlewark),
};
