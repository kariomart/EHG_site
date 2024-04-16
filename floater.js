window.addEventListener('scroll', function() {
    const stickyText = document.querySelector('.floater');
    const contentTop = document.querySelector('.main').offsetTop;
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition >= 866) {
      stickyText.classList.add('sticky');
    } else {
      stickyText.classList.remove('sticky');
    }
  });