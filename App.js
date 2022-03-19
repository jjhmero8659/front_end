import "./App.css";
import React , {Component} from "react";
import axios from "axios";
import Person from "./components/Person.js";


class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      person_list : [],
    }
  }

  selectAll = async() =>{
    const res = await axios.get("/api/get/personAll")
    console.log(res.data.db_data);
    this.setState({
      person_list : res.data.db_data
    })
    //응답 객체에서 배열 뽑아서 우리쪽 state 넣어줌
  }

  selectWhere = async() =>{
    const res = await axios.get("/api/get/personWhere"+"정채연")
    console.log(res.data.db_data);
    this.setState({
      person_list : res.data.db_data
    })
  }

  insertInto = async() =>{
    const res = await axios.post(`/api/add/person${'김연아'}&${20}&${176.7}`)
    console.log(res.data.info)
    //응답 객체에서 배열 뽑아서 우리쪽 state 넣어줌
  }

  updateSet = async() =>{
    const res = await axios.patch(`/api/update/person${'김연아'}&${168.5}`)
    console.log(res.data.info)
  }

  deleteWhere1 = async() => {
    const res = await axios.delete(`/api/update/person${'김철수'}`)
    console.log(res.data.info)
  }

  deleteWhere2 = async() => {
    const res = await axios.delete(`/api/update/person${'김연아'}`)
    console.log(res.data.info)
  }



  render(){
    const result = this.state.person_list.map(
      data => 
        <Person name = {data.name}
          age = {data.age}
          height = {data.height}/>
    )
    return(
      <div>
        <button onClick={this.selectAll}>요청1(select * from person)</button>
        <button onClick={this.selectWhere}>요청2(select * from person where name = "정채연")</button>
        <button onClick={this.insertInto}>요청3(Insert into Person values("김철수",23,179.7))</button>
        <button onClick={this.updateSet}>수정(Update set height=168.5 where name="김철수")</button>
        <button onClick={this.deleteWhere1}>제거,김철수(delete from person where name="김철수")</button>
        <button onClick={this.deleteWhere1}>제거,김연아(delete from person where name="김연아")</button>
        {result}
      </div>
    )
  }
}

export default App;
