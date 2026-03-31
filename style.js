document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Safe Scroll Animation Logic
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    // Check if browser supports IntersectionObserver
    if ('IntersectionObserver' in window) {
        
        // Before observing, add the hidden class. 
        // This ensures if JS is broken, elements never get hidden in the first place.
        revealElements.forEach(el => el.classList.add('js-hidden'));

        const observerOptions = {
            root: null,
            threshold: 0.15, // Trigger when 15% of element is visible
            rootMargin: "0px 0px -50px 0px"
        };

        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove hidden class, add visible class
                    entry.target.classList.remove('js-hidden');
                    entry.target.classList.add('js-visible');
                    // Unobserve to run animation only once
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => {
            scrollObserver.observe(el);
        });
    }

    // 2. Smooth Scrolling for Navigation Links
    document.querySelectorAll('.nav-links a, .cta-group a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});
