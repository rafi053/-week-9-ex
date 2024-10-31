import React from 'react'
import { Product as ProductType } from '../../types/product'

interface PostProps {
    product: ProductType
}

const Product:React.FC<PostProps> = ({product}) => {
  return (
    <div className='Product'>
        <h3>name:{product.name}</h3>
        <h3>price:{product.price}</h3>
        <button>Buy</button>
    </div>
  )
}

export default Product