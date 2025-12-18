import { useEffect, useState } from 'react';

function TicTacToe() {
  const [squareValues, setSquareValues] = useState(Array(9).fill(''));
  const [isNextX, setIsNextX] = useState(true);
  const [winningValue, setWinningValue] = useState('');

  function findWinningPlayer() {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < 8; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squareValues[x] &&
        squareValues[z] &&
        squareValues[y] &&
        squareValues[x] === squareValues[y] &&
        squareValues[x] === squareValues[z]
      ) {
        return squareValues[x];
      }
    }
    return null;
  }
  useEffect(() => {
    const resultingValue = findWinningPlayer();
    if (resultingValue) {
      setWinningValue(resultingValue);
    } else if (squareValues.every((item) => item !== '')) {
      setWinningValue('Draw');
    }
  }, [squareValues, isNextX]);

  function handleFillSquare(getCurrentSquareId) {
    const copySquareValues = [...squareValues];
    if (findWinningPlayer() || copySquareValues[getCurrentSquareId]) return;

    copySquareValues[getCurrentSquareId] = isNextX ? 'X' : 'O';
    setIsNextX(!isNextX);
    setSquareValues(copySquareValues);
  }

  return (
    <div className='w-full  gap-4 items-center flex-col flex'>
      <h2 className='underline select-none'>Tic-Tac-Toe Game</h2>

      <div className='bg-gray-900 rounded-[0.2em] shadow-gray-900 grid grid-cols-3 *:outline-1 *:outline-gray-600 *:bg-gray-800 *:rounded-[0.1em] *:cursor-pointer *:items-center *:flex *:flex-col *:justify-center *:text-2xl py-2 gap-1 *:h-18 w-70 h-60 items-center justify-start p-3 text-gray-200'>
        <span onClick={() => handleFillSquare(0)}>{squareValues[0]}</span>
        <span onClick={() => handleFillSquare(1)}>{squareValues[1]} </span>
        <span onClick={() => handleFillSquare(2)}>{squareValues[2]}</span>
        <span onClick={() => handleFillSquare(3)}>{squareValues[3]}</span>
        <span onClick={() => handleFillSquare(4)}>{squareValues[4]}</span>
        <span onClick={() => handleFillSquare(5)}>{squareValues[5]}</span>
        <span onClick={() => handleFillSquare(6)}>{squareValues[6]}</span>
        <span onClick={() => handleFillSquare(7)}>{squareValues[7]}</span>
        <span onClick={() => handleFillSquare(8)}>{squareValues[8]}</span>
      </div>
      {winningValue ? (
        <div className='*:first:text-orange-500 flex flex-col items-center w-1/2 justify-around h-15 *:first:text-vsm'>
          {winningValue === 'Draw' ? (
            <h2>Draw!. Restart the game to play again</h2>
          ) : (
            <h2>{`The winner is ${winningValue}. Restart the game to play again!`}</h2>
          )}
          <button
            onClick={() => {
              setSquareValues(Array(9).fill(''));
              setWinningValue('');
            }}
            className='bg-sky-500 rounded-[0.3em] px-2 text-gray-200 py-0.5'
          >
            Restart
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default TicTacToe;
