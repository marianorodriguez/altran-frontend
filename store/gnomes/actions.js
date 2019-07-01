import Axios from 'axios';

export const FETCH_GNOMES_BEGIN = 'FETCH_GNOMES_BEGIN';
export const FETCH_GNOMES_SUCCESS = 'FETCH_GNOMES_SUCCESS';
export const FETCH_GNOMES_ERROR = 'FETCH_GNOMES_ERROR';

const fetchGnomesBegin = () => ({
  type: FETCH_GNOMES_BEGIN,
});

const fetchGnomesSuccess = items => ({
  type: FETCH_GNOMES_SUCCESS,
  payload: { items },
});

const fetchGnomesError = error => ({
  type: FETCH_GNOMES_ERROR,
  payload: { error },
});

export function fetchGnomes() {
  return (dispatch) => {
    dispatch(fetchGnomesBegin());
    return Axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
      .then(({ data }) => data.Brastlewark)
      .then((json) => {
        dispatch(fetchGnomesSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchGnomesError(error)));
  };
}
