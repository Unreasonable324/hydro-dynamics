const btnBurger = document.querySelector('.menu-burger')
const menuNavBurger = document.querySelector('.menu-nav-burger')
const anchor = document.querySelectorAll('.menu-nav-burger a')
const body = document.body

btnBurger.addEventListener('click', () => {
    console.log(anchor);
    menuNavBurger.classList.toggle('menu-nav-burger__active')
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
    btnBurger.style.color = btnBurger.style.color === 'rgb(12, 127, 234)' ? '' : 'rgb(12, 127, 234)'
})
 anchor.forEach(function(anchorItem){
    anchorItem.addEventListener('click', () =>{
        menuNavBurger.classList.remove('menu-nav-burger__active')
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
    btnBurger.style.color = btnBurger.style.color === 'rgb(12, 127, 234)' ? '' : 'rgb(12, 127, 234)'
    })
 })


 const img = document.querySelector('.wrapper-accriditation img')
 img.addEventListener('click',()=>{
    img.classList.toggle ('imgActive')
 })