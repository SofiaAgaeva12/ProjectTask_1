const formModal = document.getElementById('formModal');
const btnModal = document.querySelector('.modal__button')
const InputsModal = document.querySelectorAll('.modal__input')
let modalWindow2 = document.querySelector('div.modal-window')
let modalPhone2 = document.querySelector('div.modal-active')

function closeModal() {
    modalWindow2.classList.add('modal');
    modalPhone2.classList.add('modal')
}

formModal.onsubmit = function getFormValue(ev) {
    ev.preventDefault()
    let formData = new FormData(formModal)
    const DATA = {
    "name": formData.get("name"),
    "phone": formData.get("phone"),
    "masterId": formData.get("masterId"),
    "serviceId": formData.get("serviceId"),
    "visitDate": formData.get("visitDate"),
}
sendOrders(DATA)
}


function confirmOpened() {
    let confirmDiv = document.createElement("div");
    confirmDiv.innerHTML = "Ваша заявка отправлена! В ближайшее время с вами свяжется менеджер.";
    confirmDiv.style.padding = '30px';
    confirmDiv.style.color = 'green';
    formModal.append(confirmDiv);
    setTimeout(function (){confirmDiv.style.display='none'}, 3000)
}
function confirmOpenedError(error) {
    let confirmDiv = document.createElement("div");
    confirmDiv.innerHTML = error;
    confirmDiv.style.padding = '30px';
    confirmDiv.style.color = 'red';
    formModal.append(confirmDiv);
    setTimeout(function (){confirmDiv.style.display='none'}, 3000)
}
function invalidInputs() {
    InputsModal.forEach(input => {
            input.classList.add('input-invalid')
    }
    )
}

btnModal.addEventListener('click', invalidInputs)

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjY5MDg2MzY2LCJleHAiOjE2NjkwODk5NjZ9.MetDaeaYlCw20MmdGKOfp6l9dx-mqiZTZCXmE64szMQ";

const API_PATH = "https://beauty-saloon-server.herokuapp.com/api";

async function sendOrders(DATA) {
    const response = await fetch(`${API_PATH}/orders`, {
        method: 'POST',
        body: JSON.stringify(DATA),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`
        },
    }
    )
        .then((response) => {
                console.log(response.json())
            if (response.status === 201) {
                confirmOpened()
            } else {

                confirmOpenedError(response.statusText)
            }
        }
        )
        .then((data) => console.log(data))
    setTimeout(closeModal, 3000)
}
