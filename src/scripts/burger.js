let button_activate_menu = document.getElementById('button')
let menu = document.getElementsByClassName('menu__items')[0]
function addClass() {
    menu.classList.toggle("menu__items-flex")
  
}

button_activate_menu.addEventListener("click", addClass);

