import React , {Component} from "react";
import "../css/Product_slick.css";


class Product_slick extends Component{
    constructor(props){
         super(props)

         this.state = {

         }
    }

    render(){
        return(
            <div id="Product_slick_wrap">
                <header className="Product_slick_title">
                    <span>제품 평점 랭킹</span>
                </header>
                <div className="Product_list">
                    <div className="NoteBook active">
                        노트북
                    </div>
                    <div className="TV">
                        TV
                    </div>
                    <div className="Tablet">
                        타블렛
                    </div>
                    <div className="fan">
                        선풍기
                    </div>
                    <div className="Air_conditioner">
                        에어컨
                    </div>
                    <div className="Earphone">
                        무선 이어폰
                    </div>
                </div>
            </div>
        )
    }
}

export default  Product_slick;