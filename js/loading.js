/* ==========================================
   AnimeFlix Loading Screen
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const app = document.getElementById("app");

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Give the loading animation time to play
    setTimeout(() => {

        loader.classList.add("hide");
        app.classList.add("show");

        // Enable scrolling
        document.body.style.overflowY = "auto";

    }, 3000);

});
loader.classList.add("hide");

setTimeout(() => {
    app.classList.add("show");
}, 400);