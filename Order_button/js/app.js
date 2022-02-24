$(function(){
    const product_array = [
        ["Horizon zero dawn Complete","Horizon zero dawn Forbidden West"],
        ["MonsterHunter Normal","MonsterHunter Iceborn","MonsterHunter Rise"]
    ]
    const price_array = [
        ["35000","47000"],
        ["22000","35000","53000"]
    ]
    var total_price = 0;
    var row ,col;
    // console.log(product_array[1].length)
    $(".gnb>li>a").click(
        function(e){
            e.preventDefault();
            
            $(this).parents(".gnb").find(".sub").slideToggle(200,
                function(){
                    $(this).parents(".gnb").children("li").find("a").toggleClass("special");
                }    
            );
        }
    )

    $(".sub a").click(
        function(e){
            e.preventDefault();
            alert("click_sub")
            var gnb_a = $(this).parents(".gnb").children("li").find("a").text();    //자기 머리 위의 gnb갑을 sub와 교체
            var sub_a = $(this);    //sub자신
            var tmp = $(this).text();   //sub에 담겨진 text

            $(this).parents(".gnb").children("li").find("a").text($(this).text()); //swap
            $(this).text(gnb_a); //swap
            $(this).parents(".gnb").children("li").find("a").removeClass("special");
            $(this).parents(".sub").slideToggle(200,    //sub를 slide up, down
                function(){

                    $(this).find("a").each( //swap 에 제품명 or Edition이 포함된다면 해당 li는 hide
                        function(index,node){
                            if($(node).text()=="제품명" || $(node).text()=="Edition"){
                                $(node).hide();
                                $(".transparency").css({"display":"none"});
                                if($(this).parents(".gnb").parent("div").attr("class") == "section2"){
                                    sec2_value_delivery();
                                }
                                else if($(this).parents(".gnb").parent("div").attr("class") == "section1"){
                                    
                                    // sec1_value_delivery() // sec 2 클릭 작동 에러 
                                }
                            }
                        }
                    )
                }    
            );

            
        }
    )

    function sec1_value_delivery(){
        alert("hdwqdwqi")
        // console.log($(".section1 .gnb>li>a").text());
        if($(".section1 .gnb>li>a").text() == "Horizon zero dawn"){
            row = 0;
            alert("for Horizon")
            $("#sec2_sub").empty();
            for(var i=0; i<product_array[row].length; i++){
                var doc_a = document.createElement("a");
                doc_a.setAttribute("href","#");
                var doc_a_text = document.createTextNode(product_array[row][i]);
                doc_a.appendChild(doc_a_text);

                var doc_li = document.createElement("li");
                doc_li.appendChild(doc_a);

                document.getElementById("sec2_sub").appendChild(doc_li);
            }

        }
        else{
            row = 1;
            alert("for monster")
            $("#sec2_sub").empty();
            for(var i=0; i<product_array[row].length; i++){
                var doc_a = document.createElement("a");
                doc_a.setAttribute("href","#");
                var doc_a_text = document.createTextNode(product_array[row][i]);
                doc_a.appendChild(doc_a_text);

                var doc_li = document.createElement("li");
                doc_li.appendChild(doc_a);

                document.getElementById("sec2_sub").appendChild(doc_li);
            }
        }

        console.log("fin")
    }

    function sec2_value_delivery(){
        $(".put_list").append($(".section2>.gnb>li>a").text()+"<br>");
        
    }
})
