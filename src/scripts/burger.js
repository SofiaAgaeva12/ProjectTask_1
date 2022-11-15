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
        returnContent()
    }
}

button_activate_menu.addEventListener("click", addClass);
let button = document.querySelector('button')
let items = document.querySelectorAll('.menu__item-a')

for (let item of items) {
    item.addEventListener('click', function () {
        menu.classList.remove("menu__items-flex")
        returnContent()
        button.classList.remove('opened');
    })
}

function returnContent() {
    content.style.display = 'flex'
    numberInfo.style.display = 'block'
    header[0].style.backgroundImage = "url('img/pattern.png')";
    header[0].style.background = "contain";
    header[0].style.backgroundColor = "none";
}

