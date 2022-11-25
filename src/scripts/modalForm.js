
let modalWindow = document.querySelector('div.modal-window')
let modalPhone = document.querySelector('div.modal-active')

let buttonEnrolls = document.querySelectorAll('.button')
let imgEnrolls = document.querySelectorAll('.masters__img')
function openModal() {
    modalWindow.classList.remove('modal');
    modalPhone.classList.remove('modal')
}
function closeModal() {
    modalWindow.classList.add('modal');
    modalPhone.classList.add('modal')
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

buttonEnrolls.forEach(buttonEnroll => {
    buttonEnroll.addEventListener('click', function() {
        openModal()
    })
});
imgEnrolls.forEach(imgEnroll => {
    imgEnroll.addEventListener('click', function() {
        setTimeout(openModal, 220)
        setTimeout(topFunction, 520)
    })
});

modalPhone.addEventListener('click', function() {
    closeModal()
})
