import React ,{ Component } from "react";
import Header from "./header";
import ProductForm from "./productForm";
import Footer from "./footer";

class ProductEdit extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="container col-md-5">
                    <ProductForm/>
                </div>
                <Footer/>
            </div>
        )
    }

}
export default ProductEdit;
