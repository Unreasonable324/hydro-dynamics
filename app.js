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


 window.addEventListener("DOMContentLoaded", function TelInput() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});