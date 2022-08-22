import React from 'react'
import { useRouter } from 'next/router';
import ProductDetail from '../../src/components/ProductDetail';

export default ({ data }) => {
  const router = useRouter();
  const { id }= router.query;

  console.log('log', data);

  return (
    <ProductDetail id={id} product={data}/>
  )
}


export async function getServerSideProps({ params }) {
    const response = await fetch(`https://dummyjson.com/products/${params.id}`)
    const data = await response.json();
    console.log('single product', data);
  
    return { props: { data } }
  }
  