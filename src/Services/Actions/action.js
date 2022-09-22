import { ADD_TO_CART ,REMOVE_TO_CART} from "../Constenst"

export const addToCart = (data) => {
    console.log("ADD",data)
    return {
        type : ADD_TO_CART,
        data : data
    }
}

export const removeToCart = () => {
    console.log("Remove")
    return {
        type : REMOVE_TO_CART
    }
}