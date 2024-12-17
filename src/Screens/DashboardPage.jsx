import CartBar from "../Layouts/CartBar"
import WishlistBar from "../Layouts/WishlistBar"

export default ({ path, currentDashBoardPage,removeAllCart, setCurrentDashBoardPage, removeCartItem=(id)=>{}, addCartItem=(id)=>{}, carts = [], wishlist=[],removeWishlistItem=()=>{}}) => {

    document.title = "Gadget Heaven | Dashboard"

    return (
        <>
            {currentDashBoardPage=="cart" && <CartBar removeAllCart={removeAllCart} ids={carts} removeItem={removeCartItem} currentDashBoardPage={currentDashBoardPage}/>}
            {currentDashBoardPage=="wishlist" && <WishlistBar ids={wishlist} addCartItem={addCartItem} removeItem={removeWishlistItem} currentDashBoardPage={currentDashBoardPage}/>}
        </>
    )
}