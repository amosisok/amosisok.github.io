function links() {
let aboutLink = document.getElementById("aboutLink");
let about = document.getElementById("about");

let projectsLink = document.getElementById("projectsLink");
let projects = document.getElementById("projects");

let experienceLink = document.getElementById("experienceLink");
let experience = document.getElementById("experience");

aboutLink.addEventListener("click", function() {
    about.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
});

projectsLink.addEventListener("click", function() {
    projects.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
});

experienceLink.addEventListener("click", function() {
    experience.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
});
}

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('item-animation');
      }
    });
  });
  
  const viewbox = document.querySelectorAll('.experience');
  viewbox.forEach(item => {
    observer.observe(item);
  });

links();