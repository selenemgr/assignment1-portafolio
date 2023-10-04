
document.addEventListener('DOMContentLoaded', function () {
    // Get the current path from the URL
    const path = window.location.pathname;

    // Set the active class for the corresponding link
    setActiveClass(path);

    // Add click event listeners to all navigation links
    document.querySelectorAll('.nav-link-top').forEach(link => {
        link.addEventListener('click', function (event) {
            // Prevent the default link behavior

            // Get the href attribute of the clicked link
            const href = this.getAttribute('href');

            // Set the active class for the corresponding link
            setActiveClass(href);
        });
    });
    
    // Change banner message
    changeBannerMessage(path);

    // Change items descriptions for selection on nav-bar-side
    changeNavBarItems(path); 
});

function setActiveClass(path) {
    // Find the link with the matching href and add the 'active' class
    const activeLink = document.querySelector(`.nav-link-top[href="${path}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Method to scroll and center the content of the nav-list-side
function scrollToSection(sectionId) {
    const offset = -window.innerHeight / 5; // Adjust this value to control the offset
    const targetElement = document.querySelector(sectionId);

    window.scrollTo({
      top: targetElement.offsetTop + offset,
    });
}

function changeBannerMessage(path){
    const bannerMessage = document.getElementById('bannerMessage');

    // Check current page to change the message displayed on banner
    if (path === '/'){
        bannerMessage.innerHTML = "<b> Welcome Visitor... </b><br/> My name is <b>[ Selene ]</b> and this is my <i>Life</i>, I'm going to show you who I am and what I have created so far.";
    }
    else if (path === '/about') {
        bannerMessage.innerHTML = "About ";
    } 
    else if (path === '/projects'){
        bannerMessage.innerHTML = "Projects";
    } 
    else if (path === '/services'){    
        bannerMessage.innerHTML = "Services";
    } 
    else if (path === '/contact'){
        bannerMessage.innerHTML = "Contact";
    };
};

function changeNavBarItems(path){
    const navBarItems = document.getElementById('navbar-side');
    let items = navBarItems.querySelectorAll(".nav-link");
    
    // Check current page to change the message displayed on banner
    if (path === '/'){
        items[0].innerHTML = "About Me";
        items[1].innerHTML = "Projects";
        items[2].innerHTML = "Services";
        items[3].innerHTML = "Contact Me";
    }
    else if (path === '/projects'){
        items[0].innerHTML = "Project 1";
        items[1].innerHTML = "Project 2";
        items[2].innerHTML = "Project 3";
        items[3].innerHTML = "Project 4";
    } 
    else if (path === '/services'){    
        items[0].innerHTML = "Service 1";
        items[1].innerHTML = "Service 2";
        items[2].innerHTML = "Service 3";
        items[3].innerHTML = "Service 4";
    } 
};
