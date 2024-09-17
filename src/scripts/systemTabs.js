let elements = document.querySelectorAll('.goods_price')
let anotherElementsBlock = document.querySelector('#anotherElems')
anotherElementsBlock.style.display = 'none'

let tabs = document.querySelectorAll('.menu-goods_prices__tab');


let tabb = [
    {
        name: "drfgdfg",
        services: [
            {
                title: 'yhjkihjk',
                price: 4565,
                desc:'ghjghjh'
            }
        ]
    }
]

function changeContent(number, lastNumber, selector) {
    tabs[number].addEventListener('click', function () {
        tabs[lastNumber].classList.remove('current_tab')
        tabs[number].classList.add('current_tab')

        elements.forEach(elem => elem.classList.add('goods_price-none'))

        document.querySelectorAll(selector).forEach(elem => {
            elem.classList.remove('goods_price-none')
            anotherElementsBlock.style.display = 'flex'
            elem.style.display = 'flex'
        })
    })
}

changeContent(1, 0, '.secondTab')
changeContent(2, 1, '.thirdTab')
changeContent(3, 2, '.fourthTab')