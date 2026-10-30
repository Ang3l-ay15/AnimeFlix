/* ==========================================
   TAB SWITCHING
========================================== */

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginTab.addEventListener("click", () => {

    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    loginForm.style.display = "block";
    registerForm.style.display = "none";

});

registerTab.addEventListener("click", () => {

    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    loginForm.style.display = "none";
    registerForm.style.display = "block";

});


/* ==========================================
   SHOW / HIDE LOGIN PASSWORD
========================================== */

const loginPassword = document.getElementById("loginPassword");
const toggleLoginPassword = document.getElementById("toggleLoginPassword");

toggleLoginPassword.addEventListener("click", () => {

    const type = loginPassword.getAttribute("type");

    if(type === "password"){

        loginPassword.setAttribute("type","text");

        toggleLoginPassword.innerHTML =
        '<i class="fa-solid fa-eye-slash"></i>';

    }else{

        loginPassword.setAttribute("type","password");

        toggleLoginPassword.innerHTML =
        '<i class="fa-solid fa-eye"></i>';

    }

});


/* ==========================================
   SHOW / HIDE REGISTER PASSWORD
========================================== */

const registerPassword = document.getElementById("registerPassword");
const toggleRegisterPassword = document.getElementById("toggleRegisterPassword");

toggleRegisterPassword.addEventListener("click", () => {

    const type = registerPassword.getAttribute("type");

    if(type === "password"){

        registerPassword.setAttribute("type","text");

        toggleRegisterPassword.innerHTML =
        '<i class="fa-solid fa-eye-slash"></i>';

    }else{

        registerPassword.setAttribute("type","password");

        toggleRegisterPassword.innerHTML =
        '<i class="fa-solid fa-eye"></i>';

    }

});


/* ==========================================
   LOGIN
========================================== */

loginForm.addEventListener("submit", (e)=>{

    e.preventDefault();

    alert("Login Successful!");

    window.location.href = "index.html";

});


/* ==========================================
   REGISTER
========================================== */

registerForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Account Created Successfully!");

    registerTab.classList.remove("active");
    loginTab.classList.add("active");

    registerForm.style.display = "none";
    loginForm.style.display = "block";

});