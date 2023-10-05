const list = document.querySelectorAll('.list');
const icons = document.querySelectorAll('.navigation ul li a .icon');

function activeLink() {
    // Remove the 'active' class from all list items
    list.forEach((item) => item.classList.remove('active'));
    
    // Add the 'active' class to the clicked list item
    this.classList.add('active');

    const iconText = this.querySelector(".text").textContent.toLowerCase();
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

    // Change the color of the --clr variable
    document.documentElement.style.setProperty("--circle-icon", newColor);
}

// Add click event listeners to all list items
list.forEach((item) => item.addEventListener('click', activeLink));
