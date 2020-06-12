const initialState = {
  books: [
    {
      id: (Math.random() * 500).toFixed(),
      title: 'Educated',
      category: 'Biography',
    },
    {
      id: (Math.random() * 500).toFixed(),
      title: 'Ready player',
      category: 'Action',
    },
    {
      id: (Math.random() * 500).toFixed(),
      title: 'A woman of no importance',
      category: 'History',
    },
    {
      id: (Math.random() * 500).toFixed(),
      title: 'The stand',
      category: 'Horror',
    },
    {
      id: (Math.random() * 500).toFixed(),
      title: 'Brave new world',
      category: 'Sci-Fi',
    },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          category: action.category,
        },
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
