$(function(){
    var Prevent_overlap_pro_li = new Array();
    const product_array = [
        ["Horizon zero dawn Complete","Horizon zero dawn Forbidden West"],
        ["MonsterHunter Normal","MonsterHunter Iceborn","MonsterHunter Rise"]
    ]
    const price_array = [
        ["0","0"],
        ["0","0","0"]
    ]
    const product_count = [
        ["35000","47000"],
        ["22000","35000","53000"]
    ]
    const img_src_arr = ["../images/Horizon.jpeg","../images/MONSTER_Iceborn.jpeg"]
    var total_price = 0,  pro_id_count = 0;;
    var row ,col;

    $(".gnb>li>a").click( // slide가 열고 닫히는 형태입니다.
        function(e){
            e.preventDefault();
            
            $(this).parents(".gnb").find(".sub").slideToggle(200,
                function(){
                    $(this).parents(".gnb").children("li").find("a").toggleClass("special"); //a 에 special이 있다면 ::before 형태의 화살표 모양 content 가 바뀝니다.
                }    
            );
        }
    )

    $(".section1 .sub a").click(
        function(e){
            e.preventDefault();
            // alert("click_sub")
            var gnb_a = $(this).parents(".gnb").children("li").find("a").text();    //자기 부모 위치의  gnb값을 sub와 교체
            var sub_a = $(this);    //sub자신
            var tmp = $(this).text();   //sub에 담겨진 text

            $(this).parents(".gnb").children("li").find("a").text($(this).text()); //swap
            $(this).text(gnb_a); //swap
            $(this).parents(".gnb").children("li").find("a").removeClass("special");
            $(this).parents(".sub").slideToggle(200,    //sub를 slide up, down
                function(){

                    $(this).find("a").each( //swap 에 제품명 이 포함된다면 해당 li는 hide
                        function(index,node){
                            if($(node).text()=="제품명"){
                                $(node).hide(); //sub하위의 a가 제품명의 text를 가진다면 
                                $(".transparency").css({"display":"none"}); // 가림막 제거
                                
                                sec1_value_delivery();    //section2 변화
                            }
                        }
                    )
                }    
            );

            
        }

        

        
    )

    function sec1_value_delivery(){

        if($(".section1 .gnb>li>a").text() == "Horizon zero dawn"){ //첫번째 section 의 text가 horizon이라면?
            row = 0;
            console.log(img_src_arr[row])
            $(".img_wrap img").attr({"src":img_src_arr[row]});

            create_Dom();
        }
        else{ //첫번째 section 의 text가 Monster 이라면?
            row = 1;
            $(".img_wrap img").attr({"src":img_src_arr[row]});
            create_Dom();
        }

    }

    function create_Dom(){
        $("#sec2_sub").empty(); //원래 위치했던 section2 sub의 하위를 모두 제거
        $(".section2>.gnb>li>a").text("Edition") //section2 의 gnb a값을 Edition 으로 초기화
            for(var i=0; i<product_array[row].length; i++){
                var doc_a_text = document.createTextNode(product_array[row][i]);
                
                var doc_a = document.createElement("a");
                doc_a.setAttribute("href","javascript:void(0)"); //Dom a는 href = "#" 이 불안정?? , 대체
                doc_a.onclick = function(){
                    var tmp = this.textContent; //스왑 하기위한 임시 변수

                    if($(".section2 .gnb>li>a").text() == "Edition"){ //"Edition 을 hide"
                        $(".section2 .gnb>li>a").text(tmp);
                        this.style.display = "none";
                    }
                    else{
                        this.textContent = $(".section2 .gnb>li>a").text();
                        $(".section2 .gnb>li>a").text(tmp); 
                    }

                    total_product_price();
                    add_product_list(this);

                    $("#sec2_sub").slideUp(200, //슬라이드 up , 닫아주기
                        function(){
                            $(this).parents(".gnb").children("li").find("a").removeClass("special"); //클래스 제거로 인한 화살표 아이콘 변경
                        }    
                    );
                    
                }
                doc_a.appendChild(doc_a_text);

                var doc_li = document.createElement("li");
                doc_li.appendChild(doc_a);

                document.getElementById("sec2_sub").appendChild(doc_li);
            }
    }

    function total_product_price(){
        for(var i=0; i<product_array[row].length; i++){
            if($(".section2 .gnb>li>a").text() == product_array[row][i]){
                col = i;
                total_price += Number(price_array[row][col]);
            }
        }
        $(".Total_price_text").empty().append(total_price + "원"); //가격계산
    }

    function add_product_list(e){
        var local_row = row;
        var local_col = col;
        pro_id_count++;
        
        for(var i=0; i<Prevent_overlap_pro_li.length; i++){ // 중복방지
            if(product_array[local_row][local_col] == Prevent_overlap_pro_li[i]){
                return 0;
            }
        }

        var doc_pro = document.createElement("div");
        doc_pro.setAttribute("id","num"+product_count);
        doc_pro.className = "product";

        var doc_span_text = document.createTextNode(product_array[local_row][local_col]);
        var doc_span = document.createElement("span");
        doc_span.appendChild(doc_span_text);
        Prevent_overlap_pro_li.push(product_array[local_row][local_col]); // 중복방지

        var doc_count_text = document.createTextNode(price_array[local_row][local_col]);
        var doc_count_div = document.createElement("div");
        doc_count_div.className = "count";
        doc_count_div.appendChild(doc_count_text);


        var doc_add_text = document.createTextNode("+");
        var doc_add_a = document.createElement("a");
        doc_add_a.setAttribute("href","javascript:void(0)");
        doc_add_a.onclick = function(){
            total_price =  total_price + Number(product_count[local_row][local_col]);
            price_array[local_row][local_col]++;
            doc_count_text.textContent = price_array[local_row][local_col];
            $(".Total_price_text").empty().append(total_price + "원");
        }
        doc_add_a.appendChild(doc_add_text);
        var doc_add_div = document.createElement("div");
        doc_add_div.className = "add";
        doc_add_div.appendChild(doc_add_a);



        var doc_remove_text = document.createTextNode("-");
        var doc_remove_a = document.createElement("a");
        doc_remove_a.setAttribute("href","javascript:void(0)");
        doc_remove_a.className = "remove";
        doc_remove_a.onclick = function(){
            if(price_array[local_row][local_col] > 0){
                total_price = total_price - Number(product_count[local_row][local_col]);
                price_array[local_row][local_col]--;
                doc_count_text.textContent = price_array[local_row][local_col];
                $(".Total_price_text").empty().append(total_price + "원");
            } 
        }
        doc_remove_a.appendChild(doc_remove_text);
        var doc_remove_div = document.createElement("div");
        doc_remove_div.className = "remove";
        doc_remove_div.appendChild(doc_remove_a);

        doc_pro.appendChild(doc_span);
        doc_pro.appendChild(doc_count_div);
        doc_pro.appendChild(doc_add_div);
        doc_pro.appendChild(doc_remove_div);

        document.getElementById("put_list_li").appendChild(doc_pro);
    }
})
