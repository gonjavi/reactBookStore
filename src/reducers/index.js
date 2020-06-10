import { combineReducers } from 'redux';
import booksReducer from './books';

const index = combineReducers({
  books: { booksReducer },
});

export default index;
