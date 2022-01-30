window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    const hamburgerIcon =  document.querySelector(".hamburger-label");
    header.classList.toggle("sticky", window.scrollY > 0);
    hamburgerIcon.classList.toggle("stick", window.scrollY > 0);
});



// homebutton ---> 
const home = document.querySelector(".home_btn");

home.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// herobtn ---> 
const herobtn = document.querySelector(".btn");

herobtn.addEventListener("click", function() {

    window.scrollTo({
        top: 775,
        behavior: "smooth"
    });
});


// aboutbutton ---> 
const about = document.querySelector(".about_btn");

about.addEventListener("click", function() {

    window.scrollTo({
        top: 775,
        behavior: "smooth"
    });
});


// workbutton ---> 
const work = document.querySelector(".work_btn");

work.addEventListener("click", function() {

    window.scrollTo({
        top: 1500,
        behavior: "smooth"
    });
});


// skillbutton ---> 
const skill = document.querySelector(".skill_btn");

skill.addEventListener("click", function() {

    window.scrollTo({
        top: 2350,
        behavior: "smooth"
    });
});


// contactbutton ---> 
const contact = document.querySelector(".contact_btn");

contact.addEventListener("click", function() {

    window.scrollTo({
        top: 3000,
        behavior: "smooth"
    });
});


