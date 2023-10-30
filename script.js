/*~~~~~~~~~~~~~~~~~~~~~~~~~~VARIABLES~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const websiteName = document.getElementById("website-name"),
  checkbox = document.getElementById("hamburger-checkbox"),
  navListMobile = document.getElementById("nav-list-mobile"),
  contents = document.querySelectorAll("#nav-list-mobile .nav-link-mobile a"),
  sliders = document.getElementsByClassName("slider"),
  contactSliders = document.getElementsByClassName("slider-contact"),
  profileContainer = document.getElementById("profile-container"),
  aboutMe = document.getElementById("about-me"),
  aboutMeParagraphs = document.getElementsByClassName("about-me-paragraph"),
  projectTiles = document.getElementsByClassName("project-tile"),
  getDate = new Date(),
  currentYear = getDate.getFullYear(),
  copyright = document.getElementById("copyright");

/*~~~~~~~~~~~~~~~~~~~~~~~~~~WEBSITE NAME~~~~~~~~~~~~~~~~~~~~~~~~~~*/

websiteName.innerText = "<GuevsDev/>";

/*~~~~~~~~~~~~~~~~~~~~~~~~~~NAV LIST MOBILE INTERACTION~~~~~~~~~~~~~~~~~~~~~~~~~~*/

checkbox.onclick = () =>
  (navListMobile.style.top = checkbox.checked ? "2.75rem" : "-7.75rem");

for (let content of contents)
  content.onclick = () => {
    checkbox.checked = false;
    navListMobile.style.top = "-7.75rem";
  };

/*~~~~~~~~~~~~~~~~~~~~~~~~~~PROJECT TILE INTERACTION~~~~~~~~~~~~~~~~~~~~~~~~~~*/

for (let tile of projectTiles) {
  function hoverTile() {
    if (tile.getAttribute("class").includes("web-page"))
      tile.firstElementChild.firstElementChild.style.transform = "scale(1)";
    if (tile.getAttribute("class").includes("web-app"))
      tile.firstElementChild.firstElementChild.style.transform = "scale(1.25)";
  }

  function unhoverTile() {
    if (tile.getAttribute("class").includes("web-page"))
      tile.firstElementChild.firstElementChild.style.transform = "scale(1.25)";
    if (tile.getAttribute("class").includes("web-app"))
      tile.firstElementChild.firstElementChild.style.transform = "scale(1)";
  }

  tile.addEventListener("pointerover", hoverTile);
  tile.addEventListener("pointerout", unhoverTile);
  tile.addEventListener("touchmove", hoverTile);
  tile.addEventListener("touchend", unhoverTile);
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~PROFILE FADE IN~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function appear() {
  profileContainer.style.opacity = "1";
}

document.body.onload = () => {
  profileContainer.style.opacity = "1";

  setTimeout(() => {
    aboutMe.style.opacity = "1";
    for (let aboutMeParagraph of aboutMeParagraphs)
      aboutMeParagraph.style.opacity = "1";
  }, 500);
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~SLIDERS OBSERVER~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const slideOnScroll = new IntersectionObserver(
  (entries, slideOnScroll) => {
    for (let entry of entries) {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        slideOnScroll.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.3 }
);

const appearOnScroll = new IntersectionObserver(
  (entries, appearOnScroll) => {
    for (let entry of entries) {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
        setTimeout(() => (entry.target.style.transition = "0.25s"), 500);
      }
    }
  },
  { threshold: 1 }
);

for (let slider of sliders) slideOnScroll.observe(slider);
for (let contactSlider of contactSliders) appearOnScroll.observe(contactSlider);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~COPYRIGHT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

copyright.innerText = `© ${currentYear} GuevsDev`;
