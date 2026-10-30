/* ==========================================
   MOBILE MENU
========================================== */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* ==========================================
   SEARCH OVERLAY
========================================== */

const searchButton = document.getElementById("searchButton");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");

searchButton.addEventListener("click", () => {

    searchOverlay.classList.add("active");

});

closeSearch.addEventListener("click", () => {

    searchOverlay.classList.remove("active");

});


/* ==========================================
   HEADER SCROLL EFFECT
========================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/* ==========================================
   BACK TO TOP
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

        mobileMenu.classList.remove("active");

    });

});


/* ==========================================
   AUTH LINKS
========================================== */

document.querySelectorAll(".auth-link").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        window.location.href="signin.html";

    });

});