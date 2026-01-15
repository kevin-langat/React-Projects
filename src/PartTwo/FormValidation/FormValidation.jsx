import { useState } from 'react';

function FormValidation() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [errs, setErrs] = useState({
    userName: '',
    email: '',
    password: '',
  });
  function handleOnChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  function handleValidation(getName, getValue) {
    switch (getName) {
      case 'userName':
        setErrs({
          ...errs,
          userName:
            getValue.length < 5
              ? '          Username should be atleast 5 characters'
              : '',
        });
        break;
      case 'email':
        setErrs({
          ...errs,
          email: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(getValue)
            ? ''
            : 'Invalid email',
        });
        break;
      case 'password':
        setErrs({
          ...errs,
          password:
            getValue.length < 6
              ? 'Password should be atleast 6 characters'
              : '',
        });
        break;

      default:
        break;
    }
  }
  function handleSubmit() {}
  return (
    <div className='w-full flex flex-col items-center justify-center gap-6'>
      <h2>Form Validation</h2>

      <form
        onSubmit={handleSubmit}
        className='w-100 h-70 bg-gray-950 flex flex-col items-center gap-2 p-3'
      >
        <div className='flex flex-col'>
          <h2 className='text-white'>Username:</h2>
          <input
            value={formData.userName}
            onChange={handleOnChange}
            onBlur={(e) => handleValidation(e.target.name, formData.userName)}
            name='userName'
            type='text'
            placeholder='e.g kevin'
            className='outline-1 outline-gray-300 border-none placeholder:italic placeholder:text-sm placeholder:text-gray-400 pl-3 rounded-[0.4em] text-white'
          />
          {errs.userName !== '' ? (
            <p className='text-vsm animateInputErr text-red-500'>
              {errs.userName}
            </p>
          ) : null}{' '}
        </div>
        <div className='flex flex-col'>
          <h2 className='text-white'>Email:</h2>
          <input
            value={formData.email}
            onChange={handleOnChange}
            onBlur={(e) => handleValidation(e.target.name, formData.email)}
            name='email'
            type='email'
            placeholder='e.g kevinl@gmail.com'
            className='outline-1 outline-gray-300 border-none placeholder:italic placeholder:text-sm placeholder:text-gray-400 pl-3 rounded-[0.4em] text-white'
          />
          {errs.email !== '' ? (
            <p className='text-vsm animateInputErr text-red-500'>
              {errs.email}
            </p>
          ) : null}
        </div>
        <div className='flex flex-col transform duration-500 ease-in'>
          <h2 className='text-white'>Password:</h2>
          <input
            value={formData.password}
            onChange={handleOnChange}
            onBlur={(e) => handleValidation(e.target.name, formData.password)}
            name='password'
            type='text'
            placeholder='e.g $k436k65k$@'
            className='outline-1 outline-gray-300 border-none placeholder:italic placeholder:text-sm placeholder:text-gray-400 pl-3 rounded-[0.4em] text-white'
          />
          {errs.password !== '' ? (
            <p className='text-vsm animateInputErr text-red-500'>
              {errs.password}
            </p>
          ) : null}
        </div>
        <button className='bg-white mt-6 px-3 py-1' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}
export default FormValidation;
