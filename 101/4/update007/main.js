const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () =>{
  const targetRect = target.getBoundingClientRect();
  const targetWidth = targetRect.width / 2;
  const targetHeigth = targetRect.height / 2;
  
  document.addEventListener('mousemove',(event)=>{
    console.log(targetRect);
    const x = event.clientX;
    const y = event.clientY;
  
    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetWidth}px,${y-targetHeigth}px)`;
    tag.style.transform = `translate(${x + 20}px,${y + 20}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
  })
})
