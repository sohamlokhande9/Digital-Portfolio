document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth Scrolling for all internal links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Scroll to the section smoothly
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Optional: Add a tiny Easter egg message in the console for fellow developers
    console.log("%cHello! Thanks for checking out my source code.", "color: #d95c34; font-size: 14px; font-weight: bold;");
    console.log("Built by Soham Lokhande without frameworks.");
});
