import React , {Component, createElement} from "react";
import "./css/product.css";
import arrow_up from "./img/arrow_up.jpg";
import arrow_down from "./img/arrow_down.jpg";
import jquery from 'jquery';
import $ from 'jquery';

class Product extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            Product : this.props.product,
            input_value : 1,
        }
    }

    

    componentDidMount(){
        var Product_json = this.state.Product
        
        $(function(){  
            console.log(Product_json)
            $(".gnb>li>a , .arrow").click(
                function(){
                    change_arrow(this);
                    $(this).parents(".gnb").find(".sub").slideToggle(100,
                        function(){
                            // if($(".sub").css("display") == "block"){
                            //     $(".arrow").find("img").attr({src: "{arrow_up}"});
                            // }
                            // else{
                            //     $(".arrow").find("img").attr({src: "{arrow_up}"});
                            // } ????
                            // change_arrow(this);
                        }    
                    );
                }
            )

            function change_arrow(pointer){
                var which = $(pointer).parents(".Select_main_product")
                if(which.length == 1){
                    var doc_img = document.getElementsByClassName("main_inner_arrow")[0] 
                }
                else{
                    which = $(pointer).parents(".Select_detail")
                    var doc_img = document.getElementsByClassName("detail_inner_arrow")[0] 
                }
                
                // console.log(which.find(".sub").css("display"));
                if(which.find(".sub").css("display") == "none"){
                    doc_img.setAttribute("src",arrow_up);
                }
                else{
                    doc_img.setAttribute("src",arrow_down);
                }
            }
            

            $(".Select_main_product .sub a").click(
                function(){
                    change_text(this);
                    $(".transparency").css({"display":"none"});
                }
            )

            
            function change_text(pointer){
                var gnb_txt = $(pointer).parents(".gnb").find(".visible").text();
                var sub_txt = $(pointer).text();
                 
                if(gnb_txt == "제품 main 선택"){
                    $(pointer).parents(".gnb").find(".visible").text(sub_txt)
                    $(pointer).remove();
                }
                else{
                    $(pointer).text(gnb_txt)
                    $(pointer).parents(".gnb").find(".visible").text(sub_txt)
                }
                
                // check_product();
                
                $(".sub").slideUp(200,
                    function(){
                        $(".Select_detail").find(".sub").empty();
                        $(".Select_detail").find(".visible").text("제품 Edition");
                        create_Element();
                    }
                );
            }
            


            

            function create_Element(){
                for(var i=0; i<Product_json.length; i++){
                    if($(".Select_main_product").find(".visible").text() == Product_json[i].name){
                        for(var z=0; z< Product_json[i].Edition.length; z++){
                            var doc_text = document.createTextNode(Product_json[i].Edition[z]);
                            var doc_a = document.createElement("a");
                            
                            doc_a.onclick = function(){
                                var gnb_txt = $(".Select_detail").find(".visible").text();
                                var sub_txt = this.textContent;

                                if(gnb_txt == "제품 Edition"){
                                    $(".Select_detail").find(".visible").text(sub_txt)
                                    this.style.display = "none";
                                }
                                else{
                                    this.textContent = gnb_txt;
                                    $(".Select_detail").find(".visible").text(sub_txt)
                                }
                                
                                $(".sub").slideUp(200);
                            }
                            var doc_li = document.createElement("li");
                    
                            doc_a.appendChild(doc_text);
                            doc_li.appendChild(doc_a);
                            document.getElementById("Edition_sub").appendChild(doc_li);
                        }
                        break;
                    }
                }
            }
            
        })
    }
    input_value = (e) =>{
        this.setState({
            input_value : e.target.value
        })
    }

    KeyPress = (e) =>{
        if(e.key == "Enter"){
          console.log("Enter")
        }
    }
    

    render(){
        return(
            <div id="Product_wrap">
                <div className="Select_product">
                    <div className="Select_main_product">
                        <ul className="gnb">
                            <li>
                                <a className="visible">제품 main 선택</a>
                                <div className="arrow">
                                        <img className="main_inner_arrow" src={arrow_down}></img>
                                </div>
                                <ul className="sub" id="main_sub">
                                    <li><a>Elden_Ring</a></li>
                                    <li><a>Dark_soul</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="Select_detail">
                        <ul className="gnb">
                            <li>
                                <a className="visible">제품 Edition</a>
                                <div className="arrow">
                                        <img className="detail_inner_arrow" src={arrow_down}></img>
                                </div>
                                <ul className="sub" id="Edition_sub">
                                    <li><a>Elden_Ring</a></li>
                                    <li><a>Dark_soul</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="bascket_wrap">
                        <div className="bascket_div">
                            <div className="bascket_title">
                                <p>Elden_Ring</p>
                            </div>
                            <div className="Additional_function">
                                <div id="quantity" className="product_add"></div>
                                <input type="text" value={this.state.input_value} onChange={this.input_value} onKeyPress={this.KeyPress}></input>
                                <div id="quantity" className="product_subtract"></div>
                                <div className="price">64800원</div>
                                <div className="delete_product"></div>
                            </div>
                        </div>
                    </div>
                    <div className="transparency"></div>
                </div>
            </div>
        )
    }
}

export default Product;