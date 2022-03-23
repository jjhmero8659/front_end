import React , {Component} from "react";
import "./css/product.css";

class Product extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div id="Product_wrap">
                <div className="Select_product">
                    <div className="Select_main_product">
                        <ul className="gnb">
                            <li>
                                <a>제품 main 선택</a>
                                <ul className="sub">
                                    <li><a>1</a></li>
                                    <li><a>2</a></li>
                                    <li><a>3</a></li>
                                    <li><a>4</a></li>
                                    <li><a>5</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="Select_detail">
                        
                    </div>
                </div>
                <div className="transparency"></div>
            </div>
        )
    }
}

export default Product;