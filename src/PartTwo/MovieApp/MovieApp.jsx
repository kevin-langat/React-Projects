import { useContext, useEffect, useState } from 'react';
import useDebounce from '../DebounceCall/useDebounce';
import { TextField } from '@mui/material';
import { Eye, Heart, Home } from 'lucide-react';
import WatchList from './WatchList';
import WatchedMovies from './WatchedMovies';
import { GlobalMovieState } from './GlobalContext';

function MovieApp() {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);
  const debounceSearchParam = useDebounce(inputValue, 1000);
  const [currentPage, setCurrentPage] = useState('home');
  const { state, dispatch } = useContext(GlobalMovieState);
  async function fetchListOfMovies() {
    try {
      const tmdb_api_key = 'd2afe5b4250c16c2151df7413270dfc8';
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${tmdb_api_key}&query=${debounceSearchParam}&include_adult=true&language=en-US&page=1`,
      );
      const result = await res.json();
      result && result.results && setResults(result.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfMovies();
  }, [debounceSearchParam]);

  return (
    <div className='flex w-full flex-col items-center gap-5'>
      <h2>Movie App</h2>
      {currentPage === 'home' ? (
        <div className='w-11/12 flex-col gap-3 flex items-center'>
          <TextField
            id='todo'
            label='search a movie'
            variant='outlined'
            size='small'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <div className='bg-gray-950 text-gray-200 w-full rounded-[0.5em] p-2 flex flex-col items-center '>
            {results && results.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 gap-x-2 '>
                {results.map((movie) => (
                  <div
                    key={movie.id}
                    className='flex flex-col items-center justify-between outline-1 p-1 outline-gray-400 rounded-[0.5em]'
                  >
                    <img
                      className='w-full rounded-[0.5em]'
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt=''
                    />
                    <div className='flex flex-col items-center'>
                      <h2 className='text-center text-blue-500 text-xl'>
                        {movie.title}
                      </h2>
                      <h2>{movie.release_date}</h2>
                    </div>

                    <div
                      className={`flex flex-row items-center justify-between   ${
                        state.watchList.findIndex(
                          (item) => item.id === movie.id,
                        ) > -1
                          ? '*:nth-1:fill-red-500 *:nth-1:stroke-red-600 '
                          : '*:nth-1:stroke-red-500  *:nth-1:hover:fill-red-600'
                      }   ${
                        state.watched.findIndex(
                          (item) => item.id === movie.id,
                        ) > -1
                          ? '*:nth-2:fill-orange-600  *:nth-2:stroke-gray-200 justify-end *:nth-1:hidden '
                          : ' *:nth-2:stroke-indigo-500  '
                      } py-2 w-3/4`}
                    >
                      <Heart
                        onClick={() => {
                          const findMovieIfItAlreadyExists =
                            state.watchList.findIndex(
                              (item) => item.id === movie.id,
                            );
                          const findMovieIfItAlreadyExistsInWatched =
                            state.watched.findIndex(
                              (item) => item.id === movie.id,
                            );
                          if (findMovieIfItAlreadyExists > -1) {
                            dispatch({
                              type: 'REMOVE_FROM_WATCHLIST',
                              payload: movie,
                            });
                            return;
                          }
                          if (
                            findMovieIfItAlreadyExistsInWatched === -1 &&
                            findMovieIfItAlreadyExists === -1
                          ) {
                            dispatch({
                              type: 'ADD_TO_WATCHLIST',
                              payload: movie,
                            });
                          }
                        }}
                      />
                      <Eye
                        onClick={() => {
                          const findMovieIfItAlreadyExists =
                            state.watched.findIndex(
                              (item) => item.id === movie.id,
                            );
                          const findMovieIfItAlreadyExistsInWatchList =
                            state.watchList.findIndex(
                              (item) => item.id === movie.id,
                            );

                          if (findMovieIfItAlreadyExistsInWatchList > -1) {
                            dispatch({
                              type: 'MOVE_TO_WATCHED',
                              payload: movie,
                            });
                            return;
                          }
                          if (findMovieIfItAlreadyExists === -1) {
                            dispatch({
                              type: 'ADD_TO_WATCHED',
                              payload: movie,
                            });
                          }
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : results && results.length === 0 && inputValue !== '' ? (
              <h2>
                Couldn't find the movie you are searching. Please adjust the
                search keyword
              </h2>
            ) : inputValue !== '' ? (
              <h2>Loading, please wait...</h2>
            ) : (
              <h2>Find any movies now</h2>
            )}
          </div>
        </div>
      ) : currentPage === 'watchlist' ? (
        <WatchList />
      ) : (
        <WatchedMovies />
      )}

      <div
        className={`fixed flex flex-row backdrop-blur-[100px] shadow-2xl outline-1 justify-around px-3 outline-gray-300 gap-4 items-center w-60 h-12 *:stroke-green-500 ${currentPage === 'home' ? '*:nth-1:fill-green-500 ' : currentPage === 'watchlist' ? ' *:nth-2:fill-red-500 *:nth-2:stroke-red-500 ' : '*:nth-3:fill-orange-500 '} *:hover:fill-orange-500 rounded-full top-[90%]`}
      >
        <Home onClick={() => setCurrentPage('home')} />
        <Heart onClick={() => setCurrentPage('watchlist')} />
        <Eye onClick={() => setCurrentPage('watched')} />
      </div>
    </div>
  );
}
export default MovieApp;
