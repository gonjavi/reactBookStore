import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const index = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});

export default index;
