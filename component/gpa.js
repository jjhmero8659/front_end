import React , {Component} from "react";
import "../component/css/gpa.css"

class Gpa extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="Gpa_wrap">
                <img src={require("./img/gpa.png")}></img>
            </div>
        )
    }
} 

export default Gpa;