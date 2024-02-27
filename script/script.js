window.onload = function() {
    // На случай большого количества колонок в блоке programm
    const programmEnums = document.querySelectorAll('.programm__enum')

    if(window.innerWidth > 768) {
        programmEnums.forEach(programmEnum => {
            if(programmEnum.classList.contains('route')) {
                programmEnum.style.height = (programmEnum.offsetHeight / 1.8) + "px"
                
            } else {
                programmEnum.style.height = (programmEnum.offsetHeight / 2.8) + "px"
            }
        })
    }

    // FAQ
    const faqs = document.querySelectorAll('.faq')
    const faqButtons = document.querySelectorAll('.faq__button')

    faqButtons.forEach((faqButton, index) => {
        faqButton.addEventListener('click', () => {
            faqs[index].classList.toggle('active')
        })
    })

    // Burger
    const burgerOpen = document.querySelector('.burger')
    const burgerClose = document.querySelector('.burger-menu')
    const body = document.querySelector('body')
    const menu = document.querySelector('.menu')

    burgerOpen.addEventListener('click', () => {
        body.classList.add('menu-opened')
        menu.classList.add('active')
    })

    burgerClose.addEventListener('click', () => {
        body.classList.remove('menu-opened')
        menu.classList.remove('active')
    })

    // Article more
    const more = document.querySelector('.start__more')
    const hiddenText = document.querySelector('.start__hidden')

    more.addEventListener('click', () => {
        more.classList.add('active')
        hiddenText.classList.add('active')
    })

}


