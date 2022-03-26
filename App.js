import React ,{Component} from "react";
import "./App.css";

import List from "./Components/List.js"
import Input from "./Components/Input.js"

class App extends Component{
  
  constructor(props){
    super(props);

    this.state = { 
      Todo_List : [
        {num:1,today:"코딩"},
      ],
      next_id : 2
    }
  }
  add_list = (input_today) =>{
    var List_Obj = {
      num : this.state.next_id,
      today : input_today
    }
    this.setState({
      Todo_List : this.state.Todo_List.concat(List_Obj),
      next_id:this.state.next_id+1
    })

    // this.setState({
    //   next_id:this.state.next_id+1
    // })

  }

  Del_list = (num) =>{
    
    const filter_List = this.state.Todo_List.filter(
      (data) => (data.num != num)
    )
    for(var i=0; i<filter_List.length; i++){
      if(filter_List[i].num > num){
        filter_List[i].num--;
      }
    }
    
    this.setState({
      Todo_List : filter_List,
      next_id:this.state.next_id-1
    })
  }


  render(){
    const result = this.state.Todo_List.map(
      (data,index) => (<List
          key = {index}
          num = {data.num}
          today = {data.today}
          Del_list = {this.Del_list}
      />)
    )
    const result_input =  
      <Input
        add_list = {this.add_list}
    />
    

    return(
      <div id="App_Class_wrap">
        <header>Todo_List</header>
        {result_input}
        {result}
      </div>
    )
  }
}

export default App;
