import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './App.css';
import Products from './Components/Products';
import SingleProduct from './Components/SingleProduct';
import Nav from './Components/Nav';
import CardProducts from './Components/CardProducts';

const App = () => {
    const existingProducts = JSON.parse(localStorage.getItem('cartProducts')) || []
    const [cartProducts, setCartProducts] = useState(existingProducts)

    const addToCart = (id) => {
      const notFound = existingProducts.indexOf(id) < 0
      notFound && setCartProducts([...cartProducts,id])
    }
    
    useEffect(() => {
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
    },[cartProducts])

    return(
      <>
        <Nav cartProducts={cartProducts} />
        <CardProducts cartProducts={cartProducts} />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/singleProduct/:postId' element={<SingleProduct addToCart={addToCart} />} />
        </Routes>
      </>  
    )
  
}

export default App;
