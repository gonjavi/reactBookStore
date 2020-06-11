
const booksReducer = (state = { books: []}, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          category: action.category
        },
      ];
    case 'REMOVE_BOOK':
      let books = state.books.filter(book => {
        return action.id !== book.id
      });
      return {
        ...state,
      books,
      }
    default:
      return state,
  }
};

export default booksReducer;