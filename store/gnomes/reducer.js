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
  professionsList: [],
  nameFilter: '',
  professionFilter: '',
  itemsPerPage: 16,
  itemsInPage: 16,
  loading: false,
  error: null,
};

function doFilter(state, action) {
  const { profession, name } = action.payload;
  const professionFilter = typeof profession === 'string' ? profession : state.professionFilter;
  const nameFilter = typeof name === 'string' ? name : state.nameFilter;
  const filteredItems = state.items
    .filter(i => i.name.toLowerCase().indexOf(nameFilter) > -1)
    .filter(i => i.professions.some(p => p.toLowerCase()
      .indexOf((professionFilter).toLowerCase()) > -1));
  return {
    ...state,
    professionFilter,
    nameFilter,
    filteredItems,
  };
}

function getProfessionList(items) {
  let array = [...new Set(items.map(i => i.professions.join(',')).join(',').split(',').filter(p => !!p))];
  array = array.map(p => p.trim());
  array.sort();
  return array;
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
        professionsList: getProfessionList(action.payload.items),
      };
    case FETCH_GNOMES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FILTER_GNOMES:
      return doFilter(state, action);
    case LOAD_MORE_GNOMES:
      return {
        ...state,
        itemsInPage: state.itemsInPage + state.itemsPerPage,
      };
    default:
      return state;
  }
};
