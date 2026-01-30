function Reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_WATCHLIST':
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case 'ADD_TO_WATCHED':
      return {
        ...state,
        watched: [action.payload, ...state.watched],
      };
    case 'MOVE_TO_WATCHED':
      let filteredItems = state.watchList.filter(
        (item) => item !== action.payload,
      );
      state = {
        ...state,
        watchList: filteredItems,
      };
      return {
        ...state,
        watched: [action.payload, ...state.watched],
      };
    case 'REMOVE_FROM_WATCHED':
      let filteredWatchedMovies = state.watched.filter(
        (item) => item !== action.payload,
      );
      state = {
        ...state,
        watched: filteredWatchedMovies,
      };
    case 'REMOVE_FROM_WATCHLIST':
      let filteredWatchList = state.watchList.filter(
        (item) => item !== action.payload,
      );

      state = {
        ...state,
        watchList: filteredWatchList,
      };
    default:
      return state;
  }
}
export default Reducer;
