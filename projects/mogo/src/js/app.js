const navBar = document.getElementById("navBar");

document.addEventListener("scroll", () =>
  window.pageYOffset < navBar.clientHeight
    ? navBar.classList.remove("filled")
    : navBar.classList.add("filled")
);
