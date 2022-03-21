import React , {Component} from "react";
import "./css/Img.css";

class Img extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div id="Img_wrap">
                <img src={require("./img/Elden_Ring.jpeg")}></img>
            </div>
        )
    }
}

export default Img