   //sehrwth
   window.addEventListener("scroll", function () {
        const customimage = document.querySelector(".custom-image");
        const innerbanner = document.querySelector(".inner-banner");
        const h1Element = document.querySelector("h1");
        const h3Element = document.querySelector("h3");
        const h2Element = document.querySelector("h2");
        const h4Element = document.querySelector("h4");
        const scrollPos = window.scrollY;
        const scrollThreshold = 100;

        if (scrollPos > scrollThreshold) {
            h1Element.classList.add("hide");
            h2Element.classList.add("hide");
            h3Element.classList.add("hide");
            h4Element.classList.add("hide");
            customimage.style.setProperty("--image-width", "4vw");
            innerbanner.style.setProperty("--position-o", "fixed");
    } else {
        h1Element.classList.remove("hide");
        h2Element.classList.remove("hide");
        h3Element.classList.remove("hide");
        h4Element.classList.remove("hide");
        customimage.style.setProperty("--image-width", "45vw");
        innerbanner.style.setProperty("--position-o", "sticky");
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

       
    