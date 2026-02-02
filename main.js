document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation (Smooth Scroll) ---
    document.querySelectorAll('.sidebar nav ul li a, .button-nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId) {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // --- Language Logic ---
    let currentLang = localStorage.getItem('lang') || 'sv';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update static text
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update dynamic content
        // Check if functions exist before calling to avoid errors
        if (typeof renderProjects === 'function') renderProjects(lang);
        if (typeof renderSkills === 'function') renderSkills();

        // Update button text
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) langToggle.textContent = lang === 'sv' ? 'EN' : 'SV';

        // Update Dark Mode text based on language
        updateDarkModeText();
    }

    // Event Listeners
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'sv' ? 'en' : 'sv';
            setLanguage(newLang);
        });
    }

    // --- Dark Mode Logic ---
    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    function updateDarkModeText() {
        const isDark = document.body.classList.contains('dark-mode');
        const btn = document.querySelector('.next-button');
        if (btn) {
            const key = isDark ? 'toggle_light' : 'toggle_dark';
            btn.setAttribute('data-i18n', key);
            if (translations[currentLang] && translations[currentLang][key]) {
                btn.textContent = translations[currentLang][key];
            }
        }
    }

    // Event Listeners
    const darkToggleBtn = document.getElementById('dark-toggle');
    if (darkToggleBtn) {
        darkToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateDarkModeText();
        });
    }

    // Initialize
    setLanguage(currentLang);
});
