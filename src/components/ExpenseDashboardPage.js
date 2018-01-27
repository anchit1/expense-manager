import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseLstFilters from './ExpenseListFilters';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList /> 
  </div>
);

export default ExpenseDashboardPage;