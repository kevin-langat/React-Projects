import { useState } from 'react';
import { QRCode } from 'react-qr-code';

function QRCodeGen() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setQrCode(input);
    }
  }
  return (
    <div className='flex flex-col *:even:-mb-3 items-center w-full gap-4'>
      <h2 className='underline select-none'>QR Code Generator</h2>
      <input
        type='text'
        className=' outline-1 caret-sky-400 outline-gray-500 rounded-[0.3em] bg-gray-200 italic text-vsm placeholder:text-nlsm py-0.5 pl-4'
        placeholder='Enter anything here'
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        value={input}
      />
      <button
        onClick={() => setQrCode(input)}
        disabled={!input && input.trim() === ''}
        className='bg-gray-900 disabled:bg-gray-300 disabled:text-red-500/30 text-gray-300 px-2 rounded-[0.3em] text-lsm py-0.5'
      >
        Generate QR code
      </button>
      <div className='  rounded-[0.5em] w-1/4 overflow-x-auto py-2  bg-gray-800 flex flex-col  items-center justify-center overflow-y-auto custom-scrollbar outline-1l gap-2  outline-gray-600'>
        <QRCode
          size={qrCode}
          style={{
            height: 'auto',
            maxWidth: '100%',
            width: '100%',
          }}
          value={qrCode}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}

export default QRCodeGen;
