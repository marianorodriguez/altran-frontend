import {
  FETCH_GNOMES_BEGIN,
  FETCH_GNOMES_SUCCESS,
  FETCH_GNOMES_ERROR,
  FILTER_GNOMES,
  PAGINATE_GNOMES,
} from './actions';

const initialState = {
  MAX_ITEMS_PER_PAGE: 8,
  items: [],
  filteredItems: [],
  page: 0,
  totalPages: 0,
  loading: false,
  error: null,
};

function doFilter(state, action) {
  const filteredItems = state.items.filter(i => i.name.match(new RegExp(action.payload.text, 'gi')));
  return {
    ...state,
    filteredItems,
    page: 0,
    totalPages: Math.ceil(filteredItems.length / state.MAX_ITEMS_PER_PAGE),
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
        filteredItems: action.payload.items,
        totalPages: Math.ceil(action.payload.items.length / state.MAX_ITEMS_PER_PAGE),
      };
    case FETCH_GNOMES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FILTER_GNOMES: return doFilter(state, action);
    case PAGINATE_GNOMES:
      return {
        ...state,
        page: action.payload.page,
      };
    default:
      return state;
  }
};
