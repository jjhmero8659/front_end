import React , {Component} from "react";
import "./css/person.css"

class Person extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div className="Person_wrap">
                <div className="left_side">
                    <div>
                        이름 : {this.props.name}
                        나이 : {this.props.age}
                        키 : {this.props.height}
                    </div>
                </div>
                <div className="right_side">

                </div>
            </div>
        )
    }
}

export default Person;