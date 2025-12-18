import { ShoppingCartIcon, Star, UserStar } from 'lucide-react';
import useFetch from '../CustomHooks/UseFetch/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './store/CartSlice';
import { useNavigate } from 'react-router-dom';
function ShoppingCart() {
  const { data, pending } = useFetch('https://dummyjson.com/products', {});
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const cart = useSelector((state) => state.cart);

  function handleAddToCart(product) {
    const findIfProductExists = cart.findIndex(
      (cartItem) => cartItem.id === product.id
    );
    if (findIfProductExists === -1) {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFromCart(product.id));
    }
  }

  return (
    <div className=' w-full flex flex-col items-center gap-3'>
      <div className=' flex flex-row justify-end gap-100 w-full px-18'>
        <h2>React Redux Shopping Cart</h2>
        <ShoppingCartIcon
          className='cursor-pointer'
          onClick={() => navigateTo('/my-cart')}
        />
      </div>
      <div className=' pt-3 custom-scrollbar rounded-[0.3em] text-white items-center bg-gray-900 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 p-5 overflow-y-auto gap-4'>
        {data &&
          data?.products.map((product, index) => (
            <div
              key={product.id}
              className=' pb-4 h-full gap-3 rounded-[0.3em] flex justify-around flex-col items-center bg-gray-800'
            >
              <img src={product.thumbnail} className='rounded-[0.3em]' alt='' />
              <h2 className='text-nsm'>{product.title}</h2>

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
                  <h2 className='text-tsm text-green-500'>{product.rating}</h2>
                </div>
                <h2 className='text-orange-500'>{`$ ${product.price}`}</h2>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className='bg-cyan-500 mt-4 text-gray-200 px-2 rounded-[0.3em] py-0.5'
              >
                {cart.some((cartItem) => cartItem.id === product.id)
                  ? 'Remove from cart'
                  : 'Add to cart'}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
export default ShoppingCart;
