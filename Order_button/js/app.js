$(function(){
    
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
            console.log($(this).parent().index());
            var gnb_a = $(this).parents(".gnb").children("li").find("a").text();
            var sub_a = $(this);
            var tmp = $(this).text();

            $(this).parents(".gnb").children("li").find("a").text($(this).text());
            $(this).text(gnb_a);

            $(this).parents(".sub").slideToggle(200,
                function(){
                    $(this).find("a").each(
                        function(index,node){
                            if($(node).text()=="제품명"){
                                $(node).hide();
                            }
                        }
                    )
                }    
            );
        }
    )
})
