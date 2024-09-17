
const form = document.getElementById('form');
const allInputs = form.querySelectorAll('input');
form.onsubmit = function getFormValue(ev) {
    ev.preventDefault();
    console.log(allInputs[0].value);
    console.log(allInputs[1].value);
}