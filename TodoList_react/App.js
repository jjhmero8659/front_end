import React ,{Component} from "react";
import "./App.css";

import List from "./Components/List.js"
import Input from "./Components/Input.js"

class App extends Component{
  
  constructor(props){
    super(props);

    this.state = { 
      Todo_List : [],
      next_id : 1, 
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
  }

  Del_list = (num) =>{
    
    const filter_List = this.state.Todo_List.filter(
      (data) => 
        (data.num != num)
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

  Upt_list = (num,schedule) => {
    var update_Obj = {num : num, today : schedule};
    var update_list = this.state.Todo_List.map(
      (data) => (data.num == num) ? ({...data,...update_Obj}) : (data)
    )

    this.setState({
      Todo_List : update_list,
    })
  }

  Delete_all = () => {
    this.setState({
      Todo_List : [],
      next_id : 1, 
    })
  }


  render(){
    const result = this.state.Todo_List.map(
      (data,index) => (<List
          key = {index}
          num = {data.num}
          today = {data.today}
          Del_list = {this.Del_list}
          Upt_list = {this.Upt_list}
      />)
    )
    const result_input =  
      <Input
        add_list = {this.add_list}
        Delete_all = {this.Delete_all}
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
