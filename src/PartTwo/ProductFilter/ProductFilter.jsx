import { useEffect, useState } from 'react';

function ProductFilter() {
  const [productCategories, setProductCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  // fetch products categories
  async function fetchProductCategories() {
    const res = await fetch('https://dummyjson.com/products/categories', {
      method: 'GET',
    });
    const result = await res.json();
    result && result.length && setProductCategories(result);
  }
  // fetch products
  async function fetchProducts() {
    const res = await fetch('https://dummyjson.com/products?limit=194', {
      method: 'GET',
    });
    const result = await res.json();
    result && result.products.length && setProducts(result.products);
  }
  useEffect(() => {
    fetchProductCategories();
    fetchProducts();
  }, []);

  function filterProducts(slug) {
    const filteredProducts =
      products &&
      products.length &&
      products.filter((product) => product.category === slug);
    setFilteredProducts(filteredProducts);
  }
  return (
    <div className='w-11/12 flex flex-col items-center justify-center gap-6'>
      <h2>Product filter component</h2>

      <div className='rounded-[03em] w-full gap-3 grid grid-cols-6 text-vsm'>
        {productCategories &&
          productCategories.length > 0 &&
          productCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => filterProducts(category.slug)}
              className='bg-gray-950 text-white rounded-[0.3em] px-2 py-0.5'
            >
              {category.name}
            </button>
          ))}
      </div>

      <div className='rounded-[03em] w-full gap-3 grid grid-cols-6 text-vsm'>
        {filteredProducts && filteredProducts.length > 0
          ? filteredProducts.map((product, index) => (
              <div
                key={index}
                className='w-full h-50  outline-1 outline-gray-400 rounded-[0.3em] flex flex-col gap-2'
              >
                <img src={product.thumbnail} alt='img' />
                <h2 key={product.id}>{product.title}</h2>
              </div>
            ))
          : products &&
            products.length > 0 &&
            products.map((product, index) => (
              <div
                key={index}
                className='w-full h-50 outline-1 outline-gray-400 rounded-[0.3em] flex flex-col gap-2'
              >
                <img src={product.thumbnail} alt='img' />
                <h2>{product.title}</h2>
              </div>
            ))}
      </div>
    </div>
  );
}
export default ProductFilter;
