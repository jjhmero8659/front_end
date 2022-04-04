import React,{Component} from "react";
import "./css/Slide_Banner.css";

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
    const settings = {
        // fade : true,
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
 
    };
    return(
      <div id="Slide_Banner_wrap">
          <Slider {...settings}>
            <div>
                <img src={require("./img/image1.jpg")}></img>
            </div>
            <div>
                <img src={require("./img/image2.jpg")}></img>
            </div>
            <div>
                <img src={require("./img/image3.jpg")}></img>
            </div>
            <div>
                <img src={require("./img/image4.jpg")}></img>
            </div>
            <div>
                <img src={require("./img/image5.jpg")}></img>
            </div>
            <div>
                <img src={require("./img/image6.jpg")}></img>
            </div>
        </Slider>
        <div id="transparency" className="left"></div>
        <div id="transparency" className="right"></div>
      </div>
    )
  }
}

export default Slide_Banner;