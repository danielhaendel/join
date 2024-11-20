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

function loadMain() {
    fetch('assets/template/desktop_menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-page').innerHTML = data;
        })
        .catch(error => console.error('Error loading main:', error));
}

function loadSummary() {
    fetch('assets/template/summary.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
            document.getElementById("title").innerHTML = "Summary";
        })
        .catch(error => console.error('Error loading summary:', error));
}