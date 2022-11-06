let button_activate_menu = document.getElementById('button')
let content = document.getElementsByClassName('header__block')[0];
function modifyClass() {
    document.getElementsByClassName('menu__items')[0].style.display = "flex";
    document.getElementById('number-info').style.display = "none";
}
function returnClass() {
    document.getElementsByClassName('menu__items')[0].style.display = "none";
    document.getElementById('number-info').style.display = "block";
}
button_activate_menu.addEventListener("click", modifyClass);
content.addEventListener("click", returnClass);