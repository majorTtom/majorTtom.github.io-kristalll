$(function(){
  $("a[href^='#']").on('click', function(e){
    var _href = $(this).attr("href");
    $('html,body').stop().animate({ scrollTop: $(_href).offset().top }, 1500);
    e.preventDefault;
  });

});


$(document).ready(function(){
    var servicesS = $('body');

    $(window).scroll(function(){
        var scroll = $(window).scrollTop() + $(window).height();
        var offsetServices = servicesS.offset().top;

        if (scroll > offsetServices) {

            window.addEventListener('scroll', function() {
                var number = pageYOffset - offsetServices;

                if (number > 5550) {
                  $('.gallery__list').removeClass(
                      'gallery__list-active'
                    );   
                } else if (number < 5550) {
                    $('.gallery__list').addClass(
                      'gallery__list-active'
                  );
                } 


                

                console.log(number)
                
            });
        };
        
    })
})


$('.gallery__photo-item').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('gallery__img__active');
})

$('.gallery__content-photo').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('gallery__img__active');
  $('.gallery__content-photo').toggleClass('gallery__item__active');
  $('.gallery__blur').toggleClass('gallery__active');
  $('.entrails').toggleClass('entrails__active');
  $('.gallery__photo-item').toggleClass('active__background');
  $('.gallery').toggleClass('active__background2');
  $('.footer').toggleClass('footer__active');
})



$('.entrails').on('click', function(e){
  e.preventDefault;
  $(this).removeClass('entrails__active');
  $('.gallery__photo-item').removeClass('gallery__img__active');
  $('.gallery__active').removeClass('gallery__active');
  $('.gallery__content-photo').removeClass('gallery__item__active');
  $('.gallery__content-photo').removeClass('gallery__img__active');
  $('.gallery__photo-item').removeClass('active__background');
  $('.gallery').removeClass('active__background2');
  $('.footer').removeClass('footer__active');
})