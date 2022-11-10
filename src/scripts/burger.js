let button_activate_menu = document.getElementById('button')
let menu = document.getElementsByClassName('menu__items')[0]
let header = document.getElementsByTagName('header')
let content = document.getElementById('headerNone')
let numberInfo = document.getElementById('number-info')
function addClass() {
    menu.classList.toggle("menu__items-flex")
    header[0].style.background = 'white'
    content.style.display = 'none'
    numberInfo.style.display = 'none'
    if (!menu.classList.contains('menu__items-flex')) {
        content.style.display = 'block'
        numberInfo.style.display = 'block'
        header[0].style.backgroundImage = "url('img/pattern.png')";
        header[0].style.background = "contain";
        header[0].style.backgroundColor = "none";
    }
}

button_activate_menu.addEventListener("click", addClass);