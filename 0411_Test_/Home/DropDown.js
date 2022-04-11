import React,{Component} from "react";
import "./css/DropDown.css";
import jquery from 'jquery';
import $ from 'jquery';


class DropDown extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  componentDidMount(){
    $(function(){ 
      $("#DropDown_wrap").hover(
        function(e){
          e.stopImmediatePropagation();
          $(".sub , .blank").stop().slideToggle(200)
        }
      )
    })
  }
  test = () => {
    window.location.href = "/search"
  }

  render(){
    return(
      <div id="DropDown_wrap">
        <ul className="gnb">
            <li><a>테크</a></li>
            <ul className="sub">
              <li><a>노트북</a></li>
              <li><a>TV</a></li>
              <li><a>무선 이어폰</a></li>
              <li><a>무선 스피커</a></li>
            </ul>
        </ul>
        <ul className="gnb">
            <li><a>생활가전</a></li>
            <ul className="sub">
              <li><a>무선 청소기</a></li>
              <li><a>로봇 청소기</a></li>
              <li><a>공기 청정기</a></li>
              <li><a>건조기</a></li>
              <li><a>세탁기</a></li>
            </ul>
        </ul>
        <ul className="gnb">
            <li><a>계절가전</a></li>
            <ul className="sub">
              <li><a>가습기</a></li>
              <li><a>에어컨</a></li>
              <li><a>선풍기</a></li>
              <li><a>제습기</a></li>
            </ul>
        </ul>
        <ul className="gnb">
            <li><a>주방가전</a></li>
            <ul className="sub">
              <li><a>믹서기</a></li>
              <li><a>전기밥솥</a></li>
              <li><a>에어프라이어</a></li>
              <li><a>식기 세척기</a></li>
              <li><a>냉장고</a></li>
              <li><a>김치 냉장고</a></li>
            </ul>
        </ul>
        <div className="blank"></div>
      </div>
    )
  }
}

export default DropDown;