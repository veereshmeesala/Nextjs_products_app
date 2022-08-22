import React from 'react';
import 'reset-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../../src/components/Product';
import ShopNavBar from '../../src/components/nav';

export default ({ data }) => {

    return (
        <div>
          <ShopNavBar />
          <h1>Products</h1>
        <div className='products-list' style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {data && data.products.map(productItem => (
            <Product product={productItem} />
          ))}
           </div>
        </div>
      )
}

export async function getServerSideProps() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
  
    return { props: { data } }
  }