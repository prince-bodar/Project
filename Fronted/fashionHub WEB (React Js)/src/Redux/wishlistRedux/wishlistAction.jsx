import { ADD_TO_WISHLIST  , REMOVE_TO_WISHLIST , EMPTY_WISHLIST , WISHLIST_TO_CART } from "../Constant";

const addToWishlist = () => {
    return{
        type:ADD_TO_WISHLIST
    }
}

const removeToWishlist = () => {
    return{
        type:REMOVE_TO_WISHLIST
    }
}

const emptyWishlist = () => {
    return{
        type:EMPTY_WISHLIST
    }
}

const wishlistToCart = () => {
    return{
        type:WISHLIST_TO_CART
    }
}