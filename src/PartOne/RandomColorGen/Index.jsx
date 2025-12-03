import React, { useEffect, useState } from 'react';

function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState('no');
  const [randomColor, setRandomColor] = useState('#efd2fe');
  let exam = '';
  function generateAColor() {
    if (typeOfColor === 'hex') {
      let letters = 'abcdef0123456789';
      let result = '#';
      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        result += letters.charAt(randomIndex);
      }
      setRandomColor(result);
    } else if (typeOfColor === 'rgb') {
      let result = [];
      for (let b = 0; b < 3; b++) {
        let randomNumber = Math.ceil(Math.random() * 255);
        result.push(randomNumber);
      }

      setRandomColor(`rgb(${result[0]},${result[1]},${result[2]})`);
    } else if (typeOfColor === 'random') {
      let randomType = Math.floor(Math.random() * 3);
      console.log(randomType);
      if (randomType === 1) {
        let letters = 'abcdef0123456789';
        let result = '#';
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * letters.length);
          result += letters.charAt(randomIndex);
        }
        setRandomColor(result);
      } else {
        let result = [];
        for (let b = 0; b < 3; b++) {
          let randomNumber = Math.ceil(Math.random() * 255);
          result.push(randomNumber);
        }

        setRandomColor(`rgb(${result[0]},${result[1]},${result[2]})`);
      }
    }
  }

  return (
    <div className='flex flex-col items-center w-full gap-4'>
      <h2 className='underline'>Random Color Generator</h2>
      <div className='bg-gray-800 w-1/2 p-2 rounded-[0.3em] outline-1 outline-gray-600 flex gap-4 flex-col items-center justify-center'>
        <div className='w-1/2 bg-gray-700 rounded-[0.3em] flex flex-row items-center *:cursor-pointer py-1 *:px-2 *:outline-gray-600 *:rounded-[0.6em] *:py-0.5 *:bg-gray-800 *:select-none justify-around text-vsm text-gray-300'>
          <h2
            onClick={() => {
              setTypeOfColor('hex');
              generateAColor();
            }}
          >
            Hex Color
          </h2>
          <h2
            onClick={() => {
              setTypeOfColor('rgb');
              generateAColor();
            }}
          >
            RGB Color
          </h2>
          <h2
            onClick={() => {
              setTypeOfColor('random');
              generateAColor();
            }}
          >
            Random color
          </h2>
        </div>
        <div
          style={{ backgroundColor: `${randomColor}` }}
          className='w-11/12 flex flex-row items-center justify-center h-40 bg-green-400'
        >
          {randomColor}
        </div>
      </div>
    </div>
  );
}

export default RandomColorGenerator;
