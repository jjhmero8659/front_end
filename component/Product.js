import React , {Component} from "react";
import "./css/product.css";
import jquery from 'jquery';
import $ from 'jquery';

class Product extends Component{
    
    constructor(props){
        super(props)
    }

    componentDidMount(){
        $(function(){
            var name = ["Elden_Ring","Dark_Souls"]
            var Elden_Edition = ["normal","Delux"]
            var Darksoul_Edition = ["normal","Delux"]
            var price = ["11111","222222"]
            $(".gnb>li>a").click(
                function(){
                    $(this).parents(".gnb").find(".sub").slideToggle(100,
                        function(){
                            $(".transparency").css({"display":"none"});
                            // console.log($(this).parents(".gnb").find(".visible").text());
                            create_Element(this);
                        }    
                    );
                }
            )
            

            $(".Select_main_product .sub a").click(
                function(){
                    
                    
                    
                }
            )

            $(".sub a").click(
                function(){
                    var pointer = this;
                    $(".sub").slideUp(100,
                        function(){
                            if($(this).parents(".Select_main_product").length == 1){
                                $("#Edition_sub").find("li").remove();
                            }
                            change_text(pointer);
                        }    
                    );
                    
                   
                    
                }
            )
            function change_text(pointer){
                if($(pointer).parents(".gnb").find(".visible").text() == "제품 main 선택"){
                    $(pointer).parents(".gnb").find(".visible").text($(pointer).text());
                    $(pointer).remove();
                }
                else{
                    var gnb_a = $(pointer).parents(".gnb").children("li").find("a").text(); //gnb a
                    var sub_a = $(pointer).text();
                    console.log("gnb_a : " + gnb_a)
                    console.log("sub_a : " + sub_a)
                    $(pointer).parents(".gnb").find(".visible").text(sub_a);
                    $(pointer).text(gnb_a);
                }
            }

            function create_Element(pointer){
                
                for(var i=0; i<Elden_Edition.length; i++){
                    var text_node = document.createTextNode(Elden_Edition[i]);
                    var doc_a = document.createElement("a");
                    doc_a.appendChild(text_node);

                    var doc_li = document.createElement("li");
                    doc_li.appendChild(doc_a);

                    var sub = document.getElementById("Element_sub");
                }
            }

            // function change_text(pointer){
            //     if($(pointer).text() == name[0]){
            //         // var sub_a_txt = $(pointer).text();
            //         // $(pointer).parents(".gnb").find(".visible").text(sub_a_txt);
            //     }
            //     else{
                    
            //     }
            // }

            
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
                                <ul className="sub" id="main_sub">
                                    <li><a>Elden_Ring</a></li>
                                    <li><a>Dark_Souls</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="Select_detail">
                        <ul className="gnb">
                            <li>
                                <a className="visible">제품 Edition</a>
                                <ul className="sub" id="Edition_sub">
                                    <li><a>Elden_Ring</a></li>
                                    <li><a>Dark_Souls</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="transparency"></div>
                </div>
                
            </div>
        )
    }
}

export default Product;