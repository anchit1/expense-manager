import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
     expenses: expenseReducer,
     filters: filtersReducer
    }),
    composeEnhacers(applyMiddleware(thunk))
  );

  return store;
}