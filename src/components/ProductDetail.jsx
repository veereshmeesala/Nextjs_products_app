import React from 'react';

const ProductDetail = ({ product }) => {
    const { title, rating, images } = product;
    console.log('product details', product);
    return (<article>
        <header>
            Product
        </header>
        <div>
            <img src={product.images[0]} />
            <p>{product.title}</p>
            <p>{product.rating}</p>
        </div>
    </article>);
}

export default ProductDetail;