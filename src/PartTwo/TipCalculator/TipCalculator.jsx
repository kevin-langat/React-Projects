import { useEffect, useState } from 'react';

function TipCalculator() {
  const [billAmount, setBillAmount] = useState();
  const [tipPercentage, setTipPercentage] = useState();
  const [totalPeople, setTotalPeople] = useState();
  const [totalTip, setTotalTip] = useState();
  const [totalPerPerson, setTotalPerPerson] = useState();
  const [tipPerPerson, setTipPerPerson] = useState();
  useEffect(() => {
    setTotalTip(billAmount * (tipPercentage / 100));
    setTipPerPerson(totalTip / totalPeople);
    setTotalPerPerson(billAmount / totalPeople);
  }, [billAmount, tipPercentage, totalPeople]);
  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <h2>Tip Calculator</h2>
      <div className='w-80 h-50 gap-3 flex flex-col p-2 items-center text-white bg-gray-950'>
        <div className='flex flex-col items-center-safe justify-between gap-1'>
          <h2>Bill Amount</h2>
          <input
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            type='number'
            className='outline-1 pl-3 rounded-[0.3em] placeholder:text-gray-100 placeholder:text-vsm placeholder:italic outline-gray-200'
            placeholder='Enter bill amount'
          />
        </div>
        <div className='flex flex-col items-center-safe justify-between gap-1'>
          <h2>Tip Percentage</h2>
          <input
            value={tipPercentage}
            max={100}
            onChange={(e) => setTipPercentage(e.target.value)}
            type='number'
            className='outline-1 pl-3 rounded-[0.3em] placeholder:text-gray-100 placeholder:text-vsm placeholder:italic outline-gray-200'
            placeholder='Enter bill amount'
          />
        </div>
        <div className='flex flex-col items-center-safe justify-between gap-1'>
          <h2>No of People</h2>
          <input
            value={totalPeople}
            min={1}
            onChange={(e) => setTotalPeople(e.target.value)}
            type='number'
            className='outline-1 pl-3 rounded-[0.3em] placeholder:text-gray-100 placeholder:text-vsm placeholder:italic outline-gray-200'
            placeholder='Enter bill amount'
          />
        </div>
      </div>
      <div className='bg-gray-950 px-2 text-green-400 py-3 rounded-[0.3em]'>
        <h2>Total Tip = $ {totalTip ? totalTip.toFixed(2) : 0}</h2>
        <h2>Tip Per Person = $ {tipPerPerson ? tipPerPerson.toFixed(2) : 0}</h2>
        <h2>
          Total Per Person = $ {totalPerPerson ? totalPerPerson.toFixed(2) : 0}
        </h2>
      </div>
    </div>
  );
}
export default TipCalculator;
