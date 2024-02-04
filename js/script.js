Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

const titles = ["We know what you did...", "Let us in...", "We know who you are...", "We are in your walls...","Run...",];

function randomTitle() {
    document.getElementById("title").textContent = titles.random()
}

setInterval(randomTitle, 500);

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

}

askPermission()

 /* Add "https://api.ipify.org?format=json" to 
get the IP Address of user*/
$(document).ready(()=>{
    $.getJSON("https://api.ipify.org?format=json",
    function (data) {

        // Display an IP address on screen
        $("#gfg").html(data.ip);
    })
});

// Check if geolocation is supported by the browser
if ("geolocation" in navigator) {
    // Prompt user for permission to access their location
    navigator.geolocation.getCurrentPosition(
      // Success callback function
      (position) => {
        // Get the user's latitude and longitude coordinates
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
  
        // Do something with the location data, e.g. display on a map
        console.log(`Latitude: ${lat}, longitude: ${lng}`);
      },
      // Error callback function
      (error) => {
        // Handle errors, e.g. user denied location sharing permissions
        console.error("Error getting user location:", error);
      }
    );
  } else {
    // Geolocation is not supported by the browser
    console.error("Geolocation is not supported by this browser.");
  }