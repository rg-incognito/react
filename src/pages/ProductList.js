import React from 'react'
import Product from '../components/Product'

export default function ProductList
({products}) {
    return (
    <div className='product-list'>
        {products.map((product) => (
          <Product product={product}/>
        ))}
    </div>
  )
}
