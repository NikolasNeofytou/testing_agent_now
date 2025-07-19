document.addEventListener('DOMContentLoaded', () => {
    // Example script: smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight navigation link based on scroll position
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-list a');

    function highlightNav() {
        let index = sections.length;
        while(--index && window.scrollY + 80 < sections[index].offsetTop) {}
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    highlightNav();
    window.addEventListener('scroll', highlightNav);
});
