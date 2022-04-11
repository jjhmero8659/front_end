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
    const settings = {
      // fade : true,
      dots: false,
      // autoplay:true,
      infinite: true,
      // arrows:false,
      speed: 1500,
      slidesToShow: 9,
      slidesToScroll: 3,

  };
      return(
          <div id="Slick_smallimage_wrap">
              <div className="Slick_div">
                <Slider {...settings}>
                    <div className="par_img_div">
                        <img src={require("./small_img/가습기.png")}></img>
                        <span className="text">가습기</span>
                    </div>
                    <div className="par_img_div">
                        <img src={require("./small_img/김치냉장고.png")}></img>
                        <span className="text">김치냉장고</span>
                    </div>
                    <div className="par_img_div">
                        <img src={require("./small_img/냉장고.png")}></img>
                        <span className="text">냉장고</span>
                    </div>
                    <div className="par_img_div">
                        <img src={require("./small_img/노트북.png")}></img>
                        <span className="text">노트북</span>
                    </div>
                    <div className="par_img_div">
                        <img src={require("./small_img/무선이어폰.png")}></img>
                        <span className="text">무선이어폰</span>
                    </div>
                    <div className="par_img_div">
                        <img src={require("./small_img/믹서기.png")}></img>
                        <span className="text">믹서기</span>
                    </div>
                    <div className="par_img_div">
                        <img src={require("./small_img/밥솥.png")}></img>
                        <span className="text">밥솥</span>
                    </div>
                    <div className="par_img_div">
                        <img src={require("./small_img/빔프로젝트.png")}></img>
                        <span className="text">빔프로젝트</span>
                    </div>
                    <div className="par_img_div">
                        <img src={require("./small_img/선풍기.png")}></img>
                        <span className="text">선풍기</span>
                    </div>

                    <div className="par_img_div">
                        <img src={require("./small_img/세탁기.png")}></img>
                        <span className="text">세탁기</span>
                    </div>
                    <div className="par_img_div">
                        <img src={require("./small_img/식기세척기.png")}></img>
                        <span className="text">식기세척기</span>
                    </div>
                    <div className="par_img_div">
                        <img src={require("./small_img/에어컨.png")}></img>
                        <span className="text">에어컨</span>
                    </div>

                    <div className="par_img_div">
                        <img src={require("./small_img/에어프라이어.png")}></img>
                        <span className="text">에어프라이어</span>
                    </div>
                    <div className="par_img_div">
                        <img src={require("./small_img/제습기.png")}></img>
                        <span className="text">제습기</span>
                    </div>
                    <div className="par_img_div">
                        <img src={require("./small_img/TV.png")}></img>
                        <span className="text">TV</span>
                    </div>
                </Slider>
              </div>
          </div>
      )
  }
}

export default Slide_Banner;
