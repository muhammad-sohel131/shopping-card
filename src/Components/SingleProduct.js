import dataOfProducts from '../data/dataOfProducts'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const SingleProduct = ({addToCart}) => {
    const [quantity, setQuantity] = useState(1)
    const [hasProduct, setHasproduct] = useState(false)

    const params = useParams().postId
    const product = dataOfProducts.find((p) => +p.id === +params)
   
    const addToCartHandler = (id) => {
        setHasproduct(true)
        addToCart(id)
    }

    const quantityIncreament = () => {
        setQuantity((prev) => prev + 1)
    }
    const quantityDecreament = () => {
        if(quantity>1){
            setQuantity((prev) => prev - 1)
        }
    }
    return(
        <div className='container'>
            <div className='product-wrapper'>
                <div className='single-product-image'>
                    <img src={product.img} alt='' />
                </div>
                <div className='product-details'>
                    <h1>{product.title}</h1>
                    <p>{product.desc}</p>
                    <div className='quantity'>
                        <span>quantity</span>
                        <div>
                            <button onClick={() => quantityDecreament()}>-</button>
                            <input value={quantity} onChange={(e) => +e.target.value>=0 && setQuantity(+e.target.value)} />
                            <button onClick={() => quantityIncreament()}>+</button>
                        </div>
                    </div>
                    <div className='add-to-cart-btns'>
                        <button>buy now</button>
                        <button  onClick={() => !hasProduct &&  addToCartHandler(product.id)}>add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct