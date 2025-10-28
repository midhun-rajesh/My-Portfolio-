// This waits for the HTML document to be fully loaded and parsed
// before trying to find any elements. This is the safest way.
document.addEventListener('DOMContentLoaded', function() {
    
    // --------------------------------------------------------------------
    // 1. MOBILE NAVIGATION LOGIC
    // --------------------------------------------------------------------
    
    // Find the buttons and the overlay by their IDs
    const menuToggle = document.getElementById('menuToggle');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const closeNavBtn = document.getElementById('closeNavBtn');
    
    // Find all the links inside the mobile menu
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-list .nav-link');

    // --- Action 1: Open the menu ---
    // Add a click listener to the hamburger menu button
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            // Add the .open class to the overlay to make it slide in
            mobileNavOverlay.classList.add('open');
        });
    }

    // --- Action 2: Close the menu with the 'X' button ---
    // Add a click listener to the 'X' close button
    if (closeNavBtn) {
        closeNavBtn.addEventListener('click', function() {
            // Remove the .open class to hide the overlay
            mobileNavOverlay.classList.remove('open');
        });
    }
    
    // --- Action 3: Close the menu after clicking a link (e.g., "About") ---
    // Loop over every link in the mobile menu
    mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // When a link is clicked, hide the overlay
            mobileNavOverlay.classList.remove('open');
        });
    });

    // --------------------------------------------------------------------
    // 2. GO-TO-TOP BUTTON LOGIC
    // --------------------------------------------------------------------
    const goToTopBtn = document.getElementById('goToTopBtn');

    if (goToTopBtn) {
        // Listen for the user scrolling
        window.addEventListener('scroll', function() {
            // If user has scrolled more than 300px down, show the button
            if (window.scrollY > 300) {
                goToTopBtn.classList.add('show');
            } else {
                // Otherwise, hide it
                goToTopBtn.classList.remove('show');
            }
        });

        // When the button is clicked, scroll to the top
        goToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --------------------------------------------------------------------
    // 3. SMOOTH SCROLLING FOR ALL PAGE LINKS
    // --------------------------------------------------------------------
    
    // Find ALL <a> links that start with a '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent the default "jump"
            e.preventDefault(); 
            
            const hash = this.hash; // Get the href value (e.g., "#about")
            const targetElement = document.querySelector(hash);

            if (targetElement) {
                // Get the top position of the target element
                let targetPosition = targetElement.offsetTop;
                
                // Offset for the sticky navbar, but NOT for the #hero link
                if (hash !== '#hero') {
                    // 70px is a good guess for your navbar height
                    targetPosition = targetPosition - 70; 
                }
                
                // Scroll to that position smoothly
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
