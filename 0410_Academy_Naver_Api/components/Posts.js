import React , {Component} from "react";
import "../css/Posts.css";

class Posts extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div id="Posts_wrap">
                <div className="title">
                    {this.props.title}
                </div>
                <div className="img">
                    <img src = {this.props.image}></img>
                </div>
                <div className="description">
                    {this.props.description}
                </div>
            </div>
        )
    }
}

export default Posts; 