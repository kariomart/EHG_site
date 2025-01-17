function updateFloaterPosition() {
    const floater = document.querySelector('.floater');
    const gallery = document.querySelector('.gallery');
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    
    // Calculate positions based on gallery
    const galleryTop = gallery.offsetTop;
    const initialTopPosition = galleryTop + (viewportHeight * 0.65); // Position it below gallery
    const fixedPositionVH = 0.02; // 2vh expressed as decimal
    
    // Trigger when the absolute position minus scroll would equal the fixed position
    const triggerPosition = initialTopPosition - (viewportHeight * fixedPositionVH);

    if (window.innerWidth >= 400) {
        if (scrollPosition >= triggerPosition) {
            floater.style.position = 'fixed';
            floater.style.top = '2vh';
        } else {
            floater.style.position = 'absolute';
            floater.style.top = `${initialTopPosition}px`;
        }
    }
}

// Run on load
window.addEventListener('load', updateFloaterPosition);
// Run on scroll
window.addEventListener('scroll', updateFloaterPosition);
// Run on resize
window.addEventListener('resize', updateFloaterPosition);