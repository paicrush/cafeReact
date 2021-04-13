import { combineReducers } from "redux";
import ProductReducers from "./productReducers";
import OrderReducers from "./orderReducers";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    orders:OrderReducers,
    product:ProductReducers,
    form: formReducer
});

export default rootReducer;