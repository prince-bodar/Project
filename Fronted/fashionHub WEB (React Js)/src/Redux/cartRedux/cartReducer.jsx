import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART, INCREMENT_TO_CART, DECREMENT_TO_CART } from "../Constant";

const getlocalStorageData = () => {
    const cartData = localStorage.getItem("cart");
    try {
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        console.error('Error parsing cart data from localStorage:', error);
        return [];
    }
}

const cartReducer = (data = getlocalStorageData(), action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existProduct = data.findIndex(item => item.id === action.data.id);
            if (existProduct !== -1) {
                const updatedData = [...data];
                updatedData[existProduct].Count += 1;
                localStorage.setItem("cart", JSON.stringify(updatedData));
                return updatedData;
            }
            const newData = [{ ...action.data, Count: 1 }, ...data];
            localStorage.setItem("cart", JSON.stringify(newData));
            return newData;


        case REMOVE_TO_CART:
            console.warn('RemoveToCartReducer', action)
            // data.length = data.length -1
            // data.length = data.length ? data.length -1 : []
            const reminderItem = data.filter((item) => item.id !== action.data);
            localStorage.setItem("cart", JSON.stringify(reminderItem));
            return [...reminderItem];
            
        case EMPTY_CART:

            console.warn('EmptyCartReducer', action)
            localStorage.setItem("cart", JSON.stringify([]));
            return [];

        case INCREMENT_TO_CART: return  data

        case DECREMENT_TO_CART: return data

        default: return data
        
    }
}

export default cartReducer