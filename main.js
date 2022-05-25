'use strict'

// navbar을 스크롤이 내릴때마다 투명에서 불투명으로 바꿉니다.
const navbar = document.querySelector('#navbar');

const navbarHeight = navbar.getBoundingClientRect().height;
// 스크롤이 될때마다 이 안에있는 애가 실행이 되도록.
document.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
})

// navbar누르면 스크롤링해주는 거

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});

})
