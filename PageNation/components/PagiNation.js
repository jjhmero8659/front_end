import React , {Component} from "react";
import "./css/PagiNation.css";


class PagiNation extends Component{
  constructor(props){
    super(props);

    this.state = {
      posts:[]
    }
  }
  pageClick = (page) =>{
    alert("hi : " + page)
    this.props.setCurrentPage(page)
  }

  render(){
    let pageNumbers = [] // 동적 생성
    // 10/3 => 3.3
    // Math.celi(3.3) -> 4
    for(var i=1; i<=Math.ceil(this.props.total_Posts / this.props.postsPerPage); i++){
        pageNumbers.push(i);
    }
    const result=pageNumbers.map(
        (page,index) => (<div id="page" key={index} onClick={()=>this.pageClick(page)}>{page}</div>)
    )
    return(
      <div id="PagiNation_wrap">
          <div>
            페이지네이션(페이지 번호 목록) : 
          </div>
          <div>
              페이지당 글 갯수 : {this.props.postsPerPage}
          </div>
          <div>
              총 글 갯수 : {this.props.total_Posts}
          </div>
          <div>
              {result}
          </div>
      </div>
    )
  }
}

export default PagiNation;
