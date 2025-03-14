function toggleMenu() {
  const element2 = document.getElementById("menu-link2");

  if (window.getComputedStyle(element2).display === "none") {
    element2.style.display = "block";
  } else {
    element2.style.display = "none";
  }
}
