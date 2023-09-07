document.addEventListener("DOMContentLoaded", function() {
    const lastUpdated = document.getElementById("last-updated");
    lastUpdated.textContent = new Date().toLocaleDateString();
  });
  