import { useState } from 'react';
import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from '../FirebaseTodoApp/Firebase';

function UnAuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleOnchange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    isLogin
      ? loginWithEmailAndPassword(formData.email, formData.password)
          .then((res) => console.log(res))
          .catch((e) => console.log(e.msg))
      : registerWithEmailAndPassword(
          formData.name,
          formData.email,
          formData.password,
        )
          .then((res) => {
            if (res) {
              setIsLogin(true);
            }
          })
          .catch((e) => console.log(e));
  }
  return (
    <div className='flex flex-col gap-4 w-full items-center'>
      <div className='flex flex-row gap-4'>
        <button
          onClick={() => setIsLogin(true)}
          className={`bg-blue-700 px-3 py-1 rounded-full text-white ${isLogin ? 'outline-2 outline-orange-500' : ''}`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`bg-blue-700 px-3 py-1 rounded-full text-white ${!isLogin ? 'outline-2 outline-orange-500' : ''}`}
        >
          Register
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className='w-1/3 py-3 px-6 bg-gray-950 items-center flex flex-col justify-center gap-3'
      >
        {!isLogin ? (
          <div className='flex flex-col items-center gap-1 *:nth-1:text-white'>
            <label>Full Name</label>
            <input
              value={formData.name}
              onChange={handleOnchange}
              name='name'
              type='text'
              placeholder='Kevin Kipkirui'
              className='outline-1 text-white placeholder:text-gray-400 outline-gray-400 py-1 rounded-full pl-3 placeholder:italic placeholder:text-sm'
              required
            />
          </div>
        ) : null}
        <div className='flex flex-col items-center gap-1 *:nth-1:text-white'>
          <label> Email</label>
          <input
            value={formData.email}
            onChange={handleOnchange}
            name='email'
            type='email'
            placeholder='kevin123@gmail.com'
            className='outline-1 text-white placeholder:text-gray-400 outline-gray-400 py-1 rounded-full pl-3 placeholder:italic placeholder:text-sm'
            required
          />
        </div>
        <div className='flex flex-col items-center gap-1 *:nth-1:text-white'>
          <label>Password</label>
          <input
            value={formData.password}
            onChange={handleOnchange}
            name='password'
            type='text'
            placeholder='@hw5342$#'
            className='outline-1 text-white placeholder:text-gray-400 outline-gray-400 py-1 rounded-full pl-3 placeholder:italic placeholder:text-sm'
            required
          />
        </div>

        <button
          type='submit'
          className='w-11/12 bg-blue-600 py-1 text-gray-300'
        >
          {isLogin ? 'Login' : ' Create Account'}
        </button>
      </form>
    </div>
  );
}
export default UnAuthPage;
