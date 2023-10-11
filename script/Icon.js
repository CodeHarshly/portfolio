const list = document.querySelectorAll('.list');
const sections = document.querySelectorAll('section');
const icons = document.querySelectorAll('.navigation ul li a .icon');

let clickEventOccurred = true;

function setActiveLink(sectionId) {
    // Remove the 'active' class from all list items
    list.forEach((item) => item.classList.remove('active'));

    // Add the 'active' class to the list item corresponding to the current section
    const listItem = document.querySelector(`[href="#${sectionId}"]`);
    if (listItem) {
        listItem.parentElement.classList.add('active');
    }

    var iLightMode = localStorage.getItem("lightMode");

    if (iLightMode === "1") {
        const iconText = listItem.querySelector(".text").textContent.toLowerCase();
        let newColor;

        // Set the --clr variable based on the clicked icon
        switch (iconText) {
           case "about":
                newColor = "rgb(216, 216, 216)";
                break;
            case "skills":
                newColor = "#ffffffe8";
                break;
            case "project":
                newColor = "rgb(216, 216, 216)";
                break;
            case "contact":
                newColor = "#ffffffe8";
                break;
            default:
                newColor = "white"; // Default color
                break;
        }

        // Change the color of the --clr variable
        document.documentElement.style.setProperty("--circle-icon", newColor);
    } 
    else {
        const iconText = listItem.querySelector(".text").textContent.toLowerCase();
        let newColor;

        // Set the --clr variable based on the clicked icon
        switch (iconText) {
            case "about":
                newColor = "#272727";
                break;
            case "skills":
                newColor = "#383838";
                break;
                case "project":
                newColor = "#272727";
                break;
            case "contact":
                newColor = "#383838";
                break;
            default:
                newColor = "#212121"; // Default color
                break;
        }
        document.documentElement.style.setProperty("--circle-icon", newColor);

    }
}

function handleScroll() {
    // Find the section that is currently in the viewport
    let currentSection = '';
    /*sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            currentSection = section.id;
        }
    });*/
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 850;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            currentSection = sec.id;

        };
    });
    // Set the active link based on the current section
    setActiveLink(currentSection);
}


// Add click event listeners to all list items
list.forEach((item) => item.addEventListener('click', function () {
    console.log("yes");
    preventDefault();
    list.forEach((item) => item.classList.remove('active'));
    
    // Add the 'active' class to the clicked list item
    this.classList.add('active');
    
}));

// Listen for scroll events to automatically update the active link

window.addEventListener('scroll', handleScroll);


