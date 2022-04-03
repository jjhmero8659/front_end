import React,{Component} from "react";
import "./css/Header.css";
import Search_Icon from "./img/search_icon.png";


class Header extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render(){
    return(
      <div id="Header_wrap">
        <div className="Logo">
            Logo
        </div>
        <div className="Category">
            카테고리
        </div>
        <div className="Search_product">
            <input className="Search" placeholder="제품명 혹은 모델 명으로 검색하세요"></input>
            <div className="Search_icon">
                <img src={Search_Icon}></img>
            </div>
        </div>
        <div className="User_Login">
            <a href="#">로그인/회원가입</a>
        </div>
      </div>
    )
  }
}

export default Header;