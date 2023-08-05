const getStoredTheme = () => localStorage.getItem('theme')
const setStoredTheme = theme => localStorage.setItem('theme', theme)

function setTheme() {
    var theme = '';
    if (getStoredTheme() === 'dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    document.documentElement.setAttribute('data-bs-theme', theme);
    setStoredTheme(theme);
}