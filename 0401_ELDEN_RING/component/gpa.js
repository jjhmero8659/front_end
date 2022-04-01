import React , {Component} from "react";
import "../component/css/gpa.css"
import window_img from "./img/window_img.png";

class Gpa extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="Gpa_wrap">
                <div id="normal" className="Purchase">
                    <span>ELDEN RING 구매</span>
                    <div className="add_basket_wrap">
                        ₩ 64,800
                        <div className="add_basket">
                            <a>장바구니에 추가</a>
                        </div>
                    </div>
                    <div className="window_img">
                            <img src={window_img}></img>
                        </div>
                </div>
                <div id="delux" className="Purchase">
                    <span>ELDEN RING Deluxe Edition 구매</span>
                    <div className="add_basket_wrap">
                        ₩ 86,800
                        <div className="add_basket">
                            <a>장바구니에 추가</a>
                        </div>
                    </div>
                    <div className="window_img">
                            <img src={window_img}></img>
                        </div>
                </div>
                
            </div>
        )
    }
} 

export default Gpa;