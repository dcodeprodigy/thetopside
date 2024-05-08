function fetchAndDisplayScriptContent() {
  fetch('/pages/api/get-script-content.js')
    .then(response => response.text())
    .then(data => {
      // Find the appropriate place to insert the content
      const container = document.getElementById('contentBox'); 
      if (container) {
        container.innerHTML = data;
      }
    })
    .catch(error => console.error('Error fetching script content:', error));
}

window.addEventListener('DOMContentLoaded', fetchAndDisplayScriptContent);
