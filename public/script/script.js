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
    const offset = -window.innerHeight / 5; 
    const targetElement = document.querySelector(sectionId);

    window.scrollTo({
      top: targetElement.offsetTop + offset,
    });
}

function changeBannerMessage(path){
    const bannerMessage = document.getElementById('bannerMessage');

    // Check current page to change the message displayed on banner
    if (path === '/'){
        bannerMessage.innerHTML = '<b class="code-color"> Welcome Visitor... </b><br/> My name is <b class="code-color">[ Selene ]</b> and this is my <i>Life</i>, I am going to show you who I am and what I have created so far.';
    }
    else if (path === '/about') {
        bannerMessage.innerHTML = '<figure><blockquote class="blockquote fs-2"><p><i class="fa fa-quote-left fs-big code-color me-2"></i> When you help someone, you help everyone. <i class="fa fa-quote-right fs-big code-color me-2"></i></p></blockquote><figcaption class="blockquote-footer fs-4">Aunt May, <cite title="Source Title">Marvel’s Spider-Man</cite></figcaption></figure>';
    } 
    else if (path === '/projects'){
        bannerMessage.innerHTML = "Projects";
        bannerMessage.innerHTML = '<figure><blockquote class="blockquote fs-2"><p><i class="fa fa-quote-left fs-big code-color me-2"></i> What is a man but the sum of his memories? We are the stories we live, the tales we tell ourselves. <i class="fa fa-quote-right fs-big code-color me-2"></i></p></blockquote><figcaption class="blockquote-footer fs-4">Clay Kaczmarek, <cite title="Source Title">Assassin’s Creed: Revelations</cite></figcaption></figure>';
    } 
    else if (path === '/services'){    
        bannerMessage.innerHTML = "Services";
        bannerMessage.innerHTML = '<figure><blockquote class="blockquote fs-2"><p><i class="fa fa-quote-left fs-big code-color me-2"></i> What is better – to be born good, or to overcome your evil nature through great effort? <i class="fa fa-quote-right fs-big code-color me-2"></i></p></blockquote><figcaption class="blockquote-footer fs-4">Dragon Paarthurnax, <cite title="Source Title">The Elder Scrolls V: Skyrim</cite></figcaption></figure>';
    } 
    else if (path === '/contact'){
        bannerMessage.innerHTML = "Contact";
        bannerMessage.innerHTML = '<figure><blockquote class="blockquote fs-2"><p><i class="fa fa-quote-left fs-big code-color me-2"></i> Waka Waka Waka <i class="fa fa-quote-right fs-big code-color me-2"></i></p></blockquote><figcaption class="blockquote-footer fs-4">Pac-Man, <cite title="Source Title">Pac-Man</cite></figcaption></figure>';
    };
};

function changeNavBarItems(path){
    const navBarItems = document.getElementById('navbar-side');
    let items = navBarItems.querySelectorAll(".nav-link");
    
    // Check current page to change the value of the side navigation bar
    if (path === '/'){
        items[0].innerHTML = "About Me";
        items[1].innerHTML = "Projects";
        items[2].innerHTML = "Services";
        items[3].innerHTML = "Contact";
    }
    else if (path === '/about'){
        items[0].innerHTML = "Videogames";
        items[1].innerHTML = "Fashion";
        items[2].innerHTML = "Make Up";
        items[3].innerHTML = "Animals";
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
