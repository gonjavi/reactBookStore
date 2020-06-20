const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

const createBook = book => ({
  type: ADD_BOOK,
  book,
});

const removeBook = id => ({
  type: DELETE_BOOK,
  id,
});

export { createBook, removeBook };
