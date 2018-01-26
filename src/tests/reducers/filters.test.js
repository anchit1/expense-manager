import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup  default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set the text filter', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'foo'
  };

  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('foo');
});

test('should set the startDate filter', () => {
  const action = {
    type: 'SET_START_DATE',
    date: moment(0)
  };

  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(moment(0));
});

test('should set the endDate filter', () => {
  const action = {
    type: 'SET_END_DATE',
    date: moment(0)
  };

  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(moment(0));
});