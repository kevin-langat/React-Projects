import { useEffect, useState } from 'react';
import {
  Document,
  Image,
  Page,
  PDFDownloadLink,
  PDFViewer,
  Text,
  View,
} from '@react-pdf/renderer';

function PDFView({ productDetail }) {
  return (
    <Document>
      <Page>
        <View>
          <Text>{productDetail?.title}</Text>
          <Text>{productDetail?.description}</Text>
        </View>
      </Page>
    </Document>
  );
}
function PDFViewerComponent() {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState();
  async function fetchProducts() {
    const res = await fetch('https://dummyjson.com/products');
    const result = await res.json();
    result && result.products && result.products.length > 0
      ? setProducts(result.products)
      : null;
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function handleFetchProductDetails(getID) {
    const res = await fetch(`https://dummyjson.com/products/${getID}`);
    const result = await res.json();
    result ? setProductDetail(result) : null;
  }
  return (
    <div className='w-3/4 flex flex-col items-center gap-4'>
      <h2>PDF Viewer</h2>

      <ul className=' grid grid-cols-4 gap-3'>
        {products && products.length > 0
          ? products.map((product) => (
              <li
                className='cursor-pointer text-sm text-center bg-green-400'
                onClick={() => handleFetchProductDetails(product.id)}
                key={product.id}
              >
                {product.title}
              </li>
            ))
          : null}
      </ul>
      <PDFDownloadLink
        fileName='Product-details.pdf'
        document={<PDFView productDetail={productDetail} />}
      >
        <button className='w-60  rounded-2xl text-white h-10 bg-blue-500'>
          Download PDF
        </button>
      </PDFDownloadLink>
      <div className='w-full flex flex-col items-center p-3 mb-10'>
        <PDFViewer className='w-11/12 p-3 h-[1200px]'>
          <PDFView productDetail={productDetail} />
        </PDFViewer>
      </div>
    </div>
  );
}
export default PDFViewerComponent;
