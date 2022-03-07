import React , {Component} from "react";
import "../css/Movie.css";

class Movie extends Component{
  constructor(props){
    super(props);

    this.state = {
    }
  }


  render(){
    return(
      <div className="Movie_wrap">
        <div className="left_side">
            <div className="img_wrap">
                <img src= {this.props.large_cover_image}></img>
            </div>
        </div>

        <div className="right_side">
            <div className="title">
                {this.props.title}
            </div>

            <div className="summary">
                {this.props.summary}
            </div>
        </div>
      </div>
    )
  }
}

export default Movie;