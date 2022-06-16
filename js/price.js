$(document).on('click', '.price__button-1', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-item-2');
  $('.price__img-item').removeClass('price__img-item-3');
  $('.price__img-item').removeClass('price__img-item-4');
  $('.price__img-item').addClass('price__img-item-1');  
})

$(document).on('click', '.price__button-2', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-item-1');
  $('.price__img-item').removeClass('price__img-item-3');
  $('.price__img-item').removeClass('price__img-item-4');
  $('.price__img-item').addClass('price__img-item-2');  
})

$(document).on('click', '.price__button-3', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-item-1');
  $('.price__img-item').removeClass('price__img-item-2');
  $('.price__img-item').removeClass('price__img-item-4');
  $('.price__img-item').addClass('price__img-item-3');  
})

$(document).on('click', '.price__button-4', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-item-1');
  $('.price__img-item').removeClass('price__img-item-2');
  $('.price__img-item').removeClass('price__img-item-3');
  $('.price__img-item').addClass('price__img-item-4');  
})

/**/



$(document).on('click', '.price__button', function(e){
  e.preventDefault;
  $('.price__button-active').removeClass('price__button-active');
  $(this).addClass('price__button-active');  
})


$(document).on('mouseenter', '.cov-1', function(e){
  e.preventDefault;
  $('.price__img-item').addClass('price__img-1');
})

$(document).on('mouseleave', '.cov-1', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-1');
})


$(document).on('mouseenter', '.cov-2', function(e){
  e.preventDefault;
  $('.price__img-item').addClass('price__img-2');
})

$(document).on('mouseleave', '.cov-2', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-2');
})


$(document).on('mouseenter', '.cov-3', function(e){
  e.preventDefault;
  $('.price__img-item').addClass('price__img-3');
})

$(document).on('mouseleave', '.cov-3', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-3');
})

$(document).on('mouseenter', '.cov-4', function(e){
  e.preventDefault;
  $('.price__img-item').addClass('price__img-4');
})

$(document).on('mouseleave', '.cov-4', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-4');
})

$(document).on('mouseenter', '.cov-5', function(e){
  e.preventDefault;
  $('.price__img-item').addClass('price__img-5');
})

$(document).on('mouseleave', '.cov-5', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-5');
})


$(document).on('mouseenter', '.cov-6', function(e){
  e.preventDefault;
  $('.price__img-item').addClass('price__img-6');
})

$(document).on('mouseleave', '.cov-6', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-6');
})



$(document).on('mouseenter', '.cov-7', function(e){
  e.preventDefault;
  $('.price__img-item').addClass('price__img-7');
})

$(document).on('mouseleave', '.cov-7', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-7');
})




$(document).on('mouseenter', '.cov-8', function(e){
  e.preventDefault;
  $('.price__img-item').addClass('price__img-8');
})

$(document).on('mouseleave', '.cov-8', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-8');
})


$(document).on('mouseenter', '.cov-9', function(e){
  e.preventDefault;
  $('.price__img-item').addClass('price__img-9');
})

$(document).on('mouseleave', '.cov-9', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-9');
})


$(document).on('mouseenter', '.cov-10', function(e){
  e.preventDefault;
  $('.price__img-item').addClass('price__img-10');
})

$(document).on('mouseleave', '.cov-10', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-10');
})


$(document).on('mouseenter', '.cov-11', function(e){
  e.preventDefault;
  $('.price__img-item').addClass('price__img-11');
})

$(document).on('mouseleave', '.cov-11', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-11');
})




$(document).on('mouseenter', '.cov-12', function(e){
  e.preventDefault;
  $('.price__img-item').addClass('price__img-12');
})

$(document).on('mouseleave', '.cov-12', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-12');
})


$(document).on('mouseenter', '.cov-13', function(e){
  e.preventDefault;
  $('.price__img-item').addClass('price__img-13');
})

$(document).on('mouseleave', '.cov-13', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-13');
})


$(document).on('mouseenter', '.cov-14', function(e){
  e.preventDefault;
  $('.price__img-item').addClass('price__img-14');
})

$(document).on('mouseleave', '.cov-14', function(e){
  e.preventDefault;
  $('.price__img-item').removeClass('price__img-14');
})




function showContent(link) {

    var cont = document.getElementById('ajax'); 
    var loading = document.getElementById('loading');
    
    
    
    cont.innerHTML = '<li style="position: absolute;width: 100%;background: #fff;height: 40vh;display: flex;justify-content: center;align-items: center;left:0;"><span style="animation: circleRotate 1s infinite;animation-duration: 1s;width: 70px;border-radius: 50%;height: 70px;border: 2px solid #47ABC3;display: block;border-top: transparent;border-left: transparent;"></span></li>'; 

  

    var http = createRequestObject();         // создаем ajax-объект
    if( http ) {
      http.open('get', link);             // инициируем загрузку страницы
      http.onreadystatechange = function () {     // назначаем асинхронный обработчик события
        if(http.readyState == 4) {
          cont.innerHTML = http.responseText;   // присваиваем содержимое
        }
      }
      http.send(null);    
    } else {
      document.location = link; // если ajax-объект не удается создать, просто перенаправляем на адрес
    }
    
  }

  // создание ajax объекта
  function createRequestObject() {
    try { return new XMLHttpRequest() }
    catch(e) {
      try { return new ActiveXObject('Msxml2.XMLHTTP') }
      catch(e) {
        try { return new ActiveXObject('Microsoft.XMLHTTP') }
        catch(e) { return null; }
      }
    }
  }