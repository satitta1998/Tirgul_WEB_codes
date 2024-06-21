//Manual theme switch - Dark/Light Mode
function switchTheme() {
    if (document.documentElement.classList.contains('dark')) {
        switchToLightMode();
    } else {
        switchToDarkMode();
    }
}

function switchToDarkMode() {
    document.documentElement.classList.add('dark');
}

function switchToLightMode() {
    document.documentElement.classList.remove('dark');
}

document.getElementById('darkModeBtn').addEventListener('click', switchTheme);
document.getElementById('lightModeBtn').addEventListener('click', switchTheme);


