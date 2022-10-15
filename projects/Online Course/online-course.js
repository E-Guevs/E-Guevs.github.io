const checkbox = document.getElementById("hamburger-icon"),
  contents = document.querySelectorAll("#navbar li");
for (let content of contents)
  content.addEventListener("pointerup", () => (checkbox.checked = false));
