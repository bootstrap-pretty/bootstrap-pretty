/**
 * --------------------------------------------------------------------------
 * Bootstrap Pretty (0.2.0): head-bootstrap-pretty-theme-toggle.js
 * Licensed under Apache-2.0 (https://github.com/bootstrap-pretty/bootstrap-pretty/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const showActiveTheme = theme => {
    const activeThemeIcon = document.querySelector('.theme-icon-active');
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
    const svgOfActiveBtn = btnToActive.querySelector('svg');

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active');
        element.querySelector('svg:nth-of-type(2)').classList.add('d-none');
    });

    btnToActive.classList.add('active');
    btnToActive.querySelector('svg:nth-of-type(2)').classList.remove('d-none');

    activeThemeIcon.outerHTML = svgOfActiveBtn.outerHTML;
    document.querySelector('#bp-theme-dropdown svg').classList.add('theme-icon-active');
};

const themeDropdown = () => {
    const storedTheme = localStorage.getItem('theme');

    const getPreferredTheme = () => {
        if (storedTheme) {
            return storedTheme;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = theme => {
        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme);
        }
    };

    setTheme(getPreferredTheme());

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (storedTheme !== 'light' || storedTheme !== 'dark') {
            setTheme(getPreferredTheme());
        }
    });

    window.addEventListener('DOMContentLoaded', () => {
        showActiveTheme(getPreferredTheme());

        document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const theme = toggle.getAttribute('data-bs-theme-value');

                localStorage.setItem('theme', theme);
                setTheme(theme);
                showActiveTheme(theme);
            });
        });
    });
};

themeDropdown();

export default themeDropdown;
