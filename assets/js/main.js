const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

const filterButtons = document.querySelectorAll('.news__filters .btn--filter');
const newsCards = document.querySelectorAll('.news__card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove('is-active'));
        button.classList.add('is-active');

        newsCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

const mediaButtons = document.querySelectorAll('.media__filters .btn--filter');
const mediaItems = document.querySelectorAll('.media__item');

mediaButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.media;

        mediaButtons.forEach(btn => btn.classList.remove('is-active'));
        button.classList.add('is-active');

        mediaItems.forEach(item => {
            if (filter === 'all' || item.dataset.media === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
