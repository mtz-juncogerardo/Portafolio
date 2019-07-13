const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar-list');

hamburger.addEventListener('click',()=>{

    navLinks.classList.toggle('open');

});