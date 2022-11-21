(() => {
    const themeToggles = document.querySelectorAll('.theme-toggle')! as NodeListOf<HTMLInputElement>;

    if (themeToggles) {
        // Set value for all toggles
        const copyThemeToggleValue = themeToggle => {
            for (const i of themeToggles) {
                if (themeToggle.checked) {
                    i.checked = true;
                } else {
                    i.checked = false;
                }
            }
        };

        themeToggles.forEach(themeToggle => {
            const root = document.documentElement;
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

            // const setAdditionalData = themePrefers => {};

            const setToggle = themePrefers => {
                if (themePrefers == 'dark') {
                    themeToggle.checked = true;
                } else {
                    themeToggle.checked = false;
                }

                // setAdditionalData(themePrefers);
            };

            setToggle(root.getAttribute('data-bs-theme'));

            const setTheme = () => {
                const themePrefers = themeToggle.checked ? 'dark' : 'light';

                root.setAttribute('data-bs-theme', themePrefers);
                // setAdditionalData(themePrefers);
            };

            themeToggle.addEventListener('change', setTheme);

            const setSystemTheme = e => {
                const themeSystem = e.matches ? 'dark' : 'light';

                setToggle(themeSystem);
                setTheme();
            };

            systemTheme.addEventListener('change', setSystemTheme);

            themeToggle.addEventListener('click', () => {
                systemTheme.removeEventListener('change', setSystemTheme);

                if (themeToggle.checked) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }

                copyThemeToggleValue(themeToggle);
            }, false);
        });
    }
})();
