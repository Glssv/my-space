const links = document.querySelectorAll(".social-links li");
links.forEach((link) => {
  link.addEventListener("pointerenter", () => {
    link.classList.add("hover");
  });

  link.addEventListener("pointerleave", () => {
    link.classList.remove("hover");
  });
});
