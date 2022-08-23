import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'


const Product = ({ product }) => {
    const { id, title, rating, images, price } = product;
    return (<div>
<Link key={id} href="/products/[id]" as={`/products/${id}`}>
<Card style={{ width: '18rem', marginRight: '5px', marginBottom: '5px', cursor: 'pointer' }}>
      <Card.Img variant="top" src={images[images.length-1]} style={{width: '286px', height: '150px'}}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div><ReactStars
  count={5}
  value={rating}
  size={24}
  color2={'#ffd700'} /> </div>
        <Card.Text style={{ color: 'red' }}>
          ${price}
        </Card.Text>
      </Card.Body>
    </Card>
</Link>
</div>);
}

export default Product;