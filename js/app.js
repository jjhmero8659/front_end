$(function(){
    var count = 1;
    var img_src = new Array("./images/slide1.jpg","./images/slide2.jpg","./images/slide3.jpg");

    var id = setInterval(img_fade,2000);
    $(".gnb>li").hover(
        function(){
            $(this).find(".lnb").slideDown(300);
        },
        function(){
            $(".lnb").stop().slideUp(300);
        }
    )

    function img_fade(){
        $("#front img").attr({"src":img_src[count%img_src.length]});
        $("#front").stop().animate({"opacity":"1"},1000,
            function(){
                $("#back img").attr({"src":img_src[count%img_src.length]});
                $("#front").css({"opacity":"0"});
                count++;
            }
        )
    }

    $(".pop a").click(
        function(e){
            e.preventDefault();
            $("#popup").css({"display":"block"});
        }
    )

    $("#closeBtn").click(
        function(){
            $("#popup").css({"display":"none"});
        }
    )


})