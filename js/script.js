Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

const titles = ["We know what you did...", "Let us in...", "We know who you are...", "We are in your walls...","Run...",];

function randomTitle() {
    document.getElementById("title").textContent = titles.random()
}

setInterval(randomTitle, 500);

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

        
let video = document.querySelector("videoElement")

if(navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch (function (error) {
            console.log("Something went wrong! " + error.message)
        })
    } else {
    console.log("getUserMedia not Supported!")
}


 /* Add "https://api.ipify.org?format=json" to 
get the IP Address of user*/
$(document).ready(()=>{
    $.getJSON("https://api.ipify.org?format=json",
    function (data) {

        // Display an IP address on screen
        $("#gfg").html(data.ip);
    })
});