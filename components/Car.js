import "../css/Car.css"
function Car(props){
    function info(){
        alert("info")
    }
    return(
        <div id="Car_wrap">
            <div className="left_side">
                <img src={props.imgSrc}></img>
            </div>
            <div className="right_side">
                <div>
                    name : {props.name}
                </div>
                <div>
                    star : {props.star}
                </div>
                <div>
                    speed : {props.speed}
                    <button onClick={info}> 버튼 </button>
                </div>
            </div>
        </div>
    ) 
}

export default Car;