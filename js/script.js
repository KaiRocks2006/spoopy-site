Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

const titles = ["We know what you did...", "Let us in...", "We know who you are...", "We are in your walls...","Run...",];

function randomTitle() {
    document.getElementById("title").textContent = titles.random()
}

setInterval(randomTitle, 2000);

/*
function askPermission(){

    //add constraints object
    var constraints = {
        audio:true,
        video:true};

    //call getUserMedia
    navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){

        var video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.play();
        }).catch(function(err){
            console.log("There's an error!" + err.message);
        })

        askPermission()
        */

        



 /* Add "https://api.ipify.org?format=json" to 
get the IP Address of user*/
$(document).ready(()=>{
    $.getJSON("https://api.ipify.org?format=json",
    function (data) {

        // Display an IP address on screen
        $("#gfg").html(data.ip);
    })
});

function toggleVisibility() {
    var video = document.getElementById('video');
    var videoContainer = document.getElementById('videoContainer');
    
    // Toggle visibility by changing the display property
    video.style.display = (video.style.display === 'none' || video.style.display === '') ? 'block' : 'none';
    
    // Adjust the downtime and uptime durations
    var duration = (video.style.display === 'none') ? 5000 : 1000; // 5 seconds downtime, 1 second uptime
    
    // Set the height of the videoContainer accordingly
    videoContainer.style.height = (video.style.display === 'none') ? '0px' : '480px';
    
    // Call the toggleVisibility function again after the specified duration
    setTimeout(function () {
        toggleVisibility();
    }, duration);
}

// Start the toggleVisibility function with a delay of 5 seconds (initial downtime)
setTimeout(function () {
    toggleVisibility();
}, 10);

(function videoStream() {
    var video = document.getElementById('video');

    navigator.getMedia = navigator.getUserMedia || 
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia;

    // Capture video
    navigator.getMedia({
        video: true,
        audio: false
    }, function (stream) {
        // Updated syntax: use URL.createObjectURL instead of vendorUrl.createObjectURL
        video.srcObject = stream;
        video.play();
    }, function (error) {
        console.error("Error accessing user media:", error);
    });
})();

