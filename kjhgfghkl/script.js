document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    const videoModal = document.getElementById('video-modal');
    const videoContainer = document.getElementById('video-container');
    const closeBtn = document.getElementById('close-btn');
  
    images.forEach(image => {
      image.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video-id');
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.allowFullscreen = true;
  
        // Get position and size of clicked image
        const rect = image.getBoundingClientRect();
        const imageWidth = rect.width;
        const imageHeight = rect.height;
        const imageTop = rect.top + window.scrollY;
        const imageLeft = rect.left + window.scrollX;
  
        // Set video modal position
        videoModal.style.top = imageTop + 'px';
        videoModal.style.left = imageLeft + 'px';
  
        // Set video container size
        videoContainer.style.width = imageWidth + 'px';
        videoContainer.style.height = imageHeight + 'px';
  
        videoContainer.appendChild(iframe);
        videoModal.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', function() {
      videoContainer.innerHTML = ''; // Clear the iframe content
      videoModal.style.display = 'none';
    });
  
    // Close the modal when clicking outside the video container
    window.addEventListener('click', function(event) {
      if (event.target === videoModal) {
        videoContainer.innerHTML = ''; // Clear the iframe content
        videoModal.style.display = 'none';
      }
    });
  });
  