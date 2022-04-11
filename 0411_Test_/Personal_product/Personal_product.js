import React , {Component} from "react";
import "./css/Personal_product.css";
import queryString from "query-string";


class Personal_prodcut extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    componentDidMount(){
        const queryObj = queryString.parse(window.location.search)
        console.log(queryObj)
        console.log(this.props.view)
    }

    render(){
        return(
            <div id="Personal_product_wrap">
                <div className="header_Personal">
                
                </div>
            </div>
        )
    }
}

export default Personal_prodcut;