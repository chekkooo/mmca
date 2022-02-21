$(document).ready(function(){

    $('.center').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
      });

      $('.thumb').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
      });

      $('.notice_slide').slick({
        autoplay:true,
        autoplaySpeed:1500,
        arrows:true,
    });


    $(".h_menu button").click(function(){
        $(".h_menu").toggleClass('open');

        if($(".h_menu").hasClass("open")) {
            console.log("튀어나와라!!");
            $(".h_menu").animate({left:'0px'},400,'swing');
        } else{
            $('.h_menu').animate({left:'-300px'},200,'swing');
        }
    });

    
})