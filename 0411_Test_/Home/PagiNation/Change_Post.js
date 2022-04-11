import React, {Component} from "react";
import "../css/Change_Post.css";


class Change_Post extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    update_view = (data) => {
        this.props.update_view(data);
    }

    render(){
        return(
            <div id="Change_Post_wrap">
                <div id="NoteBook" className="Product_button" onClick={()=>this.update_view("NoteBook")}>NoteBook</div>
                <div id="TV" className="Product_button" onClick={()=>this.update_view("TV")}>TV</div>
            </div>
        )
    }
}

export default Change_Post;