import products from '../data/dataOfProducts'


const CardProducts = ({cartProducts}) => {
    const cartproductsList = products.filter(product => cartProducts.includes(product.id))
    return (
        <div className='card-products'>
            <div className='cart-products-wrapper'>
                {cartproductsList.map(cartProduct => {
                    return(
                        <div className='cart-product' key={cartProduct.id}>
                            <div className='cart-product-img'>
                                <img src={cartProduct.img} alt={cartProduct.title} />
                            </div>
                            <h3>{cartProduct.title}</h3>
                            <div>
                            <i className="fas fa-trash"></i>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardProducts