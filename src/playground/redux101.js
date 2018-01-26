import { createStore } from 'redux';

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ setCount = 0} = {}) => ({
  type: 'SET',
  setCount
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      }
    
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      }
      
    case 'RESET':
      return {
        count: 0
      }

    case 'SET':
      return {
        count: action.setCount
      }

    default:
      return state;
  }
  return state;
});

store.dispatch(setCount({ setCount: 10}));
store.dispatch(setCount());

console.log(store.getState());

