function init() {
    loadHeaderFooter();
}

function loadHeaderFooter() {
    fetch('assets/template/desktop_header_menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
    fetch('assets/template/start_footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

function showLogin() {
    document.getElementById("login").classList.remove("d-none");
    document.getElementById("sign-up").classList.add("d-none");
    document.getElementById("sign-up-header").classList.remove("d-none");
}

function showSignup() {
    document.getElementById("sign-up").classList.remove("d-none");
    document.getElementById("login").classList.add("d-none");
    document.getElementById("sign-up-header").classList.add("d-none");
}