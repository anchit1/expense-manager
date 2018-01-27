import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expensesTotal';

const ExpensesSummary = (props) => {
  const filteredExpenses = getVisibleExpenses(props.expenses, props.filters);
  const numExpenses = filteredExpenses.length;
  const totalExpenseAmount = expensesTotal(filteredExpenses);

  return (
    <div>
      <p>There are {numExpenses} expenses totalling {totalExpenseAmount}.</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  filters: state.filters
});

export default connect(mapStateToProps)(ExpensesSummary);