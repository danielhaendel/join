async function init() {
    await loadHeaderFooter();
}

async function initMain() {
    await loadMain();
    await loadSummary();
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