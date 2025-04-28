function toggleMenu() {
  const iframe = parent.document.getElementById("navbar-iframe");
  const navLinks = iframe.contentDocument.querySelector(".nav-links");
  if (navLinks) {
    navLinks.classList.toggle("active");
    iframe.classList.toggle("active");
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  alert("Te-ai deconectat!");
  window.top.location.href = "../signin/index.html";
}