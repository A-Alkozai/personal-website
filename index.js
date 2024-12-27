//Using Canvas to make bg
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const circleColours = new Map([
    ["light green", ["#6BFF8F", "#33FF57", "#00FF22", "#99FFCC"]],
    ["light blue", ["#00E4FF", "#00C3FF", "#00A3FF", "#33F0FF"]],
    ["light orange", ["#FFC285", "#FF9133", "#FF7000", "#FFD1A3"]],
    ["light purple", ["#D4BFFF", "#B399FF", "#9C80FF", "#DAB6FF"]],
    ["dark purple", ["#BA00FF", "#8E00FF", "#6800FF", "#D580FF"]],
    ["yellow", ["#FFF96F", "#FFF433", "#FFEC00", "#FFFDB3"]],
    ["red", ["#D30000", "#F10000", "#FF0027", "#FF8B8B"]]
]);

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = document.body.scrollHeight;

//Project Page Circles
// drawCircle([150, 1000], 80, "light blue");
// drawCircle([400, 1200], 120, "dark purple");
// drawCircle([1000, 900], 30, "light orange");
// drawCircle([810, 1090], 50, "red");
// drawCircle([110, 1246], 50, "light green");
// drawCircle([1220,1346], 90, "light green");

function drawCircle(position, radius, colour) {
    x = position[0];
    y = position[1];
    let colours = circleColours.get(colour);
    let colour1 = colours[0];
    let colour2 = colours[1];
    let colour3 = colours[2];
    let colour4 = colours[3];

    const grad = ctx.createLinearGradient(x-radius, y-radius, x+radius, y+radius);
    grad.addColorStop(0, colour1);
    grad.addColorStop(0.5, colour2);
    grad.addColorStop(1, colour3);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = grad;
    ctx.shadowBlur = 15;
    ctx.shadowColor = colour4;
    ctx.fill();
}


// When user tries to visit the website they are on
const funText = ["{-_-}", "//\\(oo)/\\\\", "¯\\_(ツ)_/¯", "┻━┻︵ \\(°□°)/ ︵ ┻━┻ ", "(☞ﾟ∀ﾟ)☞", "(ง •̀_•́)ง", "ಠ_ಠ", "(╭ರ_•́)"];
const websiteLink = document.getElementById("this-website-link");
const websiteLinkFooter = document.getElementById("this-website-footer");

websiteLinkFooter.addEventListener("click", myWebsiteLink);

function myWebsiteLink() {
    let innerHTML = websiteLink.innerHTML;

    if (innerHTML == "Visit Website") {
        let index = Math.floor(Math.random() * funText.length);
        websiteLink.innerHTML = funText[index];
        websiteLinkFooter.onclick = inverseMyWebsiteLink; 
    } 
    else {
        websiteLink.innerHTML = "Visit Website"
    }
}    

// Unavailable button
var unavailableButtons = document.querySelectorAll(".unavailable");

for (i = 0; i < unavailableButtons.length; i++) {
    unavailableButtons[i].addEventListener("click", unavailableButton);
}

function unavailableButton(event) {
    var target = event.currentTarget;
    var innerHTML = target.innerHTML;

    target.innerHTML = "Unavailable :C";
    target.removeEventListener("click", unavailableButton);
    setTimeout(revertUnavailableButton, 1000, event.currentTarget, innerHTML);
}

function revertUnavailableButton(target, original) {
    target.innerHTML = original;
    target.addEventListener("click", unavailableButton);
}