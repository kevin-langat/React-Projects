import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function ModalPopupComponent() {
  const [currentProduct, setCurentProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const modalRef = useRef();
  async function fetchProducts() {
    const res = await fetch('https://dummyjson.com/products?limit=100', {
      method: 'GET',
    });
    const result = await res.json();
    result && result.products.length
      ? setProducts(result.products)
      : setProducts([]);
  }

  useEffect(() => {
    function closeSiderOnOutsideClick(e) {
      if (!modalRef.current.contains(e.target)) {
        setModalStatus(true);
      }
    }
    document.addEventListener('mousedown', closeSiderOnOutsideClick);
    document.addEventListener('touchstart', closeSiderOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeSiderOnOutsideClick);
      document.removeEventListener('touchstart', closeSiderOnOutsideClick);
    };
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  function findAnyRandomProduct() {
    const ran = Math.floor(Math.random() * products.length);
    setCurentProduct(products[ran]);
  }

  return (
    <div className='w-full h-125  gap-4 items-center flex-col flex'>
      <h2 className='underline select-none'>Modal Popup Component</h2>
      <button
        disabled={modalStatus}
        onClick={() => {
          findAnyRandomProduct();
          setModalStatus(true);
        }}
        className='bg-sky-500 disabled:bg-gray-500 px-3 py-0.5 text-gray-200 rounded-[0.5em]'
      >
        Open product Modal
      </button>
      <div
        style={
          modalStatus === true ? { marginTop: '0px' } : { marginTop: '-600px' }
        }
        ref={modalRef}
        className='bg-gray-900 shadow-2xl h-90 rounded-2xl shadow-gray-900 flex py-2 w-3/5 flex-col items-center justify-start p-3 text-gray-200 transform duration-300 delay-75 overflow-y-auto gap-4'
      >
        <div className='w-full  justify-end h-5 items-center flex flex-row'>
          <X
            onClick={() => setModalStatus(false)}
            className='rounded-full outline-1 outline-gray-600 bg-gray-800'
          />
        </div>
        <div className='flex h-[85%] flex-row justify-between w-full '>
          <div className='w-1/2 items-center justify-around p-4  h-full flex flex-col gap-4'>
            <h2 className='text-orange-500 text-2xl'>
              {currentProduct?.title}
            </h2>
            <h2 className='text-vsm text-justify'>
              {currentProduct?.description}
            </h2>
            <div className='w-full gap-10 flex flex-row justify-start'>
              <h2 className='text-red-600 line-through'>
                Was $ {currentProduct ? currentProduct?.price : '0.00'}
              </h2>
              <h2 className='text-fuchsia-600'>
                {' '}
                Now ${' '}
                {currentProduct
                  ? (
                      ((100 - currentProduct?.discountPercentage) / 100) *
                      currentProduct?.price
                    ).toFixed(2)
                  : '0.00'}
              </h2>
            </div>
            <button
              disabled={!currentProduct}
              className='w-11/12 disabled:bg-gray-400 bg-sky-500 py-0.5 rounded-full'
            >
              Add to cart
            </button>
          </div>
          <img
            className='h-full w-[40%]'
            src={currentProduct?.thumbnail}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default ModalPopupComponent;
