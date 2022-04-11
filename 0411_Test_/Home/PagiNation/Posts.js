import React, {Component} from "react";
import "../css/Posts.css";
import PagiNation from "./PagiNation";
import Post from "./Post";
import $ from "jquery";

class Posts extends Component{
    constructor(props){
        super(props)

        this.state = {
            Current_page : 1,
            Page_per_page : 3,
        }
    }

    componentDidMount(){
        
    }

    slice_product_list = (product) => {
        var slice_product = [];

        var indexOfLast = this.state.Current_page * this.state.Page_per_page;
        var indexOfFirst = indexOfLast - this.state.Page_per_page;

        slice_product = product.slice(indexOfFirst,indexOfLast);
        return slice_product;
    }

    update_current_page = (data) => {
        this.setState({
            Current_page : data
        })
    }

    render(){
        
        var post = this.slice_product_list(this.props.Product).map(
            (data,index) => (<Post
                key={index}
                name = {data.name}
                image = {data.image}
                price = {data.price}
                review = {data.review}
                gpa = {data.gpa}
            />)
        )

        return(
            <div id="Posts_wrap">
                {post}
                <PagiNation
                    total_length = {this.props.Product.length}
                    Current_page = {this.state.Current_page}
                    Page_per_page = {this.state.Page_per_page}
                    update_current_page = {this.update_current_page}
                />
            </div>
        )
    }
}

export default Posts;