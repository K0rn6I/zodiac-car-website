document.addEventListener("DOMContentLoaded", () => {
  fetch("../components/navbar.html")
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load navbar: ${response.status}`);
      return response.text();
    })
    .then(data => {
      const navbarDiv = document.getElementById("navbar");
      if (navbarDiv) {
        navbarDiv.innerHTML = data;
        console.log("Navbar loaded successfully");
      } else {
        console.error("Element with id 'navbar' not found");
      }
    })
    .catch(error => console.error("Navbar loading error:", error));
});

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) {
    navLinks.classList.toggle("active");
    console.log("Menu toggled");
  } else {
    console.error("Nav links not found");
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  alert("Te-ai deconectat!");
  window.location.href = "../signin/index.html";
}