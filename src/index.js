import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Root from './components/Root';
import { fetchAuthenticated } from './actions/account';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchAuthenticated())
.then(() => {
  render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById('root')
  );
})

/// subscribe should be called before dispatch
//store.subscribe(() => console.log('store state update: ', store.getState()));

/// debugging purpose
// store.dispatch({ type: 'foo' });
// store.dispatch({
//   type: GENERATION_ACTION_TYPE,
//   generation: { generationId: 'goo', expiration: 'bar' }
// })

// const zooAction = generationActionCreator({
//   generationId: 'zoo', expiration: 'bar'
// })
//store.dispatch(zooAction)

// fetch('http://localhost:3000/generation')
// .then(response => response.json())
// .then(json => {
//   store.dispatch(generationActionCreator(json.generation))
// });


