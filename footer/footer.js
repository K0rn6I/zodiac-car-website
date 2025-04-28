const footerHTML = `
  <footer class="footer">
    <div class="footer-content">
      <p>© 2025 Zodia & Mașina. Toate drepturile rezervate.</p>
      <ul class="footer-links">
        <li><a href="../main/index.html">Acasă</a></li>
        <li><a href="../about/index.html">Despre</a></li>
      </ul>
    </div>
  </footer>
`;

function insertFooter() {
  const footerContainer = document.createElement('div');
  footerContainer.innerHTML = footerHTML;
  document.body.appendChild(footerContainer);
}

// Вставляем футер при загрузке страницы
document.addEventListener("DOMContentLoaded", insertFooter);