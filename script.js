function links() {
let aboutLink = document.getElementById("aboutLink");
let about = document.getElementById("about");
aboutLink.addEventListener("click", function() {
    about.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
})
}

links();