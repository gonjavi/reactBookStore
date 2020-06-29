const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        action.book,
      ];
    case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
