Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

const titles = ["We know what you did...", "Let us in...", "We know who you are...", "We are in your walls..."];

function randomTitle() {
    document.getElementById("title").textContent = titles.random()
}

setInterval(randomTitle, 500);
