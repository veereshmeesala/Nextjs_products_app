import React from 'react';
import 'reset-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Product from '../../src/components/Product';
import ShopNavBar from '../../src/components/nav';

export default ({ data }) => {

    return (
        <div>
          <ShopNavBar />
          <div style={{ backgroundColor: 'rgba(0,0,0,.05)', paddingLeft: '10px'}}>
            <h1>Products</h1>
          </div>
          <Container fluid>
          <div className='products-list' style={{ margin: '0 auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {data && data.products.map(productItem => (
            <Product product={productItem} />
          ))}
           </div>
          </Container>
        
        </div>
      )
}

export async function getServerSideProps() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
  
    return { props: { data } }
  }