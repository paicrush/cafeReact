import {PRODUCT_FETCH} from "../actions/type";
export default function (state=[], action) {
    switch(action.type){
        case PRODUCT_FETCH :
            return action.payload;
        default:
            return state;
    }
}