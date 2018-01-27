import getExpensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';

test('should return 0 if there are no expenses', () => {
  const total = getExpensesTotal([]);
  expect(total).toBe(0);
});

test('should correctly add up single expense', () => {
  const total = getExpensesTotal([ expenses[0] ]);
  expect(total).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
  const total = getExpensesTotal(expenses);
  expect(total).toBe(315);
});