function viewWebsite(mode) {
  var url = document.getElementById('urlInput').value;
  var height = document.getElementById('hightinput').value;
  var width = document.getElementById('weightinput').value;
  var frame = document.getElementById('webFrame');
  
  if (url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    frame.src = url;
    
    // Change iframe size based on mode
    if (mode === 'desktop') {
      frame.style.width = '1920px';
      frame.style.height = '768px';
    } else if (mode === 'tablet') {
      frame.style.width = '768px';
      frame.style.height = '1024px';
    } else if (mode === 'mobile') {
      frame.style.width = '375px';
      frame.style.height = '667px';
    } else if (mode === 'handg') {
      frame.style.width = width + 'px'; // Corrected variable usage
      frame.style.height = height + 'px'; // Corrected variable usage
    }
  } else {
    showToast(' Please enter a valid URL.');
}

document.addEventListener("DOMContentLoaded", () => {
  const uploadBtn = document.getElementById("windowBtn");
  const uploadWindow = document.getElementById("adjusWindow");
  const closeUpload = document.getElementById("closewindow");
  
  // Show Upload Window
  uploadBtn.addEventListener("click", () => {
    uploadWindow.style.display = "block";
  });
  
  // Close Upload Window
  closeUpload.addEventListener("click", () => {
    uploadWindow.style.display = "none";
  });
});

function showToast(message) {
    let toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<div class="icon">⚠️</div>
                       <div class="text">${message}</div>
                       <button class="close-btn" onclick="this.parentElement.style.display='none'">✖</button>`;
    
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "fadeOut 0.5s ease-in-out";
        setTimeout(() => toast.remove(), 500);
    }, 5000);
}