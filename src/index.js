import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import indexReducer from './reducers/index';
import App from './components/App';

const store = createStore(indexReducer);

const initialState = [
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
];

store.dispatch({
  type: 'CREATE_BOOK',
  book: initialState[0],
});
store.dispatch({
  type: 'CREATE_BOOK',
  book: initialState[1],
});

store.dispatch({
  type: 'CREATE_BOOK',
  book: initialState[2],
});
store.dispatch({
  type: 'CREATE_BOOK',
  book: initialState[3],
});
store.dispatch({
  type: 'CREATE_BOOK',
  book: initialState[4],
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
