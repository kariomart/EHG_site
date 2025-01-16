window.addEventListener('scroll', function() {
    const floater = document.querySelector('.floater');
    const scrollPosition = window.scrollY;
    // Calculate trigger based on viewport height (155vh)
    const triggerPosition = window.innerHeight * 1.55;

    if (window.innerWidth >= 400) {
        if (scrollPosition >= triggerPosition) {
            floater.classList.add('fixed');
        } else {
            floater.classList.remove('fixed');
        }
    }
});