window.onload = function() {
    // На случай большого количества колонок в блоке programm
    const programmEnums = document.querySelectorAll('.programm__enum')
    programmEnums.forEach(programmEnum => {
        if(programmEnum.classList.contains('route')) {
            programmEnum.style.height = (programmEnum.offsetHeight / 1.8) + "px"

        } else {
            programmEnum.style.height = (programmEnum.offsetHeight / 2.8) + "px"
        }
    })

    // FAQ
    const faqs = document.querySelectorAll('.faq')
    const faqButtons = document.querySelectorAll('.faq__button')

    faqButtons.forEach((faqButton, index) => {
        faqButton.addEventListener('click', () => {
            faqs[index].classList.toggle('active')
        })
    })
}


