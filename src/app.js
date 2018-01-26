import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 500, createdAt: 10 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 700, createdAt: 15}));
store.dispatch(addExpense({ description: 'XYZ', amount: 1, createdAt: 7}));
store.dispatch(addExpense({ description: 'Rent', amount: 10000, createdAt: 2 }));

// store.dispatch(sortByAmount());
const { expenses, filters } = store.getState();
// console.log(getVisibleExpenses(expenses, filters));
// console.log(filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));