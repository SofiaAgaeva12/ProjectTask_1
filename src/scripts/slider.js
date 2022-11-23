let arrowLeft = document.querySelector('.arrow-left')
let ellipseLeft = document.querySelector('.ellipse-left')
let arrowRight = document.querySelector('.arrow-right')
let ellipseRight = document.querySelector('.ellipse-right')
let workImages = document.querySelectorAll('.works__work')
let worksImages = document.querySelector('.works__images')

function translateByArrowRight(element, distance) {
    let isMonitor = document.documentElement.clientWidth > 1300
    let isLaptop = document.documentElement.clientWidth > 800 && document.documentElement.clientWidth < 1300
    let isSmallLaptop = document.documentElement.clientWidth < 800
        element.addEventListener('click', function () {
            if (isMonitor && worksImages.scrollWidth < worksImages.clientWidth * 1.6) {
                workImages.forEach(workImage => workImage.style.transform += `translateX(${distance})`)
            }

            if (isLaptop && worksImages.scrollWidth < worksImages.clientWidth * 2.2) {
                workImages.forEach(workImage => workImage.style.transform += `translateX(${distance})`)
            }
            if (isSmallLaptop && worksImages.scrollWidth < worksImages.clientWidth * 3) {
                workImages.forEach(workImage => workImage.style.transform += `translateX(${distance})`)
            }
        } )
}
function translateByArrowLeft(element, distance) {
    element.addEventListener('click', function () {
        if (worksImages.scrollWidth) {
            workImages.forEach(workImage => workImage.style.transform += `translateX(${distance})`)
        }
    } )
}

translateByArrowLeft(arrowLeft, '-160px')
translateByArrowLeft(ellipseLeft, '-160px')
    translateByArrowRight(arrowRight, '160px')
    translateByArrowRight(ellipseRight, '160px')

