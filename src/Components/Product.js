import { Link } from 'react-router-dom'

const Product = ({product}) => {

    return(
        <div className='product'>
            <div className='product-image'>
                <Link to={`/singleProduct/${product.id}`}>
                    <img src={product.img} alt='' />
                </Link>
            </div>
            <div className='product-body'>
                <h4>
                   <Link to={'/singleProduct/'+product.id}>{product.title}</Link>
                </h4>   
                <p>{product.desc.substring(0,100)+'...'}</p>
            </div>
            <div className='product-footer'>
                {product.discountPrice ? 
                (<>
                    <span><del>${product.price}</del></span>
                    <span>${product.discountPrice}</span>
                </>) : 
                 (<>
                    <span>${product.price}</span>
                 </>)   
                }
            </div>
        </div>
    )
}

export default Product