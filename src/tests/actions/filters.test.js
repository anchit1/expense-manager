import moment from 'moment'; 
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

 test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
 });

 test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});

test('should generate sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should generate sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should set the text filter of the action object to the provided value', () => {
  const action = setTextFilter('foo');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'foo'
  });
});

test('should set the text filter of the action object to the defualt value', () => {
  const action = setTextFilter('');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});