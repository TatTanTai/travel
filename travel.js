let textSearch = document.querySelector('.text_search');
let search = document.querySelector('.search');
let login = document.querySelector('.login');
let closeUser = document.querySelector('#close');
let textClose = document.querySelector('.text_user');
let textMenu = document.querySelector('#menu-bar');
let menu = document.querySelector('.menu2');
// let dots = document.querySelector('#dets');
window.onscroll = () => {
    textSearch.classList.remove('fa-times');
    search.classList.remove('active');
    closeUser.classList.remove('active');
    textMenu.classList.remove('fa-times');
    menu.classList.remove('active');
    // dots.style.backgroundColor('orange');
}

textSearch.addEventListener('click', () =>{
    textSearch.classList.toggle('fa-times');
    search.classList.toggle('active');
});

textMenu.addEventListener('click', () => {
    textMenu.classList.toggle('fa-times');
    menu.classList.toggle('active');
});

$(document).ready(function(){
    $('#menu-bar').click(function() {
        $('.menu2').slideToggle('snow');
    });
});
$(document).ready(function(){
    $('.text_user').click(function(){
        $('.login').fadeIn('snow');
    });
});
$(document).ready(function(){
    $('#close').click(function(){
        $('.login').fadeOut('snow');
    });
});
$(document).ready(function(){
    $('.text_search').click(function(){
        $('.searchs').slideToggle('snow');
    });
});

function videos(videosId) {
    var video = document.querySelectorAll('div.video_demo > div.shape');
    for(var i = 0; i < video.length; i++) 
        video[i].style.display = 'none';
    var p = document.getElementById(videosId);
    p.style.display = 'block';
    
}
function dots(dotId) {
    var dot = document.querySelectorAll('div.dets > span');
    for(var i = 0; i < dot.length; i++)
        dot[i].style.backgroundColor = 'white';
    var d = document.getElementById(dotId);
    d.style.backgroundColor = 'orange';
}
    

var swiper = new Swiper(".content", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });
