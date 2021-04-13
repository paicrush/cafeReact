import axios from "axios";
import {PRODUCT_FETCH} from "./type";

export const productFetch =() =>{
    return dispatch => {
        axios.get("http://localhost:3001/product").then(response => {
        dispatch({type: PRODUCT_FETCH,payload:response.data});
	    })
    }  
}
export const productDelete = id =>{
    return dispatch => {
        axios.delete("http://localhost:3001/product/" + id).then(response => {
        dispatch({type: PRODUCT_FETCH,payload:response.data});
	    })
    }  
}