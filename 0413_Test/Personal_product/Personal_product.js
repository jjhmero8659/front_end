import React , {Component} from "react";
import "./css/Personal_product.css";
import queryString from "query-string";
import axios from "axios";
import Header from "./Header.js";
import Product_info from "./Product_info.js";


class Personal_prodcut extends Component{
    constructor(props){
        super(props)

        this.state = {
            product_name : "",
            product : [],
        }
    }

    componentDidMount(){
        const queryObj = queryString.parse(window.location.search)
        console.log(queryObj.product_name)
        this.setState({
            product_name : queryObj.product_name,
        },function(){
            this.get_product();
        })
    }

    get_product = async() => {
        const res = await axios.get("/api/get/get_product"+this.state.product_name);
        console.log(res.data.Product)
        this.setState({
            product : res.data.Product
        })
    } 

    render(){
        const product_info = this.state.product.map(
            (data,index) => (
                <Product_info
                    key={index}
                    name = {data.name}
                    price = {data.price}
                    review = {data.review}
                    gpa = {data.gpa}
                    src = {data.src}
                />
            )
        )
        return(
            <div id="Personal_product_wrap">
                <div className="header_Personal">
                    <Header/>
                </div>
                <nav>
                    {product_info}
                </nav>
            </div>
        )
    }
}

export default Personal_prodcut;