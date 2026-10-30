/* ==========================================
   HERO SLIDER
========================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
const totalSlides = slides.length;

/* ===========================
   SHOW SLIDE
=========================== */

function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    dots.forEach((dot)=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

/* ===========================
   NEXT SLIDE
=========================== */

function nextSlide(){

    currentSlide++;

    if(currentSlide >= totalSlides){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

/* ===========================
   AUTO PLAY
=========================== */

let slider = setInterval(nextSlide,5000);

/* ===========================
   DOT NAVIGATION
=========================== */

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide = index;

        showSlide(currentSlide);

        clearInterval(slider);

        slider = setInterval(nextSlide,5000);

    });

});
