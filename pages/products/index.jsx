import React from 'react';
import Product from '../../src/components/Product';

export default ({ data }) => {
    // const [productsData] = data.pro;
    console.log('products', JSON.stringify(data.products));
    const Products = new Array(15).fill(1).map((e, i) => ({id: i, title: `product: ${i}`}));

    return (
        <div>
          <h1>Products</h1>
    
          {data && data.products.map(productItem => (
            <Product product={productItem} />
          ))}
        </div>
      )
}

export async function getServerSideProps() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
  
    return { props: { data } }
  }