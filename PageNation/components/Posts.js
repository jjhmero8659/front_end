import React , {Component} from "react";
import "./css/Posts.css";
import Post from "./Post.js";

class Posts extends Component{
  constructor(props){
    super(props);

    this.state = {
      posts:[]
    }
  }

  render(){
    const result = this.props.posts.map(
        (data,index) => (<Post key={index} id={data.id} title={data.title}></Post>)
    )
    return(
      <div id="Post_wrap">
          {result}
      </div>
    )
  }
}

export default Posts;
