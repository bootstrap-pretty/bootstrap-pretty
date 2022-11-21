'use strict';

(() => {
    const html = document.documentElement;
    const themeStorage = localStorage.getItem('theme');

    if (themeStorage) {
        html.setAttribute('data-bs-theme', themeStorage);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.setAttribute('data-bs-theme', 'dark');
    } else {
        html.setAttribute('data-bs-theme', 'light');
    }
})();
