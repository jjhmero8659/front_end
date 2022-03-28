import React , {Component, createElement} from "react";
import "./css/product.css";
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
            $(".gnb>li>a").click(
                function(){
                    $(this).parents(".gnb").find(".sub").slideToggle(100,
                        function(){
                            $(".transparency").css({"display":"none"});
                            // console.log($(this).parents(".gnb").find(".visible").text());
                        }    
                    );
                }
            )
            

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
                                var sub_txt = Product_json[i].Edition[z];

                                if(gnb_txt == "제품 Edition"){
                                    $(".Select_detail").find(".visible").text(sub_txt)
                                    $(this).remove();
                                }
                                else{
                                    $(this).text(gnb_txt)
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
                                <ul className="sub" id="Edition_sub">
                                    <li><a>Elden_Ring</a></li>
                                    <li><a>Dark_soul</a></li>
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