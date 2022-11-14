let elements = document.querySelectorAll('.goods_price')
let anotherElementsBlock = document.querySelector('#anotherElems')
anotherElementsBlock.style.display = 'none'

let tabs = document.querySelectorAll('.menu-goods_prices__tab');

let tabInfo = {
    0:'.firstTab',
    1:'.secondTab',
    2:'.thirdTab',
    3:'.secondTab',
    4:'.thirdTab',
    5:'.fifthTab'
}


function changeContent(number) {
    tabs[number].addEventListener('click', function () {
        let lastNumber = document.querySelector('.current_tab')
        lastNumber.classList.remove('current_tab')
        tabs[number].classList.add('current_tab')

        elements.forEach(elem => elem.classList.add('goods_price-none'))
        let selector = tabInfo[number]
        document.querySelectorAll(selector).forEach(elem => {
            elem.classList.remove('goods_price-none')
            anotherElementsBlock.style.display = 'flex'

        })
    })
}
for (let key in tabInfo) {
    changeContent(key)
}
