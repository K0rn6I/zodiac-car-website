document.addEventListener("DOMContentLoaded", () => {
  fetch("../components/footer/footer.html")
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load footer: ${response.status}`);
      return response.text();
    })
    .then(data => {
      const footerDiv = document.getElementById("footer");
      if (footerDiv) {
        footerDiv.innerHTML = data;
        console.log("Footer loaded successfully");
      } else {
        console.error("Element with id 'footer' not found");
      }
    })
    .catch(error => console.error("Footer loading error:", error));
});