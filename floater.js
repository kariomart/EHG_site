window.addEventListener('scroll', function() {
    const stickyText = document.querySelectorAll('.floater');
    const contentTop = document.querySelector('.main').offsetTop;
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (window.innerWidth >= 400) {
      if (scrollPosition >= 866) {
        stickyText[0].style.position = 'fixed';
        stickyText[0].style.top = '5vh';
      } else {
        stickyText[0].style.position = 'absolute';
        stickyText[0].style.top = '90vh';
      }
    }
  });