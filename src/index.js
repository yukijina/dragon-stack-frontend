import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';

import './index.css';

const DEFAULT_GENERATION = { generationId: '', expiration: '' };
const generationReducer = (state, action) => {

  if (action.type === 'GENERATION_ACTION_TYPE') {
    return { generation: action.generation };
  }
  return {
    generation: DEFAULT_GENERATION
  }
}
const store = createStore(generationReducer);

store.dispatch({ type: 'foo' });
store.dispatch({
  type: 'GENERATION_ACTION_TYPE',
  generation: { generationId: 'goo', expiration: 'bar' }
})



render(
  <div>
    <h2>Dragon Stack</h2>
    <Generation />
    <Dragon />
  </div>,
  document.getElementById('root')
);
