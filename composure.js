function openpref() {
    window.open("options.html");
}
window.onload = function () {
    document.getElementById('preferences').onclick = openpref;
}
