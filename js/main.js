// insert current year at footer (source: https://www.codexworld.com/how-to/get-current-year-to-display-dynamic-year-in-copyright-using-javascript/)
document.getElementById("year").innerHTML = new Date().getFullYear();



// back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
