window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var container = document.querySelector('.container');
    if (scrollPosition > 100) { // Changez la valeur pour ajuster le déclenchement
        container.classList.add('scrolled');
    } else {
        container.classList.remove('scrolled');
    }
});