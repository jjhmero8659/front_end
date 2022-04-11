import React, {Component} from "react";
import "../css/PagiNation.css";
import Posts from "../PagiNation/Posts.js";
import Post from "../PagiNation/Post.js";

class PagiNation extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    update = (data) => {
        this.props.update_current_page(data);
    }

    render(){
        var post_array = [];

        for(var i=1; i<=Math.ceil(this.props.Total_page / this.props.Page_per_page); i++){
            post_array.push(i)
        }
        const post_page = post_array.map(
            (data,index) => (<div key={index} onClick={()=>this.update(data)} className="page">{data}</div>)
        )
        
        return(
            <div id="PagiNation_wrap">
                {post_page}
            </div>
        )
    }
}

export default PagiNation;