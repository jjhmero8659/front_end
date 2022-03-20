import React , {Component} from "react";

import "./css/Car.css";

class Car extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div id="Car_wrap">
                    <div className="car_num">num : {this.props.num}</div>
                    <div className="car_name">name : {this.props.name}</div>
                    <div className="car_mileage">mileage : {this.props.mileage}</div>
            </div>
        )
    }
}

export default Car;