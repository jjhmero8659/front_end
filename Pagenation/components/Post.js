import React , {Component} from "react";
import "./css/Post.css";

class Post extends Component{
    constructor(props){
        super(props)

        this.state={}
    }

    render(){
        console.log("POST : ",this.props.img)
        return(
            <div id="Post_wrap">
                <div className="num">
                    {this.props.num}
                </div>
                <div className="title">
                    {this.props.title}
                </div>
                <div className="image">
                    <img src={this.props.myimg}></img>
                </div>
            </div>
        )
    }
}

export default  Post;