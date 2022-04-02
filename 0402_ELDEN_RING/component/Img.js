import React , {Component} from "react";
import "./css/Img.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jquery from 'jquery';
import $ from 'jquery';


class Img extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        var settings = {
            fade : true,
            dots: false,
            autoplay:true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return(
            <div id="Img_wrap">
                <header>
                    <img className="header_img" src={require("./img/Elden_Ring_logo.png")}></img>
                </header>
                <div className="slick_div">
                    <Slider {...settings}>
                        <div>
                            <img src={require("./img/Elden_Ring.jpeg")}></img>
                        </div>
                        <div>
                            <img src={require("./img/Elden_Ring1.jpg")}></img>
                        </div>
                            <div>
                        <img src={require("./img/Elden_Ring2.jpg")}></img>
                            </div>
                        <div>
                            <img src={require("./img/Elden_Ring3.jpg")}></img>
                        </div>
                            <div>
                        <img src={require("./img/Elden_Ring4.jpg")}></img>
                        </div>
                            <div>
                        <img src={require("./img/Elden_Ring5.jpg")}></img>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Img