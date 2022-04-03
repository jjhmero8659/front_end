import React , { Component } from "react";
import "./css/Post.css";

class Post extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div id="post">
                <div className="num">
                    {this.props.id}
                </div>
                <div className="title">
                    {this.props.title}
                </div>
            </div>
        )
    }

}

export default Post;