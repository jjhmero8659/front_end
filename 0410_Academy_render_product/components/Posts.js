import React , {Component} from "react";
import "../css/Posts.css";
import Post from "./Post.js";
import PagiNation from "./PagiNation.js";

class Posts extends Component{
  constructor(props){
    super(props)

    this.state = {
        total_length : this.props.Product.length,
        Current_page : 1,
        Page_Per_page : 3,
    }
  }

  slice_list = (data) => {
      var list = [];
      var indexOfLast = this.state.Current_page * this.state.Page_Per_page;
      var indexOfFirst = indexOfLast - this.state.Page_Per_page;
      list = data.slice(indexOfFirst,indexOfLast);
      return list;
  }
  updata_current = (data) => {
      this.setState({
          Current_page : data
      })
  }

  render(){
    var result = this.slice_list(this.props.Product).map(
        (data,index) => (
            <Post
                key={index}
                name = {data.name}
                price = {data.price}
            />
        )
    )
    return(
      <div id="Posts_wrap">
          {result}
          <PagiNation
            total_length = {this.state.total_length}
            Current_page = {this.state.Current_page}
            Page_Per_page = {this.state.Page_Per_page}
            updata_current = {this.updata_current}
          />
      </div>
    )
  }
}

export default Posts;