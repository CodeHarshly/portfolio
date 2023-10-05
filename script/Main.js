   //content hider
   window.addEventListener("scroll", function () {
        const homeimage = document.querySelector(".custom-image");
        const headimage = document.querySelector(".header-image");
        const headerpad = document.querySelector(".header");
        const h1Element = document.querySelector("h1");
        const h3Element = document.querySelector("h3");
        const h2Element = document.querySelector("h2");
        const h4Element = document.querySelector("h4");
        const pElement  = document.querySelector(".social");
        const scrollPos = window.scrollY;
        const scrollThreshold = 100;
        const scrollThreshold2 = 5;

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
        if (scrollPos < scrollThreshold2) {
            pElement.classList.add("hide");
        } else {
            pElement.classList.remove("hide");
        }
    });

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

/*let sections = document.querySelectorAll('section');
let list = document.querySelectorAll('.list');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            list.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.list[href*=' + id + ']').classList.add('active');
            });

        };
    });
};*/
// nav active maker

// scroll behaviour

ScrollReveal({ 
    //reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});
if (window.innerWidth > 768) {
    ScrollReveal().reveal('.home-content, .about-head, .title, .lightmode', { origin: 'top'});
    ScrollReveal().reveal('.project-content, .bt, .btn, .input-box2, .c-bottom', { origin: 'bottom'});
    ScrollReveal().reveal('.right, .rightskill', { origin: 'right'});
    ScrollReveal().reveal('.left', { origin: 'left' });
}
if (window.innerWidth <= 768) {
    ScrollReveal().reveal('.home-content, .about-head, .title', { origin: 'top', distance: '40px' });
    ScrollReveal().reveal('.project-content, .bt, .btn, .input-box2, .c-bottom, .bottomskill', { origin: 'bottom', distance: '40px' });
    ScrollReveal().reveal('.right', { origin: 'right', distance: '20px'});
    ScrollReveal().reveal('.left', { origin: 'left', distance: '20px' });
}
