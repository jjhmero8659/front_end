import React, {Component} from "react";
import "../css/Posts.css";
import Post from "./Post";

class Posts extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        console.log("Posts",this.props.Slice_Posts_arr)
        // console.log("image",this.props.Slice_Posts_arr);
        const slice_post = this.props.Slice_Posts_arr.map(
            (data,index) => (
                <Post
                    key={index}
                    id = {data.id}
                    image = {data.large_cover_image}
                    rating = {data.rating}
                    summary = {data.summary}
                />
            )
        )
        return(
            <div id="Posts_wrap">
                {slice_post}
            </div>
        )
    }
}

export default Posts;