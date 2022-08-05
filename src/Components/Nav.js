const Nav = ({cartProducts}) => {
    console.log(cartProducts)
    return(
        <nav>
            <div className='nav-container'>
                <div className='logo'>Logo</div>
                <div className='main-menu'>
                    <div className='shopping-cart'>
                        <span className='carts-quantity'>{cartProducts.length}</span>
                        <i className="fas fa-cart-plus"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav