import { PRODUCT_LIST  , PRODUCT_SET } from "../Constant";
import axios from "axios";

 export const ProductList = (data) => {
    return{
        type:PRODUCT_LIST,
        data:'apple'
    }
}
export const ProductSetData = (data) => {
    return{
        type:PRODUCT_SET,
        data:data
    }
}

