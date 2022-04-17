import React, {useState} from "react";
import "../css/Posts.css";
import Post from "./Post.js";

function Posts(props){


    const slice_json = (data) => {
        var inDexOfLast = props.currentPage * props.postPerPage;
        var indexOfFirst = inDexOfLast - props.postPerPage;
    
        var slice_post = data.slice(indexOfFirst,inDexOfLast)
        return slice_post;
    }

    const result = slice_json(props.book_list).map(
        (data,index) => (
            <Post
                key={index}
                title = {data.title}
                image = {data.image}
                description = {data.description}
            />
        )
    )
    console.log("book_list",props.book_list)
    console.log(result)
  return(
    <div id="Posts_wrap">
        {result}
    </div>
  )
}

export default Posts;