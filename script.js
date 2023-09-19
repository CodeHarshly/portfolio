   //content hider
   window.addEventListener("scroll", function () {
        const homeimage = document.querySelector(".custom-image");
        const headimage = document.querySelector(".header-image");
        const headerpad = document.querySelector(".header");
        const h1Element = document.querySelector("h1");
        const h3Element = document.querySelector("h3");
        const h2Element = document.querySelector("h2");
        const h4Element = document.querySelector("h4");
        const pElement = document.querySelector(".about-content");
        const scrollPos = window.scrollY;
        const scrollThreshold = 100;
        const scrollThreshold2 = 1500;

        if (scrollPos > scrollThreshold) {
            headimage.classList.add("hide");
            h1Element.classList.add("hide");
            h2Element.classList.add("hide");
            h3Element.classList.add("hide");
            h4Element.classList.add("hide");
            homeimage.classList.add("hide");
            headerpad.style.setProperty("--head-padding", "1.55rem 5%");
        } else {
            headimage.classList.remove("hide");
            h1Element.classList.remove("hide");
            h2Element.classList.remove("hide");
            h3Element.classList.remove("hide");
            h4Element.classList.remove("hide");
            homeimage.classList.remove("hide");
            headerpad.style.setProperty("--head-padding", "3rem 5%");
        }
        if (scrollPos > scrollThreshold2 || scrollPos < scrollThreshold) {
            pElement.classList.add("hide");
        } else {
            pElement.classList.remove("hide");
        }
    });
    //sdyhs
    // Define a function to initialize the Typed.js animation
function startTypedAnimation() {
    var typed = new Typed("#word", {
        strings: ["Web Developer", "Game Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

}

// Use setTimeout to delay the start of the animation
setTimeout(startTypedAnimation, 800); // Delay for 2 seconds (2000 milliseconds)

// menu nav toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
};

// nav active maker
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window,scrollY > 100)
    
    //remove toogle menu option
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// scroll behaviour
ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration: 1000,
    delay: 150
});
if (window.innerWidth > 778) {
    ScrollReveal().reveal('.home-content, .about-head, .title', { origin: 'top'});
    ScrollReveal().reveal('.project-content, .bt, .btn, .input-box2, .c-bottom', { origin: 'bottom'});
    ScrollReveal().reveal('.right', { origin: 'right'});
    ScrollReveal().reveal('.left', { origin: 'left' });
}
if (window.innerWidth <= 778) {
    ScrollReveal().reveal('.home-content, .about-head, .title', { origin: 'top', distance: '25px' });
    ScrollReveal().reveal('.project-content, .bt, .btn, .input-box2, .c-bottom', { origin: 'bottom', distance: '25px' });
    ScrollReveal().reveal('.right', { origin: 'right', distance: '25px'});
    ScrollReveal().reveal('.left', { origin: 'left', distance: '25px' });
}
