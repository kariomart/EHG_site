function updateFloaterPosition() {
    const floater = document.querySelector('.floater');
    const gallery = document.querySelector('.gallery');
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Mobile: just set absolute position, no floating
        floater.style.position = 'absolute';
        floater.style.top = '1200px';
    } else {
        // Keep desktop exactly as it was
        const galleryTop = gallery.offsetTop;
        const initialTopPosition = galleryTop + (viewportHeight * 0.65);
        const fixedPositionVH = 0.02;
        const triggerPosition = initialTopPosition - (viewportHeight * fixedPositionVH);

        if (scrollPosition >= triggerPosition) {
            floater.classList.add('fixed');
        } else {
            floater.classList.remove('fixed');
        }
    }
}

// Run on load
window.addEventListener('load', updateFloaterPosition);
// Run on scroll
window.addEventListener('scroll', updateFloaterPosition);
// Run on resize
window.addEventListener('resize', updateFloaterPosition);