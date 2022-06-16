$(document).ready(function(){
  $('.mobile__btn').on('click', function(){
    $('.mobile').toggleClass('mobile__active');
    $('.header').toggleClass('header__active');
    // $('.header__window').toggleClass('header__window-active')
  }); 
});

$(document).ready(function(){
  $('.popup__close').on('click', function(){
    $('.popup').toggleClass('popup__active');
    $('.fixed').removeClass('fixed__block');
    // $('.header__window').toggleClass('header__window-active')
  });
});

$(document).ready(function(){
  $('.main__button').on('click', function(){
    $('.popup').toggleClass('popup__active');
    $('.fixed').addClass('fixed__block');
    // $('.header__window').toggleClass('header__window-active')
  });
});

$(document).ready(function(){
  $('.main__button-mobile-1').on('click', function(){
    $('.popup').toggleClass('popup__active');
    $('.fixed').addClass('fixed__block');
    // $('.header__window').toggleClass('header__window-active')
  });
});

$(document).ready(function(){
  $('.fixed__btn').on('click', function(){
    $('.popup').toggleClass('popup__active');
    $('.fixed').addClass('fixed__block');
    // $('.header__window').toggleClass('header__window-active')
  });
});

$(document).ready(function(){
  $('.header__btn').on('click', function(){
    $('.popup').toggleClass('popup__active');
    $('.fixed').addClass('fixed__block');
    // $('.header__window').toggleClass('header__window-active')
  });
});


$(document).ready(function() {

  //E-mail Ajax Send
  $("popup__form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});