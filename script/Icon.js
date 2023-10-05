const list = document.querySelectorAll('.list');
const sections = document.querySelectorAll('section');

function setActiveLink(sectionId) {
    // Remove the 'active' class from all list items
    list.forEach((item) => item.classList.remove('active'));

    // Add the 'active' class to the list item corresponding to the current section
    const listItem = document.querySelector(`[href="#${sectionId}"]`);
    if (listItem) {
        listItem.parentElement.classList.add('active');
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
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            currentSection = sec.id;

        };
    });
    // Set the active link based on the current section
    setActiveLink(currentSection);
}

// Add click event listeners to all list items
list.forEach((item) => item.addEventListener('click', function (event) {
    console.log("yes");
    event.preventDefault();
    const sectionId = this.querySelector('a').getAttribute('href').substring(1);
    setActiveLink(sectionId);
    const targetSection = document.querySelector(`#${sectionId}`);
    targetSection.scrollIntoView({ behavior: 'smooth' });
}));

// Listen for scroll events to automatically update the active link

window.addEventListener('scroll', handleScroll);
