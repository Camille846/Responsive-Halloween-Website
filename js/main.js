const navMenu = document.querySelector(".nav__menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")
const trickBtn = document.querySelector(".trick-btn")
const trickWrapper = document.querySelector(".trick__popup--wrapper")
const popupClose = document.querySelector(".popup__close")

if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu")
    })
}

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

// To remove menu mobile

const navLink = document.querySelectorAll(".nav__link")

function linkAction(){
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Initialize Swiper

let swiper = new Swiper(".graveyard-swiper", {
    loop: true,
    spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: true,
  });

// Trick pop-up

if(trickBtn){
    trickBtn.addEventListener("click", ()=>{
        trickWrapper.classList.add("show-trick")
    })
}

if(popupClose){
    popupClose.addEventListener("click", ()=>{
        trickWrapper.classList.remove("show-trick")
    })
}