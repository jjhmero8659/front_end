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

    $(".section1 .sub a").click(
        function(e){
            e.preventDefault();
            // alert("click_sub")
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
                            if($(node).text()=="제품명"){
                                $(node).hide();
                                $(".transparency").css({"display":"none"});
                                if($(this).parents(".gnb").parent("div").attr("class") == "section2"){ // 작동 x 지워야함
                                    alert("hi") // 작동 x 고치기
                                    sec2_value_delivery();
                                }
                                else if($(this).parents(".gnb").parent("div").attr("class") == "section1"){
                                    
                                    sec1_value_delivery() // sec 2 클릭 작동 에러 
                                }
                            }
                        }
                    )
                }    
            );

            
        }

        

        
    )

    function sec1_value_delivery(){
        // alert("hdwqdwqi")
        // console.log($(".section1 .gnb>li>a").text());
        if($(".section1 .gnb>li>a").text() == "Horizon zero dawn"){
            row = 0;
            // alert("for Horizon")
            create_Dom();

        }
        else{
            row = 1;
            // alert("for monster")
            create_Dom();
        }

    }

    function sec2_value_delivery(){
        $(".put_list").append($(".section2>.gnb>li>a").text()+"<br>");
        
    }

    function create_Dom(){
        $("#sec2_sub").empty();
        $(".section2>.gnb>li>a").text("Edition")
            for(var i=0; i<product_array[row].length; i++){
                var doc_a = document.createElement("a");
                doc_a.setAttribute("href","javascript:void(0)");
                doc_a.onclick = function(){
                    //? this 포인터 넘기는법
                    //? Dom 객체는 jquery 에서 event 적용 x?
                    var tmp = this.textContent;

                    if($(".section2 .gnb>li>a").text() == "Edition"){
                        $(".section2 .gnb>li>a").text(tmp);
                        this.style.display = "none";
                    }
                    else{
                        this.textContent = $(".section2 .gnb>li>a").text();
                        $(".section2 .gnb>li>a").text(tmp); 
                    }
                    $("#sec2_sub").slideUp(200,
                        function(){
                            $(this).parents(".gnb").children("li").find("a").removeClass("special");
                        }    
                    );
                    
                }
                var doc_a_text = document.createTextNode(product_array[row][i]);
                doc_a.appendChild(doc_a_text);

                var doc_li = document.createElement("li");
                doc_li.appendChild(doc_a);

                document.getElementById("sec2_sub").appendChild(doc_li);
            }
    }

    function Dom_click_a(e){
        //? this 포인터 넘기는법
        e.textContent = $(".section2 .gnb>li>a").text();
    }
})
