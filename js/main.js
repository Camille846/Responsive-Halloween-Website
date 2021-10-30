const navMenu = document.querySelector(".nav__menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")
const trickBtn = document.querySelector(".trick-btn")
const treatBtn = document.querySelector(".treat-btn")
const trickWrapper = document.querySelector(".trick__popup--wrapper")
const treatWrapper = document.querySelector(".treat__popup--wrapper")
const popupClose = document.querySelector(".popup__close")
const closeTreat = document.querySelector(".popup__close-treat")
const discountBtn = document.querySelector(".btn-discount")

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

// Treat pop-up

if(treatBtn){
    treatBtn.addEventListener("click", ()=>{
        treatWrapper.classList.add("show-treat")
    })
}

if(closeTreat){
    closeTreat.addEventListener("click", ()=>{
        treatWrapper.classList.remove("show-treat")
    })
}

if(discountBtn){
    discountBtn.addEventListener("click", ()=>{
        treatWrapper.classList.remove("show-treat")
    })
}

// Confetti Falling
const confettiSettings = { target: 'my-canvas' };
const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

// Initialize Swiper

let swiper = new Swiper(".graveyard-swiper", {
    loop: false,
    spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: true,
});

// Change background
swiper.on("transitionEnd", function(e) {
    if(this.activeIndex==0){
        document.body.classList.remove('second-theme');
        document.body.classList.remove('third-theme');
        document.body.classList.remove('forth-theme');
    }

    if(this.activeIndex==1){
        //   document.querySelector(".swiper-slide-active").style.background = '#3E0D84';
            document.body.classList.add('second-theme');
            document.body.classList.remove('third-theme');
            document.body.classList.remove('forth-theme');
    }
    
    if(this.activeIndex==2){
        // document.querySelector(".swiper-slide-active").style.background = '#320F1C';
        document.body.classList.remove('second-theme');
        document.body.classList.add('third-theme');
        document.body.classList.remove('forth-theme');
    }
    
    if(this.activeIndex==3){
        // document.querySelector(".swiper-slide-active").style.background = '#417345';
        document.body.classList.remove('second-theme');
        document.body.classList.remove('third-theme');
        document.body.classList.add('forth-theme');
    }
      
});





