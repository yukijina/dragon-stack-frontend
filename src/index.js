import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import { generationReducer } from './reducers';
// import { generationActionCreator } from './actions/generation'
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(generationReducer, composeEnhancers(applyMiddleware(thunk)));

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

render(
  <Provider store={store}>
    <div>
      <h2>Dragon Stack</h2>
      <Generation />
      <Dragon />
    </div>
  </Provider>,
  document.getElementById('root')
);
