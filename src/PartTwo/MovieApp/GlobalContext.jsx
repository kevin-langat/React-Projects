import { createContext, useEffect, useReducer, useState } from 'react';
import Reducer from './Reducer';

export const GlobalMovieState = createContext(null);

const initialState = {
  watchList: localStorage.getItem('watchList')
    ? JSON.parse(localStorage.getItem('watchList'))
    : [],
  watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
};

function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    if (state.watched.length !== 0 || state.watchList !== 0) {
      localStorage.setItem('watchList', JSON.stringify(state.watchList));
      localStorage.setItem('watched', JSON.stringify(state.watched));
    }
  }, [state]);
  return (
    <GlobalMovieState.Provider value={{ dispatch: dispatch, state: state }}>
      {children}
    </GlobalMovieState.Provider>
  );
}
export default GlobalContext;
