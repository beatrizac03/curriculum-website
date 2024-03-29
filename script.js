/* header scroll blur */

function toggleBlur() {
    let scrollTop = window.scrollY
    let header = document.querySelector('header')

    if(scrollTop > 0) {
        header.classList.add('blurScroll')
    } else {
        header.classList.remove('blurScroll')
    }
}

window.addEventListener('scroll', toggleBlur)