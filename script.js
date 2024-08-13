// JavaScript for toggling the mobile menu
document.getElementById('mobile-menu').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('active');
});

// JavaScript for dark/light mode toggle
document.getElementById('mode-switch').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');

    // Save the mode preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
});

// Check the saved mode preference on page load
document.addEventListener('DOMContentLoaded', function () {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('mode-switch').checked = true;
    }
});
