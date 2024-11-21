import React from 'react'
  
export default function Product({product}) {

    
    function clicked () {
        console.log(product.title);
    }


    return (
    <div className="product-card" onClick={clicked}>
      <img src={product.images[0]} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p style={{textOverflow: 'ellipsis',overflow:'hidden', whiteSpace: 'nowrap'}}>{product.description}</p>
      <h3>Price: ${product.price}</h3>
      <p>Rating: {product.rating} / 5</p>
    </div>
    )
  }

  