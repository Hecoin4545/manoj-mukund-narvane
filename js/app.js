const navBar = document.querySelector('.nav-bar')
const rightNavBar = document.querySelector('.right-nav-bar')
const centerNavBar = document.querySelector('.center-nav-bar')
const leftNavBar = document.querySelector('.left-nav-bar')
const hamline = document.querySelector('.hamline')

hamline.addEventListener('click' , ()=>{
    navBar.classList.toggle('height')
    rightNavBar.classList.toggle('visiblity')
    centerNavBar.classList.toggle('visiblity')
    leftNavBar.classList.toggle('visiblity')
})