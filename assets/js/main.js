/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
    navToggle = document.getElementById("nav-toggle")
    navClose = document.getElementById("nav-close")

    /*==== MENU SHOW ====*/
    /*Validate if constant exists*/

    if(navToggle){
        navToggle.addEventListener("click", () => {
            navMenu.classList.add('show-menu')
        })
    }

    /*==== MENU CLOSE ====*/
    /*Validate if constant exists*/
    if(navClose){
        navClose.addEventListener("click", () => {
            navMenu.classList.remove('show-menu')
        })
    }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When each .nav__link is clicked, remove the 'show-menu' class
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener("click", linkAction));


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== SHADOW HEADER ===============*/

const shadowHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);
    

/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
