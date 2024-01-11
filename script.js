document.addEventListener("DOMContentLoaded", function() {
    let copyrightYear = document.getElementById("copyright_year");

    copyrightYear.innerText = new Date().getFullYear()
})