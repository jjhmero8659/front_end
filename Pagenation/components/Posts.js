import React, {Component} from "react";
import "./css/Posts.css";
import Post from "./Post.js";

class Posts extends Component{
  constructor(props){
    super(props)

    this.state = {
      posts : [

      ]
    }
  }

  render(){
      console.log("POSTS : " , this.props.post)
      const result = this.props.post.map(
          (data,index) => (
              <Post
                key={index}
                num = {data.num}
                title = {data.title}
                myimg = {data.image}
              />
          )
      )
    return(
      <div id="Posts_wrap">
          {result}
      </div>
    )
  }
}

export default Posts;