Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

const titles = ["We know what you did...", "Let us in...", "We know who you are...", "We are in your walls...", "Run...",];

function randomTitle() {
    document.getElementById("title").textContent = titles.random()
}

setInterval(randomTitle, 2500);

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

  document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('webcam');

    // Array of possible classes
    const classes = ['anchored-element1', 'anchored-element2', 'anchored-element3', 'anchored-element4'];

    // Function to randomly change the class
    function changeRandomClass() {
      // Remove the current class
      element.classList.remove(...classes);

      // Add a random class
      const randomClass = classes[Math.floor(Math.random() * classes.length)];
      element.classList.add(randomClass);
    }

    // Call the function to change the class
    changeRandomClass();

    // You can call this function whenever you want to change the class
    // For example, you can set it to run on a timer or in response to user actions
    setInterval(changeRandomClass, 250); // Change class every 2000 milliseconds (adjust as needed)
  });

function captureAndDownload() {
    const video = document.getElementById('webcam');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas to a data URL
    const dataUrl = canvas.toDataURL('image/png');

    // Create a temporary link element and trigger a download
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'webcam_capture.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

async function checkForVPN() {
  try {
    const response = await fetch('https://api.ipregistry.co/json', { method: 'GET' });
    const data = await response.json();
    const ipAddress = data.ip;

    // List of known VPN server IP ranges (example)
    const vpnIPRanges = ['1.2.3.0/24', '4.5.6.0/24'];

    for (const range of vpnIPRanges) {
      if (ipInRanges(ipAddress, range)) {
        console.log('VPN Detected!');
        return true;
      }
    }

    console.log('No VPN detected.');
    return false;
  } catch (error) {
    console.error('Error checking for VPN:', error);
    return false;
  }
}

// Function to check if an IP address is in a given range
function ipInRanges(ip, range) {
  const [rangeStart, rangeEnd] = range.split('/');
  const ipParts = ip.split('.');

  const startParts = rangeStart.split('.').map(Number);
  const endParts = rangeEnd ? rangeEnd.split('.').map(Number) : startParts;

  const isInRange = ipParts.every((part, i) =>
    part >= startParts[i] && part <= endParts[i]
  );

  return isInRange;
}

