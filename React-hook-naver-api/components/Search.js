import React, {useState,useEffect} from "react";
import "../css/Search.css";
import queryString from "query-string";
import axios from "axios";
import Posts from "./Posts.js";
import PagiNation from "./PagiNation";

function Search(){
  const [search_text,set_text] = useState("");
  const [book_list,set_book_List] = useState([]);

  const [postPerPage,set_postPerPage] = useState(3);
  const [currentPage,set_currentPage] = useState(1);


  useEffect(() => {
    console.log("userEffect")
    console.log(window.location)
    const query = queryString.parse(window.location.search);
    const text = query.text;
    console.log("추출한 검색어", text)
    set_text(
      text
    )
  }, []);

  useEffect(
    ()=>{
      get_api();
    }
  ,[search_text])
  
  const updata_current = (data) => {
    set_currentPage(data)
  }


  const get_api = async() => {
    console.log("get_api",search_text)
    const res = await axios({
      method :"get",
      url : `/v1/search/book.json?query=${search_text}`,
      dataType:"json", //json타입으로 받겠다
      headers : {
        "X-Naver-Client-Id" : "fEYF6QIDOLt0OFjbgjRt",
        "X-Naver-Client-Secret":"ytaNRQnkv7"
      }
    })
    console.log(res.data.items)
    set_book_List(
      res.data.items
    )
  }



  return(
    <div id="Search_wrap">
      <Posts
        book_list = {book_list}
        currentPage = {currentPage}
        postPerPage = {postPerPage}
      />
      <PagiNation
        Len = {book_list.length}
        currentPage = {currentPage}
        postPerPage = {postPerPage}
        updata_current = {updata_current}
      />
    </div>
  )
}

export default Search;