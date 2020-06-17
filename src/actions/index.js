const createBook = book => ({
  type: 'ADD_BOOK',
  book,
});

const removeBook = id => ({
  type: 'DELETE_BOOK',
  id,
});

export default { createBook, removeBook };
