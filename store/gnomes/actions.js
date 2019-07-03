import Axios from 'axios';

export const FETCH_GNOMES_BEGIN = 'FETCH_GNOMES_BEGIN';
export const FETCH_GNOMES_SUCCESS = 'FETCH_GNOMES_SUCCESS';
export const FETCH_GNOMES_ERROR = 'FETCH_GNOMES_ERROR';
export const FILTER_GNOMES = 'FILTER_GNOMES';
export const LOAD_MORE_GNOMES = 'LOAD_MORE_GNOMES';

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

const filterGnomesBegin = text => ({
  type: FILTER_GNOMES,
  payload: { text },
});

const loadMoreGnomes = () => ({
  type: LOAD_MORE_GNOMES,
});

export function filterGnomes(text) {
  return dispatch => dispatch(filterGnomesBegin(text));
}

export function loadMore() {
  return dispatch => dispatch(loadMoreGnomes());
}

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
