import {
  FETCH_GNOMES_BEGIN,
  FETCH_GNOMES_SUCCESS,
  FETCH_GNOMES_ERROR,
  FILTER_GNOMES,
} from './actions';

const initialState = {
  items: [],
  paginatedAndFilteredItems: [],
  loading: false,
  error: null,
};

function doFilter(state, action) {
  return {
    ...state,
    loading: false,
    error: null,
    paginatedAndFilteredItems: state.items.filter(i => i.name.match(new RegExp(action.payload.text, 'gi'))),
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GNOMES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_GNOMES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items,
        paginatedAndFilteredItems: action.payload.items,
      };
    case FETCH_GNOMES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FILTER_GNOMES: return doFilter(state, action);
    default:
      return state;
  }
};
