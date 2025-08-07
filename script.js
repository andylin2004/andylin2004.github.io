let timeoutFuncID;

document.addEventListener("DOMContentLoaded", function () {
    let copyrightYear = document.getElementById("copyright_year");

    copyrightYear.innerText = new Date().getFullYear();

    let navbar_links = document.getElementById("navbar-links");
    if (window.innerWidth > 500) {
        navbar_links.classList.add("suppress-animations");
    }
})

window.addEventListener("resize", function () {
    let navbar_links = this.document.getElementById("navbar-links");

    this.clearTimeout(timeoutFuncID);
    if (this.window.innerWidth > 500) {
        navbar_links.classList.add("suppress-animations");
        document.getElementById("show-menu-btn").checked = false;
    } else {
        timeoutFuncID = setTimeout(function () {
            navbar_links.classList.remove("suppress-animations");
        }, 500);
    }
    
})