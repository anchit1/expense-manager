import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '1'
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[1], expenses[2] ]);
});

test('should remove expense with non-existant id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: ''
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should test expense addition', () => {
  const expense = {
    id: '42',
    description: 'foo',
    note: 'bar',
    amount: 42,
    createdAt: 1000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'foo5',
    note: 'bar5',
    amount: 99,
    createdAt: -1
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates  
  };

  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual( { ...expenses[0], ...updates });
});

test('should not edit an expense if id not found', () => {
  const updates = {
    description: 'foo5',
    note: 'bar5',
    amount: 99,
    createdAt: -1
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates  
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});