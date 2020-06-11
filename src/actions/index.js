
export const createBook = book => ({
  type: 'ADD_BOOK',
  book,
});

export const removeBook = id => ({
  type: 'DELETE_BOOK',
  id,
});

export default { createBook, removeBook };
