window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    
})


const scientistsModals = document.querySelectorAll(".scientists-modal")
const learnMoreBtns = document.querySelectorAll(".learn-more-btn")
const modalCloseBtns = document.querySelectorAll(".modal-close-btn")

var modal = function(modalClick){
    scientistsModals[modalClick].classList.add("active");
}

learnMoreBtns.forEach((learnMoreBtn, i)=>{
    learnMoreBtn.addEventListener("click", ()=>{
        modal( i );
    });
});

modalCloseBtns.forEach((modalCloseBtn, i)=>{
    modalCloseBtn.addEventListener("click", ()=>{
        scientistsModals.forEach((modalView) =>{
            modalView.classList.remove("active");
        });
    });
});


const themeBtn = document.querySelector(".theme-btn")

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () =>  document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () =>  document.body.classList.contains("sun") ? "sun" : "moon";



const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function (){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// ScrollReveal

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
 });
//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.Title-01, .description1 p,  .section-title-01, .section-title-02', {delay: 500, origin: 'right'});

ScrollReveal().reveal('.home-img, .algebra-img, .geometry-img ', {delay: 500, origin: 'bottom'});

ScrollReveal().reveal('.description, footer-copyrights, .contact-right', {delay: 600, origin: 'right'});

ScrollReveal().reveal('.theories-description, .scientists-description', {delay: 700, origin: 'left'});

ScrollReveal().reveal('.scientists-card, .education', {delay: 800, origin: 'bottom', interval:200});

ScrollReveal().reveal('footer .group', {delay: 500, origin: 'top', interval:200});
