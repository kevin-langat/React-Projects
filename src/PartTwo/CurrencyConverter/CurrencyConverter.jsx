import { useEffect, useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('KES');
  const [fromCurrencyInfo, setFromCurrencyInfo] = useState({});
  const [toAmount, setToAmount] = useState(128.97);

  async function fetchCurrencyData() {
    const res = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`,
      {
        method: 'GET',
      }
    );
    const result = await res.json();
    result ? setFromCurrencyInfo(result?.rates) : null;
    setToAmount(result?.rates[toCurrency]);
  }
  useEffect(() => {
    fetchCurrencyData();
    handleMapToCurrency();
  }, [toCurrency, fromCurrency]);
  function handleOnChange(e) {
    setAmount(e.target.value);
  }
  function handleMapToCurrency() {
    return Object.entries(fromCurrencyInfo).map((item) => (
      <option value={item[0]}>{item[0]}</option>
    ));
  }

  return (
    <div>
      <h2>Currency Converter Component</h2>
      <div className='flex flex-row gap-4'>
        <div>
          <input
            value={amount}
            onChange={handleOnChange}
            type='number'
            name='fromcurrency'
            placeholder='Enter amount'
            className='outline-1 outline-red-500 field-sizing-content min-w-20'
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {handleMapToCurrency()}
          </select>
        </div>
        <h2>=</h2>
        <div>
          <input
            value={(toAmount * amount).toFixed(3)}
            readOnly
            type='number'
            name='fromcurrency'
            placeholder='Enter amount'
            className='outline-1 outline-red-500 158 field-sizing-content min-w-20'
          />
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            name='from'
          >
            {handleMapToCurrency()}
          </select>
        </div>
      </div>
      <h2>
        Exchange Rate 1 {fromCurrency} ={' '}
        {`${toAmount.toFixed(3)} ${toCurrency}`} {}
      </h2>
    </div>
  );
}
export default CurrencyConverter;
