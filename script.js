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

/* dash below li link*/

// let eachLiLink = document.querySelectorAll('.c-links a')

// function toggleDashBelow(event){
//     let liLink = event.currentTarget.querySelector('li');
//     liLink.classList.toggle('afterDashLink')
// }

// eachLiLink.forEach((link) => {
//     link.addEventListener('mouseover', toggleDashBelow)
// })

let eachLiLink = document.querySelectorAll('.c-links a')

eachLiLink.forEach((eachLi) => {
    eachLi.addEventListener('mouseenter', function() {
        eachLi.classList.add('afterLiDash')
    })
})

eachLiLink.forEach((eachLi) => {
    eachLi.addEventListener('mouseleave', function() {
        eachLi.classList.remove('afterLiDash')
    })
})


