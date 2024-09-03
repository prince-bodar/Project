import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART , INCREMENT_TO_CART , DECREMENT_TO_CART } from "../Constant";

export const addToCart = (data) => {
    return{
        type:ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {

    return{
        type:REMOVE_TO_CART,
        data
    }
}

export const emptyCart = (data) => {
    return{
        type:EMPTY_CART
    }
}

export const incrementToCart = (data) => {
    return{
        type:INCREMENT_TO_CART
    }
}

export const decrementToCart = (data) => {
    return{
        type:DECREMENT_TO_CART
    }
}

