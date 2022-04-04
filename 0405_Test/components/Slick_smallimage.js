import React,{Component} from "react";
import "./css/Slick_smallimage.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




class Slide_Banner extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render(){
      return(
          <div id="Slick_smallimage_wrap"></div>
      )
  }
}

export default Slide_Banner;
