import { useState, useEffect } from 'react'

import dataOfProducts from '../data/dataOfProducts'
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
      setProducts(dataOfProducts)
    },[])


    return(
      <div className='container'>
        <h1>Do Shopping</h1>
        <div className='products-wrapper'>
        {
          products.map((product) => <Product key={product.id} product={product} />)
        }
        </div>
      </div>
    )
  
}

export default Products;
