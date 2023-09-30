
document.addEventListener('DOMContentLoaded', function () {
    // Get the current path from the URL
    const path = window.location.pathname;

    // Set the active class for the corresponding link
    setActiveClass(path);

    // Add click event listeners to all navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            // Prevent the default link behavior

            // Get the href attribute of the clicked link
            const href = this.getAttribute('href');

            // Set the active class for the corresponding link
            setActiveClass(href);
        });
    });
});

function setActiveClass(path) {
    // Find the link with the matching href and add the 'active' class
    const activeLink = document.querySelector(`.nav-link[href="${path}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}
