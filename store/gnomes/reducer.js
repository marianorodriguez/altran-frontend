import {
  FETCH_GNOMES_BEGIN,
  FETCH_GNOMES_SUCCESS,
  FETCH_GNOMES_ERROR,
  FILTER_GNOMES,
  LOAD_MORE_GNOMES,
} from './actions';

const initialState = {
  items: [],
  filteredItems: [],
  itemsPerPage: 16,
  itemsInPage: 16,
  loading: false,
  error: null,
};

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
        filteredItems: action.payload.items,
      };
    case FETCH_GNOMES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FILTER_GNOMES:
      return {
        ...state,
        filteredItems: state.items
          .filter(i => i.name.toLowerCase().indexOf(action.payload.text.toLowerCase()) > -1),
      };
    case LOAD_MORE_GNOMES:
      return {
        ...state,
        itemsInPage: state.itemsInPage + state.itemsPerPage,
      };
    default:
      return state;
  }
};
