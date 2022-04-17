import React, {useState} from "react";
import "../css/Post.css";

function Post(props){

  return(
    <div id="Post_wrap">
        <div className="Post_title">
            {props.title}
        </div>
        <div className="Post_image">
            <img src={props.image}></img>
        </div>
        <div className="Post_description">
            {props.description}
        </div>
    </div>
  )
}

export default Post;