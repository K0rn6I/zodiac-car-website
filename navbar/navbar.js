const navbarHTML = `
  <nav class="navbar">
    <div class="logo">Zodia & Mașina</div>
    <div class="hamburger" onclick="toggleMenu()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="nav-links">
      <li><a href="../main/index.html">Acasă</a></li>
      <li><a href="../about/index.html">Despre</a></li>
      <li><a href="#" onclick="logout()">Deconectare</a></li>
    </ul>
  </nav>
`;

function insertNavbar() {
  const navbarContainer = document.createElement('div');
  navbarContainer.innerHTML = navbarHTML;
  document.body.insertBefore(navbarContainer, document.body.firstChild);
}

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) {
    navLinks.classList.toggle("active");
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  alert("Te-ai deconectat!");
  window.location.href = "../signin/index.html";
}

// Вставляем navbar при загрузке страницы
document.addEventListener("DOMContentLoaded", insertNavbar);