import React from 'react'
import { PORDUCTS } from '../../Products'
import Product from './Product'
import './shop.css'

export default function Shop() {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Tech Shop</h1>
      </div>
      <div className='products'>
        {PORDUCTS.map((product) => (<Product data={product} />
        ))}

      </div>

    </div>
  )
}
