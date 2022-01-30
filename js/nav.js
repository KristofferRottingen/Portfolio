window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    const hamburgerIcon =  document.querySelector(".hamburger-label");
    header.classList.toggle("sticky", window.scrollY > 0);
    hamburgerIcon.classList.toggle("stick", window.scrollY > 0);
});


