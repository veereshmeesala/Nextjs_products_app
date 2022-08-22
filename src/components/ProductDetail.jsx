import React from 'react';

const ProductDetail = ({ product }) => {
    const { title, images, price, brand } = product;
    console.log('product details', product);
    return (<article>
        <div style={{ display: 'flex' }}>
            <img src={product.images[0]} />
            <div style={{ padding: '0 20px'}}>
                <h2>{title}</h2>
                <p><strong>Brand</strong>: <span style={{ color: 'red' }}>{brand}</span></p>
                <p><strong>Description</strong>: {product.description}</p>
                <hr />
                <p><strong>Price</strong>: {price}</p>
            </div>
        </div>
    </article>);
}

export default ProductDetail;