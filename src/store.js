import { createStore } from 'redux';
import movies from './misc/data';

const reducer = (state) => {
  return state;
};

const initialState = {
  movies
};

window.store = createStore(reducer, initialState);

export default window.store;