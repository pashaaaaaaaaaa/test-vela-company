
// timing page 

let currentDay = new Date().getFullYear();
let nextDay = new Date(`May 10 ${currentDay + 1} 00:00:00`);


function updateTiming(){
    let currentTime =  new Date();
    let difference = nextDay - currentTime;
    
    let daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);//days
    let hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;//hours
    let minutesLeft = Math.floor(difference / 1000 / 60 ) % 60;//minutes
    let secondsLeft = Math.floor(difference / 1000) % 60;//seconds
    
    
    let days = document.querySelector('#days');
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');

    let days1 = document.querySelector('#days1');
    let hours1 = document.querySelector('#hours1');
    let minutes1 = document.querySelector('#minutes1');
    let seconds1 = document.querySelector('#seconds1');
    
    // days.innerText = daysLeft;
    
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

    hours1.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes1.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds1.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    
}
setInterval(updateTiming, 1000);

let openPopUp = document.querySelector('.header__btn')
let openPopUp2 = document.querySelector('.timing__btn')
console.log(openPopUp2)
let windowPopUp = document.querySelector('.form-feed-back')
let windowPopUp2 = document.querySelector('.pop-up2')
let closePopUp = document.querySelector('.form-close')
let closePopUp2 = document.querySelector('.form-close2')

openPopUp.addEventListener('click', ()=>{
    windowPopUp.style.display ='block'
})
openPopUp2.addEventListener('click', ()=>{
    windowPopUp2.style.display ='block'
})
closePopUp.addEventListener('click', ()=>{
    windowPopUp.style.display ='none'
})
closePopUp2.addEventListener('click', ()=>{
    windowPopUp2.style.display ='none'
})
let infoOpen = document.querySelector('.info')
let infoTxt = document.querySelector('.text-o')

infoOpen.addEventListener('click', ()=>{
    infoTxt.style.display = 'block'
})

$(document).ready(function() {
    $('.select1').select2({
        placeholder: "Модель",
        // allowClear: true
    });
});
$(document).ready(function() {
    $('#sl2').select2({
        placeholder: "Двигатель",
        // allowClear: true
    });
});

// swiper page 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

var swiper = new Swiper("#mySw2", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper3 = new Swiper("#mySw1", {
    spaceBetween: 10,
    navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

var swiper = new Swiper("#mySw4", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper4 = new Swiper("#mySw3", {
    spaceBetween: 10,
    navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

var swiper = new Swiper("#mySw6", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper5 = new Swiper("#mySw5", {
    spaceBetween: 10,
    navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });