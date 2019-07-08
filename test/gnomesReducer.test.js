/* global test expect describe */

import reducer from '../store/gnomes/reducer';
import {
  FETCH_GNOMES_BEGIN, FETCH_GNOMES_ERROR, FETCH_GNOMES_SUCCESS, FILTER_GNOMES, LOAD_MORE_GNOMES,
} from '../store/gnomes/actions';

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
const mockGnome1 = {
  id: 0,
  name: 'mock name',
  thumbnail: '',
  professions: ['cook'],
};
const mockGnome2 = {
  id: 0,
  name: 'mock name 2',
  thumbnail: '',
  professions: ['blacksmith'],
};

describe('GNOMES REDUCER', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should trigger loading on FETCH_GNOMES_BEGIN action', () => {
    expect(reducer(initialState, {
      type: FETCH_GNOMES_BEGIN,
    })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  test('should trigger error on FETCH_GNOMES_ERROR action', () => {
    expect(reducer(initialState, {
      type: FETCH_GNOMES_ERROR,
      payload: { error: 'some error' },
    })).toEqual({
      ...initialState,
      error: 'some error',
    });
  });

  test('should load results on FETCH_GNOMES_SUCCESS action', () => {
    expect(reducer(initialState, {
      type: FETCH_GNOMES_SUCCESS,
      payload: { items: [mockGnome1, mockGnome2] },
    }).items.length).toEqual(2);
  });

  test('should filter results on FILTER_GNOMES action', () => {
    expect(reducer({ ...initialState, items: [mockGnome1, mockGnome2] }, {
      type: FILTER_GNOMES,
      payload: { profession: 'cook' },
    }).filteredItems.length).toEqual(1);
  });

  test('should filter results on FILTER_GNOMES action with two filters', () => {
    expect(reducer({ ...initialState, items: [mockGnome1, mockGnome2] }, {
      type: FILTER_GNOMES,
      payload: { profession: 'blacksmith', name: 'mock name 2' },
    }).filteredItems.length).toEqual(1);
  });

  test('should filter all results on FILTER_GNOMES action with unmatching text', () => {
    expect(reducer({ ...initialState, items: [mockGnome1, mockGnome2] }, {
      type: FILTER_GNOMES,
      payload: { profession: 'barber' },
    }).filteredItems.length).toEqual(0);
  });


  test('should increment number of items in page on LOAD_MORE_GNOMES action', () => {
    expect(reducer(initialState, {
      type: LOAD_MORE_GNOMES,
    }).itemsInPage).toEqual(32);
  });
});
