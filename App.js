import logo from './logo.svg';
import './App.css';
import React,{Component} from "react";
import Person from './components/person.js';
import Car from './components/Car.js';
import Movie from './components/Movie.js';

import imgA from "./images/img_1.jpg";
import imgB from "./images/img_2.jpg";
import imgC from "./images/img_3.jpg";
import movieA from "./images/다운로드.jpg"
import CarA from "./images/genesis.jpg";

class App extends Component{
  constructor(props){ //App 생성자 정의
    super(props) // 상위 클래스 생성자 호출
    // this.state={
    //   title:"App컴포넌트",
    //   name:"이름",
    //   age:20,
    //   height:180
    // }
    this.state = {
      title:"App컴포넌트",
      personList:[
        {imgSrc:imgA,name:"이름1",age:22,height:185},
        {imgSrc:imgB,name:"이름2",age:23,height:186},
        {imgSrc:imgC,name:"이름3",age:24,height:187}
      ],
      Car_List:[
        {imgSrc :CarA, name:"제네시스",fuel:50,speed:185},
        {name:"볼보",fuel:23,speed:186},
        {name:"아우디",fuel:24,speed:187}
      ],
      Movie:[
        {imgSrc:movieA, name:"avatar",horoscope:5,Audience_rating:4.5}
      ]
    }
    this.AppInfo = this.AppInfo.bind(this); //화살표 함수가 아닌경우
    //주소할당 - 제대로된 주소 를 할당한다
  }

  AppInfo (){
    alert("AppInfo");
    this.state.title = "aaa" // render 자동 호출 x

    // this.setState({  //render 자동 호출
    //   title:"aaa"
    // })
  }

  AppInfo2 = () => { //화살표 함수인 경우에는 바인드 안해줘도 됨
    this.setState({  //render 자동 호출
      title:"info222"
    })
  }

  render(){
    return(
      <div id='App'>
        <button onClick={this.AppInfo}>클릭1</button>
        <button onClick={this.AppInfo2}>클릭2</button>
        {this.state.title}
        <Person 
          imgSrc={this.state.personList[0].imgSrc}
          name={this.state.personList[0].name}
          age={this.state.personList[0].age}
          height={this.state.personList[0].height}
        >
        </Person>
        <Car 
          imgSrc={this.state.Car_List[0].imgSrc}
          name={this.state.Car_List[0].name}
          star={this.state.Car_List[0].fuel}
          speed={this.state.Car_List[0].speed}
        >
        </Car>
        <Movie 
          imgSrc={this.state.Movie[0].imgSrc}
          name={this.state.Movie[0].name}
          horoscope={this.state.Movie[0].horoscope}
          Audience_rating={this.state.Movie[0].Audience_rating}
        >
        </Movie>
      </div>
    );
  }
}

export default App;
