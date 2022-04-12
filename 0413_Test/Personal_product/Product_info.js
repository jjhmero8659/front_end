import React , {Component} from "react";
import "./css/Product_info.css";


class Product_info extends Component{
    constructor(props){
        super(props)

        this.state = {
            product : []
        }
    }

    componentDidMount(){
        this.setState({
            // product : this.props.product[0],
        })
    }


    render(){
        // console.log("this.props.product[0]",this.state.product)
        // console.log("state",this.state.product)
        return(
            <div id="Product_info_wrap">
                <div className="Product_name">
                    {this.props.name}
                </div>
                <div className="Product_info_image">
                    <img src={this.props.src}/>
                </div>
                <div className="Product_price">
                    제품 가격 : <span>{this.props.price}</span>  원
                </div>
                <div className="Product_gpa">
                    제품 평점 : <span>{this.props.gpa}</span>
                </div>
                <div className="Product_review">
                    제품 리뷰 : <span>7개</span>
                </div>
            </div>
        )
    }
}

export default Product_info;