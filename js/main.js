$(document).ready(function(){

    $(function(){

        $(window).scroll(function(){ 
            $("header").addClass('scroll');
    
            if($(window).scrollTop() == 0){ 
                $("header").removeClass('scroll');
            }
            
        });
    });

    $(".dp1").mouseenter(function(){
        $(".sub1").stop().slideDown();
    });
    $("#nav"),$("#sub_menu").mouseleave(function(){
        $(".sub1").stop().slideUp();
    });
    $(".dp2",).mouseenter(function(){
        $(".sub3").stop().slideDown();
    });
    $("#nav"),$("#sub_menu").mouseleave(function(){
        $(".sub3").stop().slideUp();
    });
    $(".dp3").mouseenter(function(){
        $(".sub3").stop().slideDown();
    });
    $("#nav"),$("#sub_menu").mouseleave(function(){
        $(".sub3").stop().slideUp();
    });
    $(".dp4").mouseenter(function(){
        $(".sub4").stop().slideDown();
    });
    $("#nav"),$("#sub_menu").mouseleave(function(){
        $(".sub4").stop().slideUp();
    });
    $(".dp5").mouseenter(function(){
        $(".sub5").stop().slideDown();
    });
    $("#nav"),$("#sub_menu").mouseleave(function(){
        $(".sub5").stop().slideUp();
    });
    $(".dp6").mouseenter(function(){
        $(".sub6").stop().slideDown();
    });
    $("#nav"),$("#sub_menu").mouseleave(function(){
        $(".sub6").stop().slideUp();
    });

    $("aside button").click(function(){
        $("aside").toggleClass('open');

        if($("aside").hasClass("open")) {
            $("aside").animate({left:0},400,'swing');
            $('aside button').find("img").attr({'src':'img/close.png'})
        } else{
            $('aside').animate({left:'-100px'},200,'swing');
            $('aside button').find("img").attr({'src':'img/open.png'})
        }
    });
  
    $('.sliders').slick({
        autoplay:true,
        autoplaySpeed:2000,
        arrows:true,
    });

    $('.notice_slide').slick({
        autoplay:true,
        autoplaySpeed:2000,
        arrows:true,
    });

    
    $('.center').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
            }
        }
        ]
    });
          
          

});

