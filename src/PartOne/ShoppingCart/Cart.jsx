import { ChevronLeft, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './store/CartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [totalCartValue, setTotalCartValue] = useState(0);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    setTotalCartValue(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className=' w-full flex flex-col justify-start items-start gap-3'>
      <div
        className={` px-2  flex flex-row ${
          cart.length > 0
            ? ' justify-between w-1/2'
            : ' w-full justify-center items-center'
        }`}
      >
        {cart.length > 0 ? (
          <ChevronLeft
            onClick={() => navigateTo('/shopping-cart')}
            className='bg-green-500 cursor-pointer rounded-full p-0.5'
          />
        ) : null}

        <h2 className='text-orange-500 text-lsm underline'>Your Cart Items</h2>
      </div>
      <div className='flex relative flex-row justify-between px-3 items-center w-full'>
        <div
          className={`${
            cart.length === 0
              ? 'flex flex-col'
              : 'grid md:grid-cols-2 lg:grid-cols-3 '
          }pt-3 custom-scrollbar rounded-[0.3em] text-white items-center justify-center  bg-gray-900 grid-cols-2 w-3/4 p-5 overflow-y-auto gap-4`}
        >
          {cart.length === 0 ? (
            <div>
              <h2>You cart is empty</h2>
              <button
                onClick={() => navigateTo('/shopping-cart')}
                className='bg-cyan-500 mt-4 text-gray-200 px-2 rounded-[0.3em] py-0.5'
              >
                Go To Shopping
              </button>
            </div>
          ) : (
            cart &&
            cart.length > 0 &&
            cart.map((product, index) => (
              <div
                key={product.id}
                className=' pb-2 h-full gap-3 rounded-[0.3em] flex justify-around flex-col items-center bg-gray-800'
              >
                <img
                  src={product.thumbnail}
                  className='rounded-[0.3em]'
                  alt=''
                />
                <h2 className='text-nsm w-11/12'>{product.title}</h2>
                <div className='grid grid-cols-2 w-3/4 py-4 text-vsm gap-3 flex-row items-center'>
                  {product?.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='bg-indigo-800/60 text-gray-300 text-tsm px-2 outline-1 outline-gray-500 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='w-[80%]  flex flex-row items-center justify-between gap-3'>
                  <div className='bg-green-700/30 group cursor-pointer py-0.5 items-center justify-center px-2 gap-1 rounded-[0.3em] flex flex-row'>
                    <Star
                      size={18}
                      className='stroke-green-400 transform duration-700 ease-out group-hover:fill-green-400 group-hover:-translate-y-0.5 stroke-1'
                    />
                    <h2 className='text-tsm text-green-500'>
                      {product.rating}
                    </h2>
                  </div>
                  <h2 className='text-orange-500'>{`$ ${product.price}`}</h2>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(product.id))}
                  className='bg-cyan-500 mt-4 text-gray-200 px-2 rounded-[0.3em] py-0.5'
                >
                  Remove from cart
                </button>
              </div>
            ))
          )}
        </div>

        <div className=' top-24 flex flex-col gap-3 text-gray-300 justify-start items-center h-45 right-4 fixed py-4 bg-gray-900 outline-1 outline-gray-600 rounded-[0.3em] w-[22%]'>
          <h2 className='text-[1em] text-gray-300'>
            {`Total Items: ${cart.length}`}
          </h2>
          <h2 className='text-[1.12em] text-orange-500 underline'>
            Total Amount
          </h2>
          <h2 className='text-[1.05em]'>{`$ ${totalCartValue.toFixed(2)}`}</h2>
          <button className='bg-orange-600 px-3 py-0.5 rounded-[0.2em]'>
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
