import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense('abc123');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  });
});

test('should setup the edit expense action object', () => {
  const updates = {
    amount: 42
  }
  const action = editExpense('abc123', updates);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {
      amount: 42
    }
  });
});

test('should setup add expense action abject with the provided values', () => {
  const expense = {
    description: 'foo',
    amount: '42',
    note: 'bar',
    createdAt: '1'
  }
  const action = addExpense(expense);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });
});

test('should setup add expense object with default values', () => {
  const expense = {};
  const action = addExpense(expense);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
})