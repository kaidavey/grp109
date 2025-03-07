document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".accordion-control");

    headers.forEach(header => {
        header.addEventListener("click", function () {
            // Toggle content visibility
            const content = this.nextElementSibling;
            const arrow = this.firstElementChild;
            if (content.style.display === "block") {
                arrow.style.objectPosition = "top";
                content.style.display = "none";
            } else {
                arrow.style.objectPosition = "bottom";
                content.style.display = "block";
            }
        });
    });
});