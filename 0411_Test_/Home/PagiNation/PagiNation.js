import React, {Component} from "react";
import "../css/PagiNation.css";
import $ from "jquery";

class PagiNation extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    update_current_page = (data) => {
        this.props.update_current_page(data);
    }

    render(){
        var post_array = [];

        for(var i=1; i<=Math.ceil(this.props.total_length / this.props.Page_per_page); i++){
            post_array.push(i)
        }
        const post_page = post_array.map(
            (data,index) => (<div key={index} onClick={()=>this.update_current_page(data)} className="page">{data}</div>)
        )
        
        return(
            <div id="PagiNation_wrap">
                {post_page}
            </div>
        )
    }
}

export default PagiNation;