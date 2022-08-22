import React from 'react';
import Link from 'next/link';

const Product = ({ product }) => (<div>
<Link key={product.id} href="/products/[id]" as={`/products/${product.id}`}>
  <a>
    <strong>{product.title}</strong>
  </a>
</Link>
</div>);

export default Product;