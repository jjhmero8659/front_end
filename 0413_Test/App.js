import React,{Component} from "react";
import axios from "axios"
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import queryString from "query-string";
import Home from "./components/Home/Home.js";
import Search from "./components/Search/Search.js";
import Search_Icon from "./components/Home/img/search_icon.png";
import Personal_Prodcut from "./components/Personal_product/Personal_product.js";

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      NoteBook : [
        {name : "LG전자 그램 20년형 17인치 i5", image : "https://d3jfjcd8dl9mjz.cloudfront.net/aiFHgf8t5Xnl1tGxUaiZE6WqmHM=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200306/081644-1oGW7dK9GE.jpeg" , price : 1560000,review:13,gpa : 4.8},
        {name : "삼성전자 갤럭시북 플렉스 13인치 i5", image : "https://d3jfjcd8dl9mjz.cloudfront.net/9LzI-DsIvY6K8jzIIt-mvanLOng=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200306/025138-P16ocaZHW9.jpeg" , price : 1700000 ,review:8,gpa : 4.3},
        {name : "LG전자 그램 20년형 14인치 i5", image : "https://d3jfjcd8dl9mjz.cloudfront.net/vIDtxtP10XSgGkvUFhnSS2_bRK0=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200306/064345-A1DQyiT3eO.jpeg" , price : 1130000 ,review:9,gpa : 4.4},
        {name : "삼성전자 갤럭시북 플렉스 13인치 i7", image : "https://d3jfjcd8dl9mjz.cloudfront.net/vIDtxtP10XSgGkvUFhnSS2_bRK0=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200306/064345-A1DQyiT3eO.jpeg" , price : 1800000 ,review:4,gpa : 4.2},
        {name : "삼성전자 갤럭시북 이온 15인치 i5 MX250", image : "https://d3jfjcd8dl9mjz.cloudfront.net/P4qYNb2reoquZPIECH-2PvgBf3E=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200306/034737-z4XistcWSK.jpeg" , price : 2560000,review:12,gpa : 4.1},
        {name : "삼성전자 갤럭시북 플렉스 15인치 i5", image : "https://d3jfjcd8dl9mjz.cloudfront.net/VBeCadMiKcAD1hD2uV-R05ZB-qs=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200306/031316-KaJ0EE5puZ.jpeg" , price : 1630000 ,review:3,gpa : 3.8},
        {name : "LG전자 그램19년형 15인치 i5", image : "https://d3jfjcd8dl9mjz.cloudfront.net/5C9gr-eK3txFn4C_qrDTAsp2f8A=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200306/030352-XdthCQ6iFQ.jpeg" , price : 1670000 ,review:7,gpa : 3.4},
        {name : "LG전자 그램 20년형 15인치i5", image : "https://d3jfjcd8dl9mjz.cloudfront.net/vyS3iD_l20TsdFjkwR5znedfOc0=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200306/071446-3zWZ1v8NBH.jpeg" , price : 1320000 ,review:8,gpa : 3.7},
        {name : "삼성전자 노트북9 Always 19년형 15인치 i7 MX150", image : "https://d3jfjcd8dl9mjz.cloudfront.net/fpgJ86bRpr2_hVlHxTvb0LR09Nc=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200306/092146-WtmLABt9YE.jpeg" , price : 1140000 ,review:10,gpa : 2.8},
        {name : "삼성전자 노트북9 Always 18년형 13인치 i7", image : "https://d3jfjcd8dl9mjz.cloudfront.net/xEvl0rCSH3ncIoeEuK9h7-GipIU=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200306/091647-kg07kbN5jF.jpeg" , price : 2090000 ,review:2,gpa : 4.3},
      ],
      TV : [
        {name : "LG전자 울트라 HD TV AI 65인치", image : "https://d3jfjcd8dl9mjz.cloudfront.net/EZSnbTnyNPGWwzo76u_1nLTOcrQ=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200706/033251-lGhJrw90B8.jpeg" , price : 1240000 ,review:4,gpa : 4.8},
        {name : "삼성전자 The Sero 43인치", image : "https://d3jfjcd8dl9mjz.cloudfront.net/Ptxm57IHRJYMBqeu_Z0AqRaPfTI=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200707/075045-qsnda4jxzT.jpeg" , price : 1500000 ,review:5,gpa : 4.9},
        {name : "LG전자 올레드 갤러리 TV 55인치", image : "https://d3jfjcd8dl9mjz.cloudfront.net/jSSwZLQrkNbPCXR9F64XzapJHnY=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200707/073919-anA50fMwgw.jpeg" , price : 2530000 ,review:7,gpa : 4.4},
        {name : "LG전자 올레드 AI 55인치", image : "https://d3jfjcd8dl9mjz.cloudfront.net/kc4RehKPUwyrnB62dx2qyf4HZtY=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200707/020510-VjVxLzcFKI.jpeg" , price : 1840000 ,review:3,gpa : 3.8},
        {name : "삼성전자 QLED 4K 65인치", image : "https://d3jfjcd8dl9mjz.cloudfront.net/obwq3fSFwX3dup9GJfxku05UGEU=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200707/061620-OwLcJ4b0U9.jpeg" , price : 2260000 ,review:13,gpa : 4.1},
        {name : "삼성전자 The Serif 49인치", image : "https://d3jfjcd8dl9mjz.cloudfront.net/-iT2A1o2k4c5QfLOTKblw8pjIMU=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200707/080132-Vb9Uf3ijOl.jpeg" , price : 1660000 ,review:12,gpa : 4.2},
        {name : "삼성전자 QLED 4K 49인치", image : "https://d3jfjcd8dl9mjz.cloudfront.net/-J4MtEOE01RDau7iiv63y6aZ-xE=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200707/062641-YzHFD2NaOs.jpeg" , price : 710000 ,review:10,gpa : 4.3},
        {name : "LG전자 울트라 HD TV AI 55인치", image : "https://d3jfjcd8dl9mjz.cloudfront.net/e7IoBn7rcAkTm4nrpIa-IpAOFXE=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200706/032614-pXfhXIhNp1.jpg" , price : 1100000 ,review:5,gpa : 2.8},
        {name : "LG전자 울트라 HD TV AI 75인치", image : "https://d3jfjcd8dl9mjz.cloudfront.net/5wEKuIxQkZ990wF9CrXyJIcrBw4=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200706/021541-tT8g1VhTPO.jpeg" , price : 1950000 ,review:2,gpa : 3.8},
        {name : "삼성전자 Crystal UHD 55인치", image : "https://d3jfjcd8dl9mjz.cloudfront.net/odoU341r5eSjQPsWdlZEpeciSyU=/200x200/s3.ap-northeast-2.amazonaws.com/ggulreview-uploads/images/any/200706/080448-Ef5jPCi7BE.jpeg" , price : 750000 ,review:7,gpa : 4.0},
      ],
      view : "NoteBook",
    }
  }
  searchBook = () => {
    window.location.href="/search?";
  }
  update_view = (data) => {
    this.setState({
      view : data
    })
  }

 componentDidMount(){

 }

  render(){
    return(
      <div id="App_wrap">
        <BrowserRouter>
            <div className="Search_product">
                <input className="Search" placeholder="제품명 혹은 모델 명으로 검색하세요"></input>
                <div className="Search_icon">
                    <img src={Search_Icon} onClick={this.searchBook}></img>
                </div>
            </div>
          <Routes>
              <Route exact path="/" element={<Home
                NoteBook = {this.state.NoteBook}
                TV = {this.state.TV}
                update_view = {this.update_view}
              />}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/personal_prodcut" element={<Personal_Prodcut
                view = {this.state.view}
              />}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;