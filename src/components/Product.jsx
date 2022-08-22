import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({ product }) => {
    const { id, title, rating, images, price } = product;
    console.log('images', images);
    return (<div>
<Link key={id} href="/products/[id]" as={`/products/${id}`}>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images[images.length-1]} style={{width: '175px', height: '150px'}}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {rating}
        </Card.Text>
        <Card.Text>
          {price}
        </Card.Text>
      </Card.Body>
    </Card>
</Link>
</div>);
}

export default Product;