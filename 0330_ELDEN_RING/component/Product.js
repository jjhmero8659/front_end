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
            Product : this.props.product
        }
    }

    

    componentDidMount(){
        var Product_json = this.state.Product
        
        $(function(){  
            console.log(Product_json)
            $(".gnb>li>a , .arrow").click(
                function(){
                    $(this).parents(".gnb").find(".sub").slideToggle(100,
                        function(){
                            $(".transparency").css({"display":"none"});
                            // if($(".sub").css("display") == "block"){
                            //     $(".arrow").find("img").attr({src: "{arrow_up}"});
                            // }
                            // else{
                            //     $(".arrow").find("img").attr({src: "{arrow_up}"});
                            // } ????
                            change_arrow();
                            
                        }    
                    );
                }
            )

            function change_arrow(){
                var doc_img = document.getElementsByClassName("img")[0]
                if($(".sub").css("display") == "block"){
                    doc_img.setAttribute("src",arrow_up)
                 }
                else{
                    doc_img.setAttribute("src",arrow_down)
                 } 
            }
            

            $(".Select_main_product .sub a").click(
                function(){
                    change_text(this);
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
                        var doc_img = document.getElementsByClassName("img")[0] //??????????????????
                        doc_img.setAttribute("src",arrow_down) //??????????????????
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
                            var doc_img = document.getElementsByClassName("img")[0]
                            doc_a.onclick = function(){
                                console.log(arrow_down)
                                var gnb_txt = $(".Select_detail").find(".visible").text();
                                var sub_txt = this.textContent;//배열 값 증가?
                                //배열 값 증가?
                                if(gnb_txt == "제품 Edition"){
                                    $(".Select_detail").find(".visible").text(sub_txt)
                                    this.style.display = "none";
                                }
                                else{
                                    this.textContent = gnb_txt;
                                    $(".Select_detail").find(".visible").text(sub_txt)
                                }
                                doc_img.setAttribute("src",arrow_down) //??????????????????
                                $(".sub").slideUp(200,
                                    function(){}    
                                );
                            }
                            var doc_li = document.createElement("li");
                    

                            doc_a.appendChild(doc_text);
                            doc_li.appendChild(doc_a);
                            document.getElementById("Edition_sub").appendChild(doc_li);
                            
                        }
                        break;
                    }
                }
                // console.log($(".Select_main_product").find(".visible").text() == )
            }
            
        })
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
                                        <img className="img" src={arrow_down}></img>
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
                                        <img className="img" src={arrow_down}></img>
                                </div>
                                <ul className="sub" id="Edition_sub">
                                    <li><a>Elden_Ring</a></li>
                                    <li><a>Dark_soul</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="bascket">

                    </div>
                    <div className="transparency"></div>
                </div>
            </div>
        )
    }
}

export default Product;