Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

const titles = ["We know what you did...", "Let us in...", "We know who you are...", "We are in your walls...", "Run...",];

function randomTitle() {
    document.getElementById("title").textContent = titles.random()
}

$(document).ready(() => {
    $.getJSON("https://api.ipify.org?format=json",
        function (data) {
            $("#gfg").html(data.ip);
        })
});

document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('webcam');

    // Function to toggle visibility randomly
    function toggleVisibilityRandomly() {
      videoElement.style.display = (Math.random() > 0.5) ? 'block' : 'none';
      
      // Set the delay for the next toggle
      const delay = Math.random() * (420 - 5) + 5; // Random delay between 5ms and 420ms
      setTimeout(toggleVisibilityRandomly, delay);
    }

    // Request permission to access the webcam
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        // Set the webcam stream as the video source
        videoElement.srcObject = stream;
        
        // Start the flickering effect
        toggleVisibilityRandomly();
      })
      .catch((error) => {
        console.error('Error accessing the webcam:', error);
      });
  });