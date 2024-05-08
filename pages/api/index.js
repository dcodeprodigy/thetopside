function fetchAndDisplayScriptContent() {
  fetch('/api/get-script-content')
    .then(response => response.text())
    .then(data => {
      // Find the appropriate place to insert the content
      const container = document.getElementById('scriptContentContainer'); 
      if (container) {
        container.innerHTML = data;
      }
    })
    .catch(error => console.error('Error fetching script content:', error));
}

window.addEventListener('DOMContentLoaded', fetchAndDisplayScriptContent);
