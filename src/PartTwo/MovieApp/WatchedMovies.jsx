import { useContext } from 'react';
import { GlobalMovieState } from './GlobalContext';

function WatchedMovies() {
  const { state, dispatch } = useContext(GlobalMovieState);

  return (
    <div className='w-full flex flex-col items-center gap-4'>
      <div className='flex flex-col items-center'>
        {state.watched.length > 0 ? (
          <div className='grid grid-cols-3 p-4 text-gray-200 gap-3 bg-gray-950 pb-20 w-11/12'>
            {state.watched.map((movie) => (
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

                <button
                  onClick={() => {
                    dispatch({
                      type: 'REMOVE_FROM_WATCHED',
                      payload: movie,
                    });
                  }}
                  className='w-11/12 py-1 bg-indigo-600 mt-4 mb-2'
                >
                  Remove From Watched
                </button>
              </div>
            ))}
          </div>
        ) : (
          <h2>You Watched is empty</h2>
        )}
      </div>
    </div>
  );
}
export default WatchedMovies;
