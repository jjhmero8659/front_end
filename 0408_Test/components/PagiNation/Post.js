import React, {Component} from "react";
import "../css/Post.css";
import img_a from "../img/NoteBook/삼성전자_갤럭시북_이온_15인치_i5_MX250.jpeg";

class Post extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        // console.log(this.props.image)
        
        return(
            <div id="Post_wrap">
                <div className="id">
                    {this.props.id}
                    {this.props.key}
                </div>
                <div className="img_wrap">
                    <img src={this.props.image}></img>
                </div>
                <div className="rating_wrap">
                    <span>영화 평점 : <b>{this.props.rating}</b></span>
                </div>
                <div className="summary">
                    {this.props.summary}
                </div>
            </div>
        )
    }
}

export default Post;