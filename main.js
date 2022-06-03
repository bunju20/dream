'use strict'

// navbar을 스크롤이 내릴때마다 투명에서 불투명으로 바꿉니다.
const navbar = document.querySelector('#navbar');

const navbarHeight = navbar.getBoundingClientRect().height;
// 스크롤이 될때마다 이 안에있는 애가 실행이 되도록.
document.addEventListener('scroll',()=>{
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
    scrollIntoView(link);
})

// contact me 누르면 contact로 이동시켜줌.

const contactMe = document.querySelector('.home__contact');
 contactMe.addEventListener('click',(event)=>{
    scrollIntoView('#contact')
 })

//스크롤 하면서 점점 홈이 투명해짐.
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//arrow up 버튼 스크롤 아래로 내려가면 보이게

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',() =>{
    if(window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});


//handle click on the arrow up btn
arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home')
});


//project
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }
    
    // remove

    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    
    setTimeout(()=>{
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('anim-out');
    },300);
});



 function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
 }