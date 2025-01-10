const links = document.querySelectorAll('.link');
links.forEach(e => {
    e.addEventListener('click', () => {
        links.forEach(el => el.classList.remove('active'));
        e.classList.add('active');
    })
});