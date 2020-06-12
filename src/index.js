import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import indexReducer from './reducers/index';
import App from './components/App';

const store = createStore(indexReducer);

/* store.dispatch({
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
  book: initialState[3],
});
store.dispatch({
  type: 'CREATE_BOOK',
  book: initialState[4],
});
 */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
