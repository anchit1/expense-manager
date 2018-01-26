import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseLstFilters from './ExpenseListFilters';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList /> 
  </div>
);

export default ExpenseDashboardPage;