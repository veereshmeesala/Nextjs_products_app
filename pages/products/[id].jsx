import React from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
// import 'reset-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from '../../src/components/ProductDetail';
import ShopNavBar from '../../src/components/nav';

export default ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <ShopNavBar />
      <div style={{ backgroundColor: 'rgba(0,0,0,.05)', padding: '10px' }}>
        <h1 style={{ fontSize: '1.8rem' }}>Products details : {data.title}</h1>
      </div>
      <Container fluid>
        <ProductDetail id={id} product={data} />
      </Container>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await response.json();
  console.log('single product', data);

  return { props: { data } };
}
