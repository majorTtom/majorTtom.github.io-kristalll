const prevBtn = document.querySelector('.main__slider-prev')
const nextBtn = document.querySelector('.main__slider-next')
const outText = document.querySelector('.main__slider-text')
const outName = document.querySelector('.main__slider-name')
const outItem = document.querySelector('.main__slider-item')
const outNum = document.querySelector('.main__num')

const name1 = '@vanderlakuin'
const name2 = '@madinaa'
const name3 = '@marya_shka7'
const name4 = '@ritashidova'
const name5 = '@elvvira_'
const name6 = '@leilla_d'


const text1 = 'Добрый день! Хочу поблагодарить ваших ребят, которые почистили мой любимый диван и подарили ему практически вторую жизнь, а мне хорошее настроение! Огромное спасибо за вашу добросовестную работу, желаю вам процветания и много благодарных клиентов!'
const text2 = 'Здравствуйте. Сегодня привезли ковры. Спасибо за чистоту. Мне очень понравилось. Впредь буду обращаться только к вам. Успехов вам в вашей деятельности!'
const text3 = 'Недавно стирали нам 3 ковра, работой вашей очень довольны, приехали забрали, привезли, подняли на 5 этаж. Ковры чистые, пахнут свежестью. Спасибо большое за работу, очень приятно было с вами иметь дело. Успехов вам и процветаний.'
const text4 = 'Несколько ковров стирала в Кристалле. Вернули товар как новенькие! Качество обслуживания супер! Всем советую именно эту химчистку. Руководителю и его команде успехов и удачи во всех начинаниях. Молодцы ребята!'
const text5 = 'Добрый день! Мне хотелось выразить вам Оооооогромную благодарность за вашу работу. Спасибо большое, ковер просто сияет. Вы большие молодцы и супер профессионалы.. Отныне только к вам))'
const text6 = 'Здравствуйте. После сегодняшней чистки диван почти просох и виден результат: он как новый! Спасибо огромное ребятам за проделанную работу! А муж меня уверял что былой вид дивану не вернуть.Ваша работа доказала обратное) Всем буду советовать вашу химчистку.'

const num1 = '1'
const num2 = '2'
const num3 = '3'
const num4 = '4'
const num5 = '5'
const num6 = '6'

const names = [name1, name2, name3, name4, name5, name6]
const texts = [text1, text2, text3, text4, text5, text6]
const nums = [num1, num2, num3, num4, num5, num6]

let i = 0
outText.innerHTML =`${texts[i]}` 
outName.innerHTML =`${names[i]}`
outNum.innerHTML =`${nums[i]}`

nextBtn.onclick = () =>{
    if(i < names.length  - 1){
        i++
    }else{
        i = 0
    }

    $('.main__slider-item').addClass('main__slider-animate')
    setTimeout(function () {
        outName.innerHTML =`${names[i]}`
        outText.innerHTML =`${texts[i]}`
        outNum.innerHTML =`${nums[i]}`
        $('.main__slider-item').removeClass('main__slider-animate')
    }, 1000)
    
    

}

prevBtn.onclick = () =>{
    if(i > 0 ){
        i--
    }else{
        i = names.length - 1 
    }

    $('.main__slider-item').addClass('main__slider-animate')

    setTimeout(function () {
        $('.main__slider-item').removeClass('main__slider-animate')
        outName.innerHTML =`${names[i]}`
        outText.innerHTML =`${texts[i]}`
        outNum.innerHTML =`${nums[i]}`
    }, 1000)
}


setInterval(function(){
  $('.main__slider-next').trigger('click');
}, 7000);

const counter = function () {
  const btns = document.querySelectorAll('.counter__btn');


  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter__value');
      const currentValue = +inp.value;
      let newValue;
      const right = document.getElementById('right');
      const left = document.getElementById('left');
      const result = document.getElementById('result');

      if (direction === 'plus') {
        newValue = currentValue + 1000;
      } else {
        newValue = currentValue - 1000 > 0 ? currentValue - 1000 : 0;
      }

      if (newValue === 6000) {
        right.style.display = 'none';
        result.style.gridTemplateColumns = '1fr';
      }else{
        right.style.display = 'block';
        result.style.gridTemplateColumns = '50% 50%';
      }

       inp.value = newValue;

       let wrap = document.getElementById("wrap");

       wrap.style.transform = 'translateX(-' + newValue + 'px)';
      console.log(newValue)
    })
  })

}

counter();



const countertwo = function () {
  const btns = document.querySelectorAll('.counter__btn-2');


  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter__value-2');
      const currentValue = +inp.value;
      let newValue;
      const right = document.getElementById('rightt');
      const left = document.getElementById('leftt');
      const result = document.getElementById('resultt');

      if (direction === 'plus') {
        newValue = currentValue + 1000;
      } else {
        newValue = currentValue - 1000 > 0 ? currentValue - 1000 : 0;
      }

      if (newValue === 2000) {
        right.style.display = 'none';
        result.style.gridTemplateColumns = '1fr';
      }else{
        right.style.display = 'block';
        result.style.gridTemplateColumns = '50% 50%';
      }

       inp.value = newValue;

       let wrap = document.getElementById("wrap-2");

       wrap.style.transform = 'translateX(-' + newValue + 'px)';
      console.log(newValue)
    })
  })

}

countertwo();




$(document).ready(function(){
    $('.ques__item').on('click', function(){
        $(this).toggleClass('ques__item-active');
        // $('.header__window').toggleClass('header__window-active')
    });
});



let lastScroll = 0;
const defaultOffset = 1500;
const header = document.querySelector('.fixed');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('fixed__fixed');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('fixed__fixed');
        header.classList.remove('fixed__o');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('fixed__fixed');
    }else if (scrollPosition() < defaultOffset) {
      header.classList.add('fixed__o');
    }

    lastScroll = scrollPosition();
})

