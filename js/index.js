const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    DocumentFragment.body.classList.toggle('nav-open');
})