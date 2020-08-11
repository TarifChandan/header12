const line1 = document.querySelector('.line--1');
const line2 = document.querySelector('.line--2');
const line3 = document.querySelector('.line--3');
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const mainItems = document.querySelectorAll('.main-item');
const subItems = document.querySelectorAll('.sub-item');
const before = document.querySelector('.logo-before');
const after = document.querySelector('.logo-after');
const logo = document.querySelector('.logo');


burger.addEventListener('click', () => {
    line1.classList.toggle('cross-line--1');
    line2.classList.toggle('cross-line--2');
    line3.classList.toggle('cross-line--3');
    navigation.classList.toggle('navigation-appear');

    if(logo.getAttribute('src') === 'assets/logo.png') {
        logo.setAttribute('src', 'assets/logo-white.png')
    } else {
        logo.setAttribute('src', 'assets/logo.png')
    }

    mainItems.forEach((item, index) => {
        if(!item.style.animation) {          
            item.style.animation = `moveFromRight .2s backwards ${(index / 18) + .1}s`

        } else {
            item.style.animation = ''
        }    
    })

    subItems.forEach((item, index) => {
        if(!item.style.animation) {          
            item.style.animation = `moveFromRight .4s backwards ${(index / 18) + .3}s`
        } else {
            item.style.animation = ''
        }    
    })

    before.classList.toggle('logo-before-effect');
    before.classList.toggle('logo-white');
    after.classList.toggle('logo-after-effect');
    after.classList.toggle('logo-white');


    setTimeout(() => {
        before.classList.remove('logo-before-effect');
        after.classList.remove('logo-after-effect');
    }, 700)
})