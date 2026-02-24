// nav-menu
// nav-close
// nav-toggle

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach((e) => e.addEventListener('click', linkAction));

var typed = new Typed('#home-typed', {
    strings: [
        'توسعه دهنده فرانت اند',
        'توسعه دهنده بک اند ',
        'توسعه دهنده وب',
        ' امیر عباس مرادی'
    ],
    typeSpeed: 60,
    backSpees:'40',
    backDeley:1500,
    startDeley:500,
    lop:true,
});

const showHeader = ()=>{
    const header = document.getElementById('header')
    this.screenY >= 50
    ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
};
window.addEventListener('scroll',showHeader)
