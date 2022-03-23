import React , {Component} from "react";
import "../component/css/gpa.css"

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
                </div>
                <div id="delux" className="Purchase">
                    <span>ELDEN RING Deluxe Edition 구매</span>
                    <div className="add_basket_wrap">
                        ₩ 86,800
                        <div className="add_basket">
                            <a>장바구니에 추가</a>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <div className="expert_star">
                        <span>전문가 평점 : </span>
                        <span>4.8</span>
                    </div>

                    <div className="normal_star">
                        <span>플레이어 평점 : </span>
                        <span>4.3</span>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Gpa;