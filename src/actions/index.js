const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = book => ({
  type: ADD_BOOK,
  book,
});

const removeBook = id => ({
  type: DELETE_BOOK,
  id,
});

const changeFilter = category => ({
  type: CHANGE_FILTER,
  category,
});

export { createBook, removeBook, changeFilter };
