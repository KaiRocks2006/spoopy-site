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

        



 /* Add "https://api.ipify.org?format=json" to 
get the IP Address of user*/
$(document).ready(()=>{
    $.getJSON("https://api.ipify.org?format=json",
    function (data) {

        // Display an IP address on screen
        $("#gfg").html(data.ip);
    })
});

var video = document.querySelector('#video');
var startRecord = document.querySelector('#startRecord');
var stopRecord = document.querySelector('#stopRecord');
var downloadLink = document.querySelector('#donloadLink');

window.onload = async function () {
    stopRecord.style.display = 'none'

    videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    });

    video.srcObject = videoStream;
}

startRecord.onclick = function () {
    startRecord.style.display = 'none';
    stopRecord.style.display = 'inline';

    mediaRecorder = new MediaRecorder(videoStream);

    let blob = [];

    mediaRecorder.addEventListener('dataavailable', function (e) {
        blob.push(e.data);
    })

    mediaRecorder.addEventListener('stop', function () {
        var videoLocal = URL.createObjectURL(new Blob(blob));
        downloadLink.href = videoLocal;
    })

    mediaRecorder.start();
}

stopRecord.onclick = function () {
    mediaRecorder.stop();
}