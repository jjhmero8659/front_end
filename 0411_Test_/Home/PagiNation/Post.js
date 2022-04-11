import React, {Component} from "react";
import { Navigate } from "react-router-dom";
import "../css/Post.css";

class Post extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    detail_product = () => {
        window.location.href = "/personal_prodcut?product_name="+this.props.name
    }

    render(){
        return(
            <div id="Post_wrap">
                <div className="name" onClick={this.detail_product}>
                    {this.props.name}
                </div>
                <div className="image" onClick={this.detail_product}>
                    <img src={this.props.image}/>
                </div>
                <div className="price">
                    제품가격 : {this.props.price} 원
                </div>
                <div className="review">
                    사용자 후기 : {this.props.review} 개
                </div>
                <div className="gpa">
                    사용자 평점 : <span>{this.props.gpa}</span>
                </div>
            </div>
        )
    }
}

export default Post;