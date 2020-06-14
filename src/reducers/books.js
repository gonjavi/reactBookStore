const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        action.book,
      ];
    case 'REMOVE_BOOK':
      return [
        ...state,
        state.books.filter(book => action.book !== book),
      ];
    default:
      return state;
  }
};

export default booksReducer;
