import React , {Component} from "react";
import "../css/Post.css";

class Post extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div id="Post_wrap">
                <div className="Post_name">
                    {this.props.name}
                </div>
                <div className="Post_price">
                    {this.props.price}
                </div>
            </div>
        )
    }
}

export default Post;